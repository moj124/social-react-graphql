
const { ApolloServer} = require('apollo-server');
const { PubSub } = require('graphql-subscriptions');

const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req, pubsub }),
});

mongoose.set('strictQuery', false);
console.log(MONGODB);
mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen( { port: 3000 });
    })
    .then( (res) => {
    console.log(`Server running at ${res.url}`);
});