"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const exporter_js_1 = require("../src/exporter.js");
const child_process_1 = require("child_process");
vitest_1.vi.mock('child_process', () => ({
    execFile: vitest_1.vi.fn((cmd, args, cb) => cb(null, { stdout: '', stderr: '' }))
}));
(0, vitest_1.describe)('PngExporter', () => {
    (0, vitest_1.it)('should call mmdc with correct arguments', async () => {
        const exporter = new exporter_js_1.PngExporter();
        const mermaidCode = 'graph TD; A-->B;';
        const outputPath = 'test.png';
        await exporter.export(mermaidCode, outputPath);
        (0, vitest_1.expect)(child_process_1.execFile).toHaveBeenCalled();
        const call = vitest_1.vi.mocked(child_process_1.execFile).mock.calls[0];
        (0, vitest_1.expect)(call[0]).toBe('npx');
        (0, vitest_1.expect)(call[1]).toContain('mmdc');
        (0, vitest_1.expect)(call[1]).toContain('-i');
        (0, vitest_1.expect)(call[1]).toContain('-o');
        (0, vitest_1.expect)(call[1]).toContain(outputPath);
    });
});
