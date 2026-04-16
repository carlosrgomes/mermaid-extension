"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, vitest_1.describe)('Release Package', () => {
    (0, vitest_1.it)('should have the expected distribution files after build', () => {
        // This test assumes 'npm run build' and 'npm run package' have been run or will be run.
        // In a real TDD cycle, this would fail if the files don't exist.
        const distDir = path_1.default.resolve(__dirname, '../dist');
        const bundlePath = path_1.default.join(distDir, 'index.js');
        const manifestPath = path_1.default.join(distDir, 'gemini-extension.json');
        const geminiMdPath = path_1.default.join(distDir, 'GEMINI.md');
        (0, vitest_1.expect)(fs_1.default.existsSync(distDir)).toBe(true);
        (0, vitest_1.expect)(fs_1.default.existsSync(bundlePath)).toBe(true);
        (0, vitest_1.expect)(fs_1.default.existsSync(manifestPath)).toBe(true);
        (0, vitest_1.expect)(fs_1.default.existsSync(geminiMdPath)).toBe(true);
    });
});
