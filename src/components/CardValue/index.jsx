import { Container, HeaderCard, Values, Title } from "./styles";

import output from "../../assets/images/output.svg";
import input from "../../assets/images/input.svg";
import money from "../../assets/images/money.svg";

export const CardValue = ({
  text,
  totalValue,
  incomeImg,
  expenseImg,
  moneyImg,
  color
}) => {
  return (
    <Container totalValue={totalValue}>
      <HeaderCard>
        <Title total={totalValue} color={color}>
          {text}
        </Title>
        {(incomeImg && <img src={input} alt="" />) ||
          (expenseImg && <img src={output} alt="" />) ||
          (moneyImg && <img src={money} alt="" />)}
      </HeaderCard>
      <Values total={totalValue}>
        <p>R$ <span>1000</span>,00</p>
      </Values>
    </Container>
  );
};
