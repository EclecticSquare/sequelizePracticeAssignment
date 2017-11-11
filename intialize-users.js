const Sequelize = require('sequelize');

const express = require('express');
let app = express();
let bodyParser = require('bodyParser');
app.use(bodyParser.json());


//  BELOW IS THE VERBOSE WAY TO CONNECT TO SEQUELIZE
// const sequelize = new Sequelize('sequelize', 'tinabryson', 'tinabryson', {
//   host:'localhost',
//   dialect: 'postgres',
//
//   pool: {
//     max: 5, //maximum number of OPEN connections allowed
//     min: 0, //minimum number of OPEN connections allowed
//     acquire: 30000,
//     idle: 10000
//   },
// });

//THIS IS THE SHORTHAND WAY OF CONNECTING TO SEQUELIZE  postgres://<password>@localhost:5432/<database-to-connect-to>
sequelize = new Sequelize('postgres://tinabryson@localhost:5432/sequelize_db')

//check database connection
sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });


const User = sequelize.define ('user', {
 firstName: {
   type: Sequelize.STRING
 },
 lastName: {
     type: Sequelize.STRING
 }
});

User.sync().then(() => {
  //table is created here
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

User.sync().then(() => {
  //table is created here
  return User.create({
    firstName: 'Ahmed',
    lastName: 'Adoodie'
  });
});

User.sync().then(() => {
  //table is created here
  return User.create({
    firstName: 'Maya',
    lastName: 'Butreeks'
  });
});

User.sync().then(() => {
  //table is created here
  return User.create({
    firstName: 'Al',
    lastName: 'Bino'
  });
});

User.sync().then(() => {
  //table is created here
  return User.create({
    firstName: 'Brock',
    lastName: 'Lee'
  });
});
