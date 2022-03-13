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

  const { money, expense, total, url, setDatas, datas } =
    useContext(BudgetContext);

  // Request api

  useEffect(async () => {
    const { data } = await axios.get(url);
    setDatas(data);
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
        {datas ? (
          datas.map((data) => (
            <Transaction
              key={data.id}
              descriptionText={data.description}
              valueText={data.value}
              dateText={data.date}
              valueColor={data.typeValue}
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
