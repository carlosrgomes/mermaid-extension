import { describe, it, expect } from 'vitest';
import { MermaidPromptBuilder } from '../src/promptBuilder.js';

describe('MermaidPromptBuilder', () => {
  it('should generate a prompt containing the user description', () => {
    const description = 'Create a flowchart of a login process';
    const builder = new MermaidPromptBuilder();
    const prompt = builder.build(description);
    
    expect(prompt).toContain(description);
    expect(prompt).toContain('Mermaid');
    expect(prompt).toContain('code block');
  });
});