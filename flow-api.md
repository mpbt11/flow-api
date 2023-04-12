# flow-api

A "flow-api" é uma API para gerenciar o fluxo de caixa, permitindo o cadastro, alteração e listagem do fluxo de caixa, bem como o cadastro de categorias, como por exemplo, pagamento de aluguel. Utiliza testes e realiza uploads de arquivos na AWS, com o banco de dados configurado na nuvem da AWS. Além disso, também são realizados testes de carga e estresse utilizando o K6.
(Este projeto é voltado apenas para fins de testes, não sendo destinado para uso em produção).

## Funcionalidades

- Cadastro de transações de fluxo de caixa
- Atualização de transações de fluxo de caixa
- Listagem de transações de fluxo de caixa
- Cadastro de categorias
- Upload de arquivos para a AWS

## Tecnologias Utilizadas

- Node.js
- Express.js
- AWS SDK
- Multer
- PostgreSQL (pg)
- Mocha (para testes unitários)
- K6 (para testes de carga e estresse)
- Babel (para transpilação)
- Nodemon (para desenvolvimento)

## Requisitos

- Node.js (v14 ou superior)
- npm ou yarn (gerenciadores de pacotes)
- Conta na AWS com configurações de acesso para upload de arquivos

## Instalação

1. Clone o repositório para sua máquina local.
2. Execute `<npm install>` ou `<yarn install>` para instalar as dependências do projeto.
3. Configure as variáveis de ambiente, incluindo as credenciais da AWS, em um arquivo `.env` na raiz do projeto (você pode usar o arquivo `.env.example` como referência).
4. Execute `<npm run start>` ou `<yarn start>` para iniciar o servidor local.

### Testes

Para executar os testes, você pode utilizar os seguintes comandos:
- Carga/estresse: k6 run nomearquivo.js
- Unitários: npm test


