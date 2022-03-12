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

const Home = () => {
  const { setVisibilityModal, visibilityModal } = useContext(ModalContext);

  const { money, expense, total, description } = useContext(BudgetContext);

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
        {/* {money ? (
          <Transaction
            descriptionText="First"
            valueText="500"
            dateText="12/05/2015"
            valueColor="income"
          />
        ) : (
            <p>N</p>
        )} */}
      </TransactionContainer>
    </Container>
  );
};

export default Home;
