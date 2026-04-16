import { GenerativeModel } from '@google/generative-ai';
import { MermaidPromptBuilder } from './promptBuilder.js';

export class MermaidGenerator {
  constructor(private model: GenerativeModel) {}

  async generate(description: string): Promise<string> {
    const builder = new MermaidPromptBuilder();
    const prompt = builder.build(description);
    const result = await this.model.generateContent(prompt);
    const text = result.response.text();
    return this.extractCode(text);
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