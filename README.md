# uSavings Challenges 

Desafios para candidatos(as) para vagas do time uSavings (Ustore/Claro Brasil)

## 📝 Contexto Personalizado

Lucas é um jovem empreendedor e decidiu abrir sua própria empresa, a Vitalatte, com foco na produção de produtos derivados do leite. Ele observou que o processo de gerenciamento de inventário de sua empresa, especialmente no que diz respeito ao monitoramento das datas de validade dos produtos, é frequentemente manual e suscetível a erros. Ele decidiu que seria benéfico desenvolver uma aplicação web que simplificasse essa tarefa, permitindo-o controlar seus produtos de forma mais eficiente e evitar prejuízos decorrentes de produtos vencidos.

## 📌 Solução Proposta

Criei uma aplicação web full stack para atender às necessidades de Lucas, com foco no gerenciamento eficiente de produtos e estoque. As principais funcionalidades incluem:

1. Catalogação de Produtos:

- Cadastro único de produtos no catálogo;
- Edição e exclusão de informações dos produtos;
- Garantia de que um produto não pode ser cadastrado mais de uma vez.

2. Gerenciamento de Estoque:

- Registro de entradas de produtos no estoque;
- Controle de edição e exclusão dos registros;
- Restrições que impedem o registro de produtos não catalogados ou vencidos;
- Preenchimento automático da data de fabricação (data atual) e cálculo da data de vencimento com base no tempo de vida útil do produto. A data de fabricação também pode ser preenchida manualmente.

3. Monitoramento de Prazo de Validade:

- Visualização completa do estoque, com alertas visuais:
  - Produtos vencidos destacados em vermelho;
  - Produtos próximos ao vencimento (até 3 dias) destacados em amarelo.



## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) 
- [Docker](https://www.docker.com/) (opcional, para uso com containers)

## 🧩 Backend

#### DEPLOY
 
[Web Service](https://render.com/)

#### CONSTRUÍDO COM

- [NestJS](https://docs.nestjs.com/) 
- [Typescript](https://www.typescriptlang.org/docs/)
- [MySQL](https://dev.mysql.com/doc/)
- [TypeORM](https://typeorm.io/)
- [Render](https://render.com/) 
- [Aiven](https://aiven.io/)

#### CONFIGURAÇÕES

1. Navegue até o diretório backend:

```
cd inventory-backend
````

2. Instale as dependências:

```
npm install
````

3. Crie um arquivo .env na raiz do diretório backend com as seguintes variáveis (ajuste conforme necessário):

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=senha
DB_DATABASE=nome-do-db
````

5. Em desenvolvimento, inicie o servidor backend com:

```
npm run start:dev
```


#### DOCUMENTAÇÃO

[REST API: Inventory Management](https://documenter.getpostman.com/view/24460805/2sAXjRXA7g) 

## 🖼️ Frontend

#### DEPLOY
 
[Live Full Stack App](https://vitalatte.onrender.com/)

#### CONSTRUÍDO COM

- [Angular](https://v17.angular.io/docs) 
- [Typescript](https://www.typescriptlang.org/docs/)
- [CSS](https://devdocs.io/css/)
- [Render](https://render.com/)

#### INSTALAÇÃ0

1. Navegue até o diretório frontend:

```
cd inventory-frontend
```

2. Instale as dependências:

```
npm install
```

3. Inicie o servidor frontend:

- Em desenvolvimento:

```
npm run start
```
- Em produção:

```
npm run build:prd
npm run serve:ssr:inventory-frontend
```

## 🐳 DOCKER

Tanto o inventory-backend quando o inventory-frontend possuem Dockerfiles que descrevem a imagem do container e podem ser executadas individualmente.

#### CONFIGURAÇÕES DO BACKEND

1. Navegue até o diretório:

```
cd inventory-backend
````

2. Execulte os comandos:

```
docker build -t inventory-backend:latest .
docker run -p 3000:3000 --env-file ./.env inventory-backend:latest
```
Lembre de ter o arquivo `.env` na pasta `inventory-backend`.

#### CONFIGURAÇÕES DO FRONTEND

1. Navegue até o diretório:

```
cd inventory-frontend
````

2. Execulte os comandos:

```
docker build -t inventory-frontend:latest .
docker run -p 4200:4200 inventory-frontend:latest
```

#### CONFIGURAÇÕES DO DOCKER-COMPOSE

1. Navegue até a raiz do repositório e crie um arquivo `.env`:

```
DB_HOST=host.docker.internal
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=senha
DB_DATABASE=nome-do-db
````

2. Execulte o comando:

```
docker-compose up
```
Pronto! Agora ambas as aplicações estão sendo executadas.

## ✒️ Autora

Laís Rodrigues Macedo <br>
📧 laisrodriguesmacedo@gmail.com <br>
WhatsApp: (+49) 174 7781517
