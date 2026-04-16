# Tech Stack

## Core Language & Environment
- **Language:** TypeScript (Strict Mode) - Garante segurança de tipos, aderência ao ecossistema do Gemini CLI e manutenibilidade.
- **Runtime:** Node.js (compatível com as versões suportadas pelo Gemini CLI).

## Libraries & Dependencies
- **CLI Extension Framework:** APIs nativas do Gemini CLI para desenvolvimento de extensões (conforme documentação em https://geminicli.com/docs/extensions/writing-extensions/).
- **Renderização Mermaid:** `@mermaid-js/mermaid-cli` (mmdc) ou um serviço de API externo (como Kroki.io) para converter o texto gerado via LLM em arquivo PNG.
- **Manipulação de Arquivos:** Módulo nativo `fs/promises` do Node.js para salvar os diagramas localmente.

## Tooling & Quality
- **Linter & Formatter:** ESLint e Prettier, garantindo formatação padrão e detecção de code smells.
- **Test Framework:** Vitest ou Jest para testes unitários focados na validação dos geradores de diagramas e parsing.