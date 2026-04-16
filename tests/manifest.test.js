"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, vitest_1.describe)('Manifest', () => {
    (0, vitest_1.it)('should have a valid gemini-extension.json', () => {
        const manifestPath = path_1.default.resolve(__dirname, '../gemini-extension.json');
        (0, vitest_1.expect)(fs_1.default.existsSync(manifestPath)).toBe(true);
        const manifest = JSON.parse(fs_1.default.readFileSync(manifestPath, 'utf-8'));
        (0, vitest_1.expect)(manifest.name).toBe('mermaid-extension');
        (0, vitest_1.expect)(manifest.version).toBeDefined();
    });
});
