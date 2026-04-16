import { describe, it, expect, vi } from 'vitest';
import { PngExporter } from '../src/exporter.js';
import { exec } from 'child_process';

vi.mock('child_process', () => ({
  exec: vi.fn((cmd, cb) => cb(null, { stdout: '', stderr: '' }))
}));

describe('PngExporter', () => {
  it('should call mmdc with correct arguments', async () => {
    const exporter = new PngExporter();
    const mermaidCode = 'graph TD; A-->B;';
    const outputPath = 'test.png';
    
    await exporter.export(mermaidCode, outputPath);
    
    expect(exec).toHaveBeenCalled();
    const call = vi.mocked(exec).mock.calls[0];
    expect(call[0]).toContain('mmdc');
    expect(call[0]).toContain('-i');
    expect(call[0]).toContain('-o');
    expect(call[0]).toContain(outputPath);
  });
});