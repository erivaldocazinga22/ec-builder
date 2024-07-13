```                                                      ,,    ,,         ,,                    
`7MM"""YMM    .g8"""bgd     `7MM"""Yp,               db  `7MM       `7MM                    
MM    `7  .dP'     `M       MM    Yb                     MM         MM                    
MM   d    dM'       `       MM    dP `7MM  `7MM  `7MM    MM    ,M""bMM   .gP"Ya  `7Mb,od8 
MMmmMM    MM                MM"""bg.   MM    MM    MM    MM  ,AP    MM  ,M'   Yb   MM' "' 
MM   Y  , MM.               MM    `Y   MM    MM    MM    MM  8MI    MM  8M""""""   MM     
MM     ,M `Mb.     ,'       MM    ,9   MM    MM    MM    MM  `Mb    MM  YM.    ,   MM     
.JMMmmmmMMM   `"bmmmd'      .JMMmmmd9    `Mbod"YML..JMML..JMML. `Wbmd"MML. `Mbmmd' .JMML. 
```

<div style="width: 100%; height: 300px; overflow: hidden; margin-bottom: 20px;">
  <img src="./src/core/assets/logo-ec-builder.jpeg" alt="EC Builder Logo" style="width: 100%; height: 100%; object-fit: cover;">
</div>



# Package EC-Builder 3.1.1

EC-Builder é uma ferramenta de linha de comando (CLI) para criar projetos padronizados de front-end para empresas, configurando ESLint, Prettier e a estrutura de pastas para projetos em React.js e Node.js. Esta ferramenta ajuda a garantir a consistência e qualidade dos projetos ao seguir padrões pré-definidos.

## Recursos

### Geral
- Criação de configuração padronizada de ESLint
- Opção de escolha do framework (React ou Node)
- Opção de escolha da linguagem base do projeto (JavaScript ou TypeScript)
- Configuração de rotas

### FrontEnd
- Criação de estrutura de pastas padronizada usando o padrão do Vite
- Opção de escolha da configuração de estilização (CSS, TailwindCSS ou Styled Components)
- Configuração de alias

### BackEnd
- Opção de escolha do gerenciador de rotas (Node, Express ou Fastify)
- Opção de escolha da ORM (Sem ORM, Prisma ou Sequelize)
- Opção de escolha do banco de dados (MySQL, SQLite)

## Pré-requisitos

- Node.js
- npm ou yarn

## Instalação

Para instalar a CLI globalmente, use o npm ou o yarn:

```bash
npm install -g ecbuilder
```

ou

```bash
yarn global add ecbuilder
```

## Uso

Para criar um novo projeto, use o comando `ecbuilder generate` e siga as instruções:

```bash
ecbuilder generate
```

Flags
- **--database** : Para definir qual banco de dados usar [para Node]
- **--styled** : Para definir qual framework de estilização usar [para React]
- **--server** : Para definir qual servidor usar(Express ou Fastify) [para Node]
- **--typeOrm** : Para definir qual ORM  usar(Prisma ou Sequelize) [para Node]

O comando iniciará um prompt interativo para coletar informações sobre o projeto que você deseja criar.

## Estrutura de Perguntas

A CLI fará as seguintes perguntas para configurar o seu projeto:

1. Qual é o nome do projeto?
2. O projeto é em React ou Node?
3. Qual é a linguagem base do projeto? (TypeScript ou JavaScript)

## Estrutura do Projeto

A estrutura do projeto será criada com base nas respostas fornecidas. Aqui está um exemplo da estrutura de pastas para um projeto React:

```
my-new-project
├── src
│   ├── app
│   │   ├── components
│   │   └── pages
│   │       ├── private
│   │       ├── PublicLayout.tsx
│   │       └── App.tsx
│   ├── core
│   │   ├── constants
│   │   ├── models
│   │   ├── hooks
│   │   ├── utils
│   │   └── lib
│   │       ├── utils.ts
│   │       ├── axios.ts
│   │       └── env.ts
│   ├── router.tsx
│   └── styles.css
├── .env.local
├── .eslintrc.json
└── .prettierrc
```

E um exemplo para um projeto Node.js:

```
my-new-project
├── src
│   ├── http
│   ├── ├── controllers
│   ├── ├── server.ts
│   │   └── utils
├── ├── core
│   ├── ├── models
│   ├── └── utils
│   └── routes
├── .eslintrc.json
└── .prettierrc
```

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório do projeto.


## Agradecimentos

Agradecemos a todos que contribuíram para este projeto. Sua ajuda é inestimável para garantir a qualidade e evolução contínua da ferramenta.

---

**Nota:** Este projeto ainda não trata da configuração do ESLint e muitas outras mencionadas. Qualquer contribuição para melhorar esta funcionalidade é bem-vinda!

## Licença

Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo LICENSE no repositório.

---

By [Erivaldo Malebo Caginga](https://github.com/erivaldocazinga22)