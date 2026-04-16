import { describe, it, expect, vi } from 'vitest';
import { MermaidGenerator } from '../src/generator.js';

describe('MermaidGenerator', () => {
  it('should extract Mermaid code from LLM response with code blocks', async () => {
    const mockResponse = 'Here is your diagram:\n```mermaid\ngraph TD\n  A --> B\n```\nHope you like it!';
    const generator = new MermaidGenerator(null as any); // Mocked LLM
    
    const result = generator.extractCode(mockResponse);
    expect(result).toBe('graph TD\n  A --> B');
  });

  it('should extract Mermaid code when no code block is present', async () => {
    const mockResponse = 'graph TD\n  A --> B';
    const generator = new MermaidGenerator(null as any);
    
    const result = generator.extractCode(mockResponse);
    expect(result).toBe('graph TD\n  A --> B');
  });

  it('should call the model and return extracted code', async () => {
    const mockModel = {
      generateContent: vi.fn().mockResolvedValue({
        response: {
          text: () => '```mermaid\ngraph TD\n  A --> B\n```'
        }
      })
    };
    const generator = new MermaidGenerator(mockModel as any);
    const result = await generator.generate('test description');
    
    expect(mockModel.generateContent).toHaveBeenCalled();
    expect(result).toBe('graph TD\n  A --> B');
  });
});