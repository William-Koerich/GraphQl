const { ApolloServer } = require('apollo-server')

/**
 * Banco de dados fictício.
 */
const DB = {
  employees: [
    { id: 1, name: 'Jackson' },
    { id: 2, name: 'Marcel' },
    { id: 3, name: 'Roberto' },
    { id: 4, name: 'Pablo' },
    { id: 5, name: 'William' },
    { id: 6, name: 'Anderson' },
    { id: 7, name: 'Mateus' },
    { id: 8, name: 'Amilton' }
  ]
}

/**
 * Definições da API.
 */
const typeDefs = `
  type Query {
    healthCheck: Boolean!

    employees: [employees]!
  }

  type employees {
    id: ID!
    name: String!
  }
`

/**
 * Resolução das definições.
 */
const resolvers = {
  Query: {
    healthCheck: () => true,
    employees: () => DB.employees,
  }
}

/**
 * Instância do servidor.
 */
const server = new ApolloServer({ typeDefs, resolvers })

/**
 * Subir o servidor.
 */
server.listen(7777).then(({ url }) => console.log(url))