# Initial Concept

Uma extensão do Gemini CLI especialista em fazer diagramas e arquiteturas usando Mermaid (https://mermaid.ai/open-source/intro/getting-started.html).
A extensão deve ser capaz de exportar os diagramas em formato PNG.

## Core Problem
Desenvolvedores e arquitetos frequentemente precisam documentar sistemas e fluxos de trabalho usando diagramas. Fazer isso de forma manual pode ser demorado e exigir o uso de ferramentas externas fora do fluxo de trabalho do terminal.

## Target Audience
- Engenheiros de software
- Arquitetos de soluções
- Desenvolvedores que utilizam o Gemini CLI e desejam documentar arquiteturas como código (diagramas como texto via Mermaid).

## Key Features
- **Geração Automática de Mermaid:** A extensão irá interpretar os requisitos do usuário e gerar código Mermaid válido.
- **Exportação para PNG:** Capacidade de renderizar e exportar o diagrama final para formato PNG, salvando no disco local.
- **Integração Fluida:** Funcionar como um agente (skill ou extension) nativo do Gemini CLI, facilitando seu uso no terminal.
- **Suporte a Múltiplos Tipos de Diagramas:** Fluxogramas, diagramas de classe, sequência, entre outros suportados pelo Mermaid.

## Expected Outcomes
- Redução no tempo de documentação de projetos e arquiteturas.
- Aumento na qualidade e padronização das representações visuais.
- Uma experiência "Vibe Coding" que permite gerar documentação interativa diretamente do terminal.