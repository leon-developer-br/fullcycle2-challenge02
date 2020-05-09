FROM node:14.1-alpine

WORKDIR /app

COPY .env .

COPY package*.json .

COPY database.sqlite .

COPY dist ./dist

RUN npm install

EXPOSE 3000

CMD ["node", "start:prod"]