import { execFile } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execFileAsync = promisify(execFile);

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class MermaidValidator {
  async validate(mermaidCode: string): Promise<ValidationResult> {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mermaid-val-'));
    const inputPath = path.join(tempDir, 'input.mmd');
    const outputPath = path.join(tempDir, 'output.svg'); // Just to verify it can render

    try {
      await fs.writeFile(inputPath, mermaidCode, 'utf-8');

      const __dirname = path.dirname(new URL(import.meta.url).pathname);
      const possibleMmdcPaths = [
        path.resolve(__dirname, '../node_modules/.bin/mmdc'),
        path.resolve(__dirname, '../../node_modules/.bin/mmdc'), // For dist/
        path.resolve(process.cwd(), 'node_modules/.bin/mmdc'),
      ];

      let localMmdc: string | undefined;
      for (const p of possibleMmdcPaths) {
        try {
          await fs.access(p);
          localMmdc = p;
          break;
        } catch {
          continue;
        }
      }

      const bin = localMmdc || 'npx';
      const args =
        bin === 'npx'
          ? ['mmdc', '-i', inputPath, '-o', outputPath]
          : ['-i', inputPath, '-o', outputPath];

      await execFileAsync(bin, args);
      return { isValid: true };
    } catch (error: unknown) {
      const err = error as { stderr?: string; message: string };
      return { isValid: false, error: err.stderr || err.message };
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}
