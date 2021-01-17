
# create a package.json with all features
$ npm init -y

# nodejs - dependencies
$ npm init -y (crea un package.json)
$ npm i express (se crea node_modules)
$ npm i nodemon
$ npx eslint --init
$ npm i mongoose
$ npm install body-parser
$ npm install jsonwebtoken
$ npm install bcryptjs --save

create an account in cloud mongoDB - cloud => https://cloud.mongodb.com
connect to the app =>
connect from mongodb compass to cloud => mongodb+srv://javier:1234q@cluster0.v5jak.mongodb.net/test

connect to mongodb compass is possible
# mongodb-compass
1. run mongo-compass
$ sudo service mongod start
$ mongodb-compass


# api url - create new user
body/raw
JSON
POST
http://localhost:8080/api/newuser
{
    "user": "javier2",
    "password": "223827uyewu"            
}

# api url - sign in user
body/raw
JSON
POST
http://localhost:8080/api/newuser
{
    "user": "javier2",
    "password": "223827uyewu"            
}
