export class MermaidPromptBuilder {
  build(description: string): string {
    return `
Generate a Mermaid diagram based on the following description:
"${description}"

Requirements:
- Output only the Mermaid code block.
- Ensure the syntax is correct.
- Do not include any explanation.
    `.trim();
  }
}