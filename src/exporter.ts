import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

export class PngExporter {
  async export(mermaidCode: string, outputPath: string): Promise<void> {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mermaid-'));
    const inputPath = path.join(tempDir, 'input.mmd');
    
    try {
      await fs.writeFile(inputPath, mermaidCode, 'utf-8');
      // Using npx to ensure mmdc is available from node_modules
      const command = `npx mmdc -i ${inputPath} -o ${outputPath}`;
      await execAsync(command);
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}