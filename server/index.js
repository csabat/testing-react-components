const { GraphQLServer } = require('graphql-yoga')

let expenseItems = [];

const typeDefs = `
  type Query {
    hello(name: String): String!
    getExpenseItems: [ExpenseItem]
  }
  type ExpenseItem {
    date: String
    description: String
    type: String
    incoming: Float
    outgoing: Float
    balance: Float
  }
  input ExpenseItemInput {
    date: String
    description: String
    type: String
    incoming: Float
    outgoing: Float
    balance: Float
  }
  type Mutation {
    makePayment(values: ExpenseItemInput): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    getExpenseItems: (_) => expenseItems,

  },

  Mutation: {
    makePayment: (_, { values }) => {
      expenseItems = [...expenseItems, values];
      return true
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))