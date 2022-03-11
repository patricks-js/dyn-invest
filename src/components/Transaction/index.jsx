import { Container, Description, Value, Date } from "./styles";

export const Transaction = ({
  descriptionText,
  valueText,
  dateText,
  descriptionColor,
  valueColor,
}) => {
  return (
    <Container description={descriptionColor}>
      <Description>{descriptionText}</Description>
      <Value color={valueColor}>R&#36; {valueText},00</Value>
      <Date>{dateText}</Date>
    </Container>
  );
};
