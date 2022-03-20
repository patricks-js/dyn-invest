import { Container, HeaderCard, Values, Title } from "./styles";

import output from "../../assets/images/output.svg";
import input from "../../assets/images/input.svg";
import money from "../../assets/images/money.svg";

export const CardValue = ({
  text,
  totalValue,
  typeCard,
  color,
  moneyValue
}) => {

  const hundleTypeCard = (typeCard) => {
    switch (typeCard) {
      case "income":
        return <p> R$ <span>{moneyValue}</span></p>

      case "expense":
        return <p> R$ - <span>{moneyValue}</span></p>

      default:
        return <p>R$ <span>{moneyValue}</span></p>

    }
  };

  const hundleImage = (typeImage) => {
    switch (typeImage) {
      case "income":
        return <img src={input} alt="" />;
      case "expense":
        return <img src={output} alt="" />;
      default:
        return <img src={money} alt="" />;
    }
  };

  return (
    <Container totalValue={totalValue}>
      <HeaderCard>
        <Title total={totalValue} color={color}>
          {text}
        </Title>
        {hundleImage(typeCard)}
      </HeaderCard>
      <Values total={totalValue} typeCard={typeCard}>
        {hundleTypeCard(typeCard)}
      </Values>
    </Container>
  );
};
