# Desafio Técnico - Desenvolvedor Front-End Junior

Este projeto foi desenvolvido como parte do desafio técnico para a posição de Desenvolvedor Front-end Júnior na AutoForce. O objetivo é criar uma aplicação React que exiba informações detalhadas sobre um veículo e dados institucionais, utilizando uma Fake API para fornecimento dos dados.

## URL de Produção

A aplicação está disponível em produção através da seguinte URL:

**https://desafio-autoforce-react.vercel.app**

## Páginas da Aplicação

- **Home ("/"):** Página inicial que exibe informações detalhadas sobre o veículo e a empresa.
- **Leads ("/leads"):** Página que mostra todos os contatos captados pela aplicação.

## Decisões Técnicas

Durante o desenvolvimento deste projeto, algumas decisões técnicas foram tomadas para garantir a qualidade, a performance e a escalabilidade da aplicação.

- **Acessibilidade e Performance:** O projeto segue boas práticas de acessibilidade, como navegação por teclado e uso de **ARIA**. Além disso, foi otimizado para tempos de carregamento rápidos.
- **Carregamento de Dados:** Utilizei **react-query** para fazer requisições à Fake API e gerenciar o estado assíncrono de maneira eficiente. Para melhorar a experiência do usuário durante o carregamento dos dados, implementei **react-loading-skeleton** para exibir skeletons enquanto as informações são carregadas, proporcionando uma experiência visual mais fluida.
- **Formulário:** Para gerenciamento de dados de formulários, optei por usar **react-hook-form** para a gestão eficiente de formulários, **zod** para validação dos dados e **@react-input/mask** para criar inputs com máscaras, garantindo uma melhor experiência ao usuário ao preencher os formulários.
- **Qualidade de Código e Fluxo de Trabalho:** Para garantir a qualidade do código e a consistência no estilo, o projeto usa **eslint** e **prettier**. O fluxo de trabalho de commits é gerenciado com **commitizen** e **husky**, seguindo o padrão convencional de commits e garantindo uma abordagem automatizada. Isso facilita a geração de changelogs e mantém a consistência e organização do código durante o desenvolvimento.

## Stack Utilizada

**Front-End:** @headlessui/react, @react-input/mask, @tanstack/react-query, autoprefixer, clsx, less, react, react-dom, react-hook-form, react-loading-skeleton, react-router

**Qualidade de Código:** commitizen, cz-conventional-changelog, eslint, husky, lint-staged, prettier, typescript

## Documentação da API

#### Retorna dados da empresa

```http
GET https://my-json-server.typicode.com/EduNunesGithub/Desafio-Tecnico---Desenvolvedor-Front-End-Junior/company
```

#### Retorna dados do veículo

```http
GET https://my-json-server.typicode.com/EduNunesGithub/Desafio-Tecnico---Desenvolvedor-Front-End-Junior/vehicle
```

## Rodando localmente

Clone o projeto

```bash
https://github.com/EduNunesGithub/Desafio-Tecnico---Desenvolvedor-Front-End-Junior.git
```

Instale as dependências

```bash
npm install
```

Inicie o servidor

```bash
npm run dev
```
