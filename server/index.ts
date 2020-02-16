import { GraphQLServer } from 'graphql-yoga';
const moment = require('moment');

interface ExpenseListItem {
  date: string;
  description: string;
  type: string;
  incoming: number;
  outgoing: number;
  balance: number;
  details: Payment;
}

interface Payment {
  payeeName: string;
  accountNumber: string;
  sortCode: string;
  reference: string;
  amount: number;
  transactionType: TransactionType;
}

enum CardType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

enum TransactionType {
  ONLINE = "ONLINE TRANSACTION"
}

class Card {
  type: CardType;
  name: string;
  sortCode: string;
  accountNumber: string;
  expenseList: ExpenseListItem[];
  available: number;
  spent: number;
  balance: number;

  constructor(type, name, sortCode = null, accountNumber) {
    this.type = type;
    this.name = name;
    this.sortCode = sortCode;
    this.accountNumber = accountNumber;
    this.expenseList = [];
    this.available = 1000;
    this.spent = 0;
    this.balance = 1500;
  }

  private calculateTotals(amount: number) {
    if (this.type === CardType.CREDIT) {
      this.available = this.available - amount;
      this.balance = this.balance + amount;
    }

    if(this.type === CardType.DEBIT) {
      this.spent = this.spent + amount;
      this.balance = this.balance - amount;
    }
  };

  private createExpenseItem(values: Payment): ExpenseListItem {
    return {
      date: moment().format('YYYY-MM-DD'),
      description: values.reference,
      type: this.type,
      incoming: 0,
      outgoing: values.amount,
      balance: this.balance,
      details: values,
    }
  }

  public makePayment(values: Payment) {
    this.calculateTotals(values.amount);
    this.expenseList = [...this.expenseList, this.createExpenseItem(values)];
  }
} 

let debitCard = new Card(CardType.DEBIT, "CLASSIC", "54-32-12", "877282761");
let creditCard = new Card(CardType.CREDIT, "NEVERENDING MASTERCARD", "", "5124 6253 5341 5374");

const getAccount = (type: CardType): Card => type === "DEBIT" ? debitCard : creditCard;

const typeDefs = `
  type Query {
    hello(name: String): String!
    getExpenseItems(type: String!): [ExpenseItem]
    getCardDetails(type: String!): CardDetails
  }
  type CardDetails {
    name: String
    available: Float
    spent: Float
    sortCode: String
    accountNumber: String
    balance: Float
  }
  type ExpenseItem {
    date: String
    description: String
    type: String
    incoming: Float
    outgoing: Float
    balance: Float
    details: Payment
  }
  type Payment {
    payeeName: String
    accountNumber: String
    sortCode: String
    reference: String
    amount: Float
    transactionType: String
  }
  input PaymentInput {
    payeeName: String
    accountNumber: String
    sortCode: String
    reference: String
    amount: Float
    transactionType: String
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
    makePayment(values: PaymentInput!, type: String): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    getExpenseItems: (_, { type }) => {
      return getAccount(type).expenseList;
    },
    getCardDetails: (_, { type }) => {
      const { name, available, spent, sortCode, accountNumber, balance } = getAccount(type);
      return {
        name,
        available,
        spent,
        sortCode,
        accountNumber,
        balance,
      }
    }
  },

  Mutation: {
    makePayment: (_, { values, type }) => {
      getAccount(type).makePayment(values)
      return true
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))