import { Container } from "./styles";

export const Button = ({event, children}) =>  <Container onClick={event}>{children}</Container>

