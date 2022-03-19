import { Container } from "./styles";

export const Button = ({ event, buttonExpense, children }) => (
  <Container buttonExpense={buttonExpense} onClick={event}>
    {children}
  </Container>
);
