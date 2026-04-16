import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { PngExporter } from './exporter.js';
import { MermaidValidator } from './validator.js';

export * from './exporter.js';
export * from './validator.js';

export const server = new Server(
  {
    name: 'mermaid-extension',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

const validator = new MermaidValidator();
const exporter = new PngExporter();

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'validate_mermaid_syntax',
        description: 'Validates Mermaid diagram syntax.',
        inputSchema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: 'The Mermaid code to validate.',
            },
          },
          required: ['code'],
        },
      },
      {
        name: 'export_mermaid_to_png',
        description: 'Renders Mermaid code and saves it as a PNG file.',
        inputSchema: {
          type: 'object',
          properties: {
            code: {
              type: 'string',
              description: 'The Mermaid code to render.',
            },
            outputPath: {
              type: 'string',
              description: 'The local file path to save the PNG.',
            },
          },
          required: ['code', 'outputPath'],
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === 'validate_mermaid_syntax') {
      const { code } = args as { code: string };
      const result = await validator.validate(code);
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    }

    if (name === 'export_mermaid_to_png') {
      const { code, outputPath } = args as { code: string; outputPath: string };
      await exporter.export(code, outputPath);
      return {
        content: [
          {
            type: 'text',
            text: `Successfully exported diagram to ${outputPath}`,
          },
        ],
      };
    }

    throw new Error(`Tool not found: ${name}`);
  } catch (error: any) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Mermaid MCP server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error in main():', error);
  process.exit(1);
});
