import { Container, Description, Value, Date } from "./styles";

export const Transaction = ({
  descriptionText,
  budgetText,
  dateText,
  valueColor,
}) => {
  return (
    <Container>
      <Description>{descriptionText}</Description>
      <Value color={valueColor}>R&#36; {budgetText},00</Value>
      <Date>{dateText}</Date>
    </Container>
  );
};
