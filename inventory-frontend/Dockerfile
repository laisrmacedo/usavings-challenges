FROM node:18.17.1-alpine

WORKDIR /intenvory-frontend

COPY ./src ./src/
COPY ./server.ts .
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./tsconfig.spec.json .
COPY ./tsconfig.app.json .
COPY ./angular.json .

RUN npm install
RUN npm run build:prd

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:inventory-frontend"]