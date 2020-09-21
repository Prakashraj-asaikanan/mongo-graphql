const express = require('express');
const bodyParser = require('body-parser');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const buildSchema = require('./schema.js');
const resolver = require('./resolver.js');
const app = express();

app.use(bodyParser.json());


const server = new ApolloServer({
  typeDefs : buildSchema.UserRoles,
  resolvers : resolver.UserRoles
})

app.get('/api', (req, res) => res.send('Hello World!'))

server.applyMiddleware({ app });

mongoose.connect("mongodb+srv://graphql:graphql123@cluster0.n8q1o.mongodb.net/modeljira?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true, useFindAndModify: false 
})
    .then(res => {
        console.log('connected successfully');
        app.listen(5000);
    }).catch(err => {
        console.log(err, 'Error in Connection');
    });