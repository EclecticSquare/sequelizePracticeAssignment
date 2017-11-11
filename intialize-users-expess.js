const Sequelize = require('sequelize');
//THIS IS THE SHORTHAND WAY OF CONNECTING TO SEQUELIZE  postgres://<password>@localhost:5432/<database-to-connect-to>
sequelize = new Sequelize('postgres://tinabryson@localhost:5432/sequelize_db')


let express = require('express')
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser)



app.get('/users', (request, response) => {
  console.log('I am working')
  respond.send()
})
app.listen(3000, () => {
  console.log('You did it! I am running')
})
