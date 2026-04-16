"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const validator_js_1 = require("../src/validator.js");
const child_process_1 = require("child_process");
vitest_1.vi.mock('child_process', () => ({
    execFile: vitest_1.vi.fn((cmd, args, cb) => cb(null, { stdout: '', stderr: '' }))
}));
(0, vitest_1.describe)('MermaidValidator', () => {
    (0, vitest_1.it)('should return valid true when mmdc succeeds', async () => {
        const validator = new validator_js_1.MermaidValidator();
        const result = await validator.validate('graph TD; A-->B;');
        (0, vitest_1.expect)(result.isValid).toBe(true);
    });
    (0, vitest_1.it)('should return valid false when mmdc fails', async () => {
        const error = new Error('Command failed');
        error.stderr = 'Syntax Error';
        vitest_1.vi.mocked(child_process_1.execFile).mockImplementationOnce((cmd, args, cb) => cb(error, { stdout: '', stderr: 'Syntax Error' }));
        const validator = new validator_js_1.MermaidValidator();
        const result = await validator.validate('invalid syntax');
        (0, vitest_1.expect)(result.isValid).toBe(false);
        (0, vitest_1.expect)(result.error).toBe('Syntax Error');
    });
});
