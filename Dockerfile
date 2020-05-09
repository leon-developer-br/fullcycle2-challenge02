FROM node:13.14.0

WORKDIR /app

COPY .env .

COPY package*.json ./

COPY database.sqlite ./

COPY dist ./dist

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:prod"]