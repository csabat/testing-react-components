import { gql } from "apollo-boost";

const MAKE_PAYMENT = gql`
  mutation makePayment($values: PaymentInput!, $type: String) {
    makePayment(values: $values, type: $type)
  }
`

export default MAKE_PAYMENT;