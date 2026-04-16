import { describe, it, expect, vi } from 'vitest';
import { MermaidGenerator } from '../src/generator.js';

describe('MermaidGenerator Error Recovery', () => {
  it('should retry generation if the first attempt has invalid syntax', async () => {
    const mockModel = {
      generateContent: vi.fn()
        .mockResolvedValueOnce({
          response: { text: () => 'invalid syntax' }
        })
        .mockResolvedValueOnce({
          response: { text: () => '```mermaid\ngraph TD\n  A --> B\n```' }
        })
    };
    
    // We need a validator that tells us it's invalid
    const mockValidator = {
      validate: vi.fn()
        .mockResolvedValueOnce({ isValid: false, error: 'Syntax Error' })
        .mockResolvedValueOnce({ isValid: true })
    };

    const generator = new MermaidGenerator(mockModel as any, mockValidator as any);
    const result = await generator.generate('test description');
    
    expect(mockModel.generateContent).toHaveBeenCalledTimes(2);
    expect(mockValidator.validate).toHaveBeenCalledTimes(2);
    expect(result).toBe('graph TD\n  A --> B');
  });
});