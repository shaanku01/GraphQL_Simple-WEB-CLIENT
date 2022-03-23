const {ApolloServer } = require('apollo-server');




const typeDefs = require('./schema.js');

const resolvers = require("./resolvers.js")


const server = new ApolloServer({typeDefs,resolvers});

server.listen({port:9432}).then((serverInfo)=>{console.log(`Server srarted at url ${serverInfo.url}`)});
