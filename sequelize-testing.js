 const Sequelize = require('sequelize');

//  BELOW IS THE VERBOSE WAY TO CONNECT TO SEQUELIZE
// const sequelize = new Sequelize('sequelize', 'tinabryson', 'lupe1958', {
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
sequelize = new Sequelize('postgres://lupe1958@localhost:5432/sequelize')

//check database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
