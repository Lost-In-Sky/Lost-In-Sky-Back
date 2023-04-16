FROM node:18-alpine3.16

ENV NODE_PATH=./src

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm install -g sequelize-cli

EXPOSE 2000

RUN cd ./src && \
sequelize db:create && \
sequelize db:migrate && \
sequelize db:seed:all

CMD ["npm", "run", "dev"]