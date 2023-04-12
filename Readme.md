<h1>Please follow the instructions</h1>
1. At the start run ```bash npm i``` <br>
2. In order to run the project make sure you have the .env file with its contents (contact the devs) <br>
3. After adding the .env file go to src folder and run the following commands in the order <br>
    3.1 ```bash sequelize db:create``` <br>
    3.2 ```bash sequelize db:migrate``` <br>
    3.3 ```bash sequelize db:seed:all``` <br>
4. Then go to the root folder and run ```bash npm start``` for running the project on port 2000 (you can change this in settings) <br>
5. Running ```bash npm run dev``` will result in running the project in nodemon
