import { execFile } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execFileAsync = promisify(execFile);

export class PngExporter {
  async export(mermaidCode: string, outputPath: string): Promise<void> {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mermaid-'));
    const inputPath = path.join(tempDir, 'input.mmd');

    // Calculate .mmd path (same base name as outputPath)
    const parsedPath = path.parse(outputPath);
    const mmdPath = path.join(parsedPath.dir, `${parsedPath.name}.mmd`);
    
    try {
      // Save original source code to final destination
      await fs.writeFile(mmdPath, mermaidCode, 'utf-8');

      // Save to temp file for rendering
      await fs.writeFile(inputPath, mermaidCode, 'utf-8');
      
      // Using npx to ensure mmdc is available from node_modules
      await execFileAsync('npx', ['mmdc', '-i', inputPath, '-o', outputPath]);
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}