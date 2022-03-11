import { Container } from "./styles";

export const Input = ({ type, event, placeholder }) => (
  <Container type={type} onChange={event} placeholder={placeholder} />
);
