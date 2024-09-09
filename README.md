# uSavings Challenges 

Desafios para candidatos(as) para vagas do time uSavings (Ustore/Claro Brasil)

## 📝 Contexto Persolalizado

Lucas, um jovem empreendedor, decidiu abrir sua própria empresa chamada Vitalatte, focada na produção de produtos derivados de leite. Ele observou que o processo de gerenciamento de inventário de sua empresa, especialmente no que diz respeito ao monitoramento das datas de validade dos produtos, é frequentemente manual e suscetível a erros. Ele decidiu que seria benéfico desenvolver uma aplicação web que simplificasse essa tarefa, permitindo-o controlar seus produtos de forma mais eficiente e evitar prejuízos decorrentes de produtos vencidos.

## 📌 Solução Proposta

Para resolver o problema de Lucas, eu desenvolvi uma aplicação web full stack com as seguintes funcionalidades:

1. Tela para catalogar os produtos
  - Catalogar todos os produtos da empresa;
  - As informações do produto podem ser editadas;
  - Os produtos podem ser excluidos do catálogo;
  - Um produto só pode ser cadastrado uma vez no catálogo.

2. Tela para gerenciar o estoque
  - Registrar produtos no estoque;
  - As informações do registro podem ser editadas;
  - Os registros podem ser excluidos do estoque;
  - Um produto não pode ser registrado se não estiver no catálogo;
  - A data de fabricação do produto pode ser informada ou preenchida automaticamente com a data do dia do registro;
  - A data de vencimento é calculada a partir da data de fabricação e do tempo de vida útil do produto, simplificando e diminuindo a possibilidade de erros; 
  - Um produto não pode ser registrado se já estive vencido.

3. Tela para visão geral do estoque e facilitar o acompanhamento do prazo de validade dos produtos
  - Visualizar todos os produtos listados no estoque;
  - Destaque visual em vermelho para produtos com prazo de validade expirado;
  - Destaque visual em amarelo para produtos com prazo de validade de até 3 dias para a expiração.


## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão recomendada: LTS)
- [npm](https://www.npmjs.com/) (incluído com Node.js) 
- [Docker](https://www.docker.com/) (opcional, para uso com containers)

## 🔧 Instalação

### Configuração do Backend

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
DB_PASSWORD=yourpassword
DB_DATABASE=yourdbname
````

5. Inicie o servidor backend:

```
npm run start:dev
```

### Configuração do Frontend

1. Navegue até o diretório frontend:

```
cd inventory-frontend
```

2. Instale as dependências:

```
npm install
```

3. Inicie o servidor de desenvolvimento do Angular:

```
ng serve
```

## Docker
Tanto o inventory-backend quando o inventory-frontend possuem Dockerfiles que descrevem a imagem do container e podem ser executadas individualmente.

Para subir o servidor do backend, basta ir para o diretório `inventory-backend` e executar o comando:
- `docker build -t inventory-backend:latest && docker run -p 3000:3000 --env-file ./.env inventory-backend:latest`
Lembre de ter o arquivo `.env` na pasta `inventory-backend`.

Para subir o servidor do frontend, basta ir para o diretório `inventory-frontend` e executar o comando:
- `docker build -t inventory-frontend:latest && docker run -p 4200:4200 inventory-frontend:latest`.

Por fim, a forma mais simples e rápida de rodar ambas as aplicações é usando o docker-compose.
Para isso, vá para a raiz do repositório, crie um arquivo `.env` similar ao que está em `inventory-backend`, com exceção da variável `DB_HOST` que deve ter valor `host.docker.internal`. Após ter feito isso, execute o comando `docker-compose up`. Pronto! Agora ambas as aplicações estão sendo executadas.

## 🗂️ Documentanção

[REST API: Inventory Management](https://documenter.getpostman.com/view/24460805/2sAXjRXA7g) 


## 🛠️ Construído com

### Frontend

* [Angular](https://v17.angular.io/docs) 
* [Typescript](https://www.typescriptlang.org/docs/)
* [CSS](https://devdocs.io/css/)

### Backend

* [NestJS](https://docs.nestjs.com/) 
* [Typescript](https://www.typescriptlang.org/docs/)
* [MySQL](https://dev.mysql.com/doc/)
* [TypeORM](https://typeorm.io/)
* [Docker](https://docs.docker.com/)

## ✒️ Autora

Laís Rodrigues Macedo <br>
📧 laisrodriguesmacedo@gmail.com <br>
WhatsApp: (+49) 174 7781517
