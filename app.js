const connectDB = require('./db/db')
const typeDefs = require('./gql/types');
const resolvers = require('./gql/resolvers');
const context = require('./gql/context')

const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen().then(({ url }) => {
  const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      console.log('connected db')
    } catch (error) {
      console.log(error);
    }
  };
  start();
  console.log(`🚀 Server ready at ${url}`);
});