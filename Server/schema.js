const {ApolloServer , gql} = require('apollo-server');

module.exports = gql`
    type Query{
        greeting: String
    }

`;

