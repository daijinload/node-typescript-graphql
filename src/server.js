"use strict";
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var schema = buildSchema(`
  type Query {
    hello: String
    hello2(name: String): String
  }
`);
var root = {
    hello: () => 'Hello world!',
    hello2: (hello) => {
        console.log(hello);
        return 'world name=' + hello.name;
    }
};
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
