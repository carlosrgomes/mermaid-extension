import { describe, it, expect } from 'vitest';
import * as index from '../src/index.js';

describe('Index Entry Point', () => {
  it('should export core services', () => {
    expect(index.PngExporter).toBeDefined();
    expect(index.MermaidValidator).toBeDefined();
  });
});