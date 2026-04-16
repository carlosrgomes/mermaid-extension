import { describe, it, expect } from 'vitest';
import * as index from '../src/index.js';

describe('Index Entry Point', () => {
  it('should export all services', () => {
    expect(index.MermaidGenerator).toBeDefined();
    expect(index.PngExporter).toBeDefined();
    expect(index.MermaidValidator).toBeDefined();
    expect(index.MermaidPromptBuilder).toBeDefined();
  });
});