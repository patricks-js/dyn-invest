// Context
import { useContext, useEffect } from "react";
import { BudgetContext } from "../Context/BudgetContext";
import { ModalContext } from "../Context/ModalContext";

// Styles and Assets
import { Container, Cards, TransactionContainer } from "./styles";
import logo from "../assets/images/logo.svg";

// Components
import { CardValue } from "../components/CardValue";
import { Transaction } from "../components/Transaction";
import { DescriptionTitles } from "../components/DescriptionTitles";
import { Button } from "../components/Button";
import { ModalIncome } from "../components/ModalIncome";
import { ModalExpense } from "../components/ModalExpense";
import axios from "axios";

const Home = () => {
  // ! Contexts
  const {
    setVisibilityModalIncome,
    visibilityModalIncome,
    setVisibilityModalExpense,
    visibilityModalExpense,
  } = useContext(ModalContext);

  const { response, setResponse, income, expense, total } =
    useContext(BudgetContext);

  return (
    <Container>
      <header>
        <img src={logo} alt="" />
      </header>
      <Cards>
        <CardValue
          incomeColor
          text="Remunerações"
          color="incomeColor"
          typeCard="income"
          moneyValue={income}
        />
        <CardValue
          expenseColor
          text="Gastos"
          typeCard="expense"
          moneyValue={expense}
        />
        <CardValue
          totalValue
          text="Total"
          color="totalColor"
          moneyValue={total}
        />
      </Cards>

      <div>
        <Button event={() => setVisibilityModalIncome(true)}>
          + Add nova remuneração
        </Button>
        <Button event={() => setVisibilityModalExpense(true)} buttonExpense>
          + Add nova despensa
        </Button>
      </div>

      {visibilityModalIncome && <ModalIncome />}
      {visibilityModalExpense && <ModalExpense />}

      <DescriptionTitles />
      <TransactionContainer>
        {response[0] ? (
          response.map((res) => (
            <Transaction
              key={res.id}
              descriptionText={res.description}
              dateText={res.date}
              budgetText={res.income || res.expense}
              valueColor={res.type}
            />
          ))
        ) : (
          <p>Nenhum registro</p>
        )}
      </TransactionContainer>
    </Container>
  );
};

export default Home;
