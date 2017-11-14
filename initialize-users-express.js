
const Sequelize = require('sequelize');
//THIS IS THE SHORTHAND WAY OF CONNECTING TO SEQUELIZE  postgres://<password>@localhost:5432/<database-to-connect-to>
sequelize = new Sequelize('postgres://tinabryson@localhost:5432/sequelize_db')


let express = require('express')
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())

const User = sequelize.define ('user', {
 firstName: {
   type: Sequelize.STRING
 },
 lastName: {
     type: Sequelize.STRING
 }
});

app.get('/users', (request, response) => {
  User.findAll().then(users => {
    response.send(users)
  })
})


app.post('/users/create', (request, response) => {
  console.log(request)
    //creating a new user
    let newUser = request.body
    User.create(
      newUser
    ).then((results) =>{
      response.json(results)
    });
  });


app.put('users/:id', (request, response) => {
  User.update(request.body, () =>
    {
      where: { id: request.params.id } 
  }) .then(() => {
    User.findAll().then((user) => {
      response.send(user)
    });
  });
});




app.listen(3000, () => {
  console.log('You did it! I am running')
})
