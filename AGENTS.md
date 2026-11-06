# Orientações para agentes

## Escopo e contexto

Este arquivo orienta alterações em todo o repositório `clone-tabnews-ia`.
O projeto acompanha o curso.dev e está em estágio inicial: há apenas uma página
inicial e o layout raiz. Não presuma que funcionalidades do TabNews, APIs,
autenticação ou banco de dados já estejam implementados.

## Stack e estrutura

- Node.js 20.9 ou superior, conforme o README.
- npm como gerenciador de pacotes; preserve o `package-lock.json` (versão 3).
- Next.js `16.2.12`, React e React DOM `^19.2.0`.
- JavaScript com JSX e módulos ES; o projeto não usa TypeScript atualmente.
- `app/page.js`: página inicial, rota `/`.
- `app/layout.js`: layout raiz, metadados e documento HTML com `lang="pt-BR"`.
- `README.md`: requisitos e instruções de execução.
- `.gitignore`: ignora `node_modules/` e `.next/`.

## Preparação e comandos

Execute os comandos na raiz do repositório:

| Comando | Finalidade |
| --- | --- |
| `npm ci` | Instalar as dependências a partir do lockfile existente. |
| `npm run dev` | Iniciar o servidor de desenvolvimento em http://localhost:3000. |
| `npm run build` | Gerar e verificar o build de produção. |
| `npm start` | Servir o build de produção; execute o build antes. |

O README também documenta `npm install`. Use esse comando quando precisar
adicionar ou atualizar dependências e mantenha `package.json` e
`package-lock.json` sincronizados. Não edite o lockfile manualmente.

## Convenções de implementação

- Siga o App Router e a estrutura `app/` existente ao adicionar rotas e layouts.
- Mantenha componentes de servidor por padrão. Adicione `"use client"` apenas
  aos componentes que exigem estado, eventos ou APIs do navegador.
- Preserve `<html lang="pt-BR">`, `<body>` e a renderização de `children`
  no layout raiz. Mantenha metadados na API de metadata do Next.js.
- Siga o estilo atual: dois espaços, aspas duplas, ponto e vírgula e
  componentes de função com exportação padrão para páginas e layouts.
- Use português brasileiro na documentação e nos textos da interface,
  salvo requisito explícito em contrário.
- Faça alterações proporcionais à tarefa. Introduza bibliotecas, abstrações
  e ferramentas apenas quando houver necessidade concreta.
- Atualize o README quando mudar os requisitos ou o modo de executar o projeto.
- Não versione dependências instaladas, artefatos de build ou credenciais.
  Se introduzir variáveis de ambiente, documente os nomes e garanta que
  arquivos com valores secretos sejam ignorados pelo Git; a configuração
  atual de `.gitignore` ainda não cobre arquivos `.env`.

## Validação e entrega

- Atualmente não há suíte de testes, configuração de lint, scripts `test`
  ou `lint`, nem workflows de CI no repositório. Não alegue que essas
  verificações passaram e não presuma comandos inexistentes.
- Para alterações de código ou dependências, execute `npm run build`.
- Para mudanças de interface ou rotas, confira também as páginas afetadas
  no servidor local, observando renderização, navegação e erros.
- Para alterações apenas de documentação, confira os caminhos, comandos
  e afirmações contra os arquivos atuais; não é necessário gerar um build.
- Quando uma funcionalidade exigir testes automatizados, escolha verificações
  que cubram seu comportamento e documente qualquer ferramenta adicionada.
- Antes de concluir, revise o diff para evitar alterações alheias à tarefa.
  Informe o que mudou, quais verificações foram executadas e eventuais
  limitações. Se não puder executar uma verificação, diga isso explicitamente.

Mantenha estas orientações alinhadas à evolução real do repositório.
