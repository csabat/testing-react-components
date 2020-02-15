import { gql } from 'apollo-boost';

const GET_EXPENSE_ITEMS = gql`
  query getExpenseItems($type: String!) {
    getExpenseItems(type: $type) {
      type
      description
      type
      incoming
      outgoing
      balance
    }
  }
`

export default GET_EXPENSE_ITEMS;