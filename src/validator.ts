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
      await execFileAsync('npx', ['mmdc', '-i', inputPath, '-o', outputPath]);
      return { isValid: true };
    } catch (error: any) {
      return { isValid: false, error: error.stderr || error.message };
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}