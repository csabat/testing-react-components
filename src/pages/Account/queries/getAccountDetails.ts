import { gql } from 'apollo-boost';

const GET_ACCOUNT_DETAILS = gql`
  query getCardDetails($type: String!) {
    getCardDetails(type: $type) {
      name,
      available,
      spent,
      sortCode,
      accountNumber,
      balance
    }
  }
`

export default GET_ACCOUNT_DETAILS;