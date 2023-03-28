FROM node:18-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm install -g sequelize-cli

EXPOSE 2000

RUN cd ./src && \
sequelize db:create && \
sequelize db:migrate

CMD ["npm", "run", "dev"]