FROM node:18.17.1-alpine

WORKDIR /intentory-backend

COPY ./src .
COPY ./package.json .
COPY ./tsconfig.json .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]