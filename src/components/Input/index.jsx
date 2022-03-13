import { Container } from "./styles";

export const Input = ({ type, event, placeholder, required }) => (
  <Container type={type} onChange={event} placeholder={placeholder} required={required} />
);
