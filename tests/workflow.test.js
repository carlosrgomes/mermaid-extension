"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(0, vitest_1.describe)('GitHub Actions Workflow', () => {
    (0, vitest_1.it)('should have a release.yml workflow file', () => {
        const workflowPath = path_1.default.resolve(__dirname, '../.github/workflows/release.yml');
        (0, vitest_1.expect)(fs_1.default.existsSync(workflowPath)).toBe(true);
    });
    (0, vitest_1.it)('should trigger on tags starting with v', () => {
        const workflowPath = path_1.default.resolve(__dirname, '../.github/workflows/release.yml');
        if (!fs_1.default.existsSync(workflowPath))
            return; // Skip if file doesn't exist yet (Red phase)
        const content = fs_1.default.readFileSync(workflowPath, 'utf-8');
        (0, vitest_1.expect)(content).toContain('tags:');
        (0, vitest_1.expect)(content).toContain("'v*'");
    });
});
