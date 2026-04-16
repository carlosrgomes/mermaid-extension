import { GenerativeModel } from '@google/generative-ai';
import { MermaidPromptBuilder } from './promptBuilder.js';
import { MermaidValidator } from './validator.js';

export class MermaidGenerator {
  constructor(
    private model: GenerativeModel,
    private validator?: MermaidValidator
  ) {}

  async generate(description: string, maxRetries = 2): Promise<string> {
    const builder = new MermaidPromptBuilder();
    let prompt = builder.build(description);
    let attempts = 0;

    while (attempts <= maxRetries) {
      const result = await this.model.generateContent(prompt);
      const text = result.response.text();
      const code = this.extractCode(text);

      if (!this.validator) {
        return code;
      }

      const validation = await this.validator.validate(code);
      if (validation.isValid) {
        return code;
      }

      attempts++;
      prompt = `
The following Mermaid code has a syntax error:
\`\`\`mermaid
${code}
\`\`\`

Error:
${validation.error}

Please provide a corrected version of the code. Output only the code block.
      `.trim();
    }

    throw new Error('Failed to generate valid Mermaid code after retries.');
  }

  extractCode(text: string): string {
    // Look for ```mermaid ... ``` or ``` ... ```
    const mermaidRegex = /```(?:mermaid)?\n([\s\S]*?)```/;
    const match = text.match(mermaidRegex);
    if (match) {
      return match[1].trim();
    }
    return text.trim();
  }
}