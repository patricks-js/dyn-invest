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
import { Modal } from "../components/Modal";
import axios from "axios";

const Home = () => {
  const { setVisibilityModal, visibilityModal } = useContext(ModalContext);

  const {
    money,
    expense,
    total,
    url,
    setResults,
    results,
    datas,
    date,
    description,
  } = useContext(BudgetContext);

  // Request api

  useEffect(async () => {
    const { data } = await axios.get(url);
    await setResults(data);
  }, [total]);

  return (
    <Container>
      <header>
        <img src={logo} alt="" />
      </header>
      <Cards>
        <CardValue
          incomeColor
          text="Income"
          color="incomeColor"
          typeCard="income"
          moneyValue={money}
        />
        <CardValue
          expenseColor
          text="Expense"
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
        <Button event={() => setVisibilityModal(true)}>
          + New Transaction
        </Button>
      </div>

      {visibilityModal && <Modal />}

      <DescriptionTitles />
      <TransactionContainer>
        {results ? (
          results.map((result) => (
            <Transaction
              key={result.id}
              descriptionText={result.description}
              valueText={result.value}
              dateText={result.date}
              valueColor={result.typeValue}
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
