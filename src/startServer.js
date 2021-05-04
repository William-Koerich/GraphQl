import { ApolloServer } from 'apollo-server'

function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({ typeDefs, resolvers })

  server.listen(7777).then(({ url }) => console.log(`🔥Server started ar ${url}`))
}

export default startServer;