import { execFile } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

const execFileAsync = promisify(execFile);

export interface ExportResult {
  pngPath: string;
  mmdPath: string;
}

export class PngExporter {
  async export(mermaidCode: string, outputPath: string): Promise<ExportResult> {
    const normalizedPath = outputPath.endsWith('.png')
      ? outputPath
      : `${outputPath}.png`;
    const absolutePngPath = path.resolve(process.cwd(), normalizedPath);
    const parsedPath = path.parse(absolutePngPath);
    const absoluteMmdPath = path.join(parsedPath.dir, `${parsedPath.name}.mmd`);

    // Ensure directory exists
    await fs.mkdir(parsedPath.dir, { recursive: true });

    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'mermaid-'));
    const tempInputPath = path.join(tempDir, 'input.mmd');

    try {
      // Save original source code to final destination
      await fs.writeFile(absoluteMmdPath, mermaidCode, 'utf-8');

      // Save to temp file for rendering
      await fs.writeFile(tempInputPath, mermaidCode, 'utf-8');

      // Prefer local bin/mmdc over npx for performance and offline capability
      const localMmdc = path.resolve(process.cwd(), 'node_modules/.bin/mmdc');
      const bin = await fs
        .access(localMmdc)
        .then(() => localMmdc)
        .catch(() => 'npx');
      const args =
        bin === 'npx'
          ? ['mmdc', '-i', tempInputPath, '-o', absolutePngPath]
          : ['-i', tempInputPath, '-o', absolutePngPath];

      await execFileAsync(bin, args);

      return {
        pngPath: absolutePngPath,
        mmdPath: absoluteMmdPath,
      };
    } finally {
      await fs.rm(tempDir, { recursive: true, force: true });
    }
  }
}
