// import {GraphQLServer} from 'graphql-yoga';
// import path from 'path'
const {GraphQLServer} = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useFindAndModify: false
});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

server.start()