import { Container } from "./styles";

export const Input = ({ type, event, placeholder, identifier, value }) => (
  <Container
    type={type}
    onChange={event}
    placeholder={placeholder}
    name={identifier}
    id={identifier}
    value={value}
  />
);
