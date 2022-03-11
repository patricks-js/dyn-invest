import { Container, Cards, TransactionContainer } from "./styles";
import logo from "../assets/images/logo.svg";

import { CardValue } from "../components/CardValue";
import { Transaction } from "../components/Transaction";
import { DescriptionTitles } from "../components/DescriptionTitles";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";
import { useState } from "react";

const Home = () => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <Container>
      <header>
        <img src={logo} alt="" />
      </header>
      <Cards>
        <CardValue incomeImg incomeColor text="Income" color="incomeColor" />
        <CardValue expenseImg expenseColor text="Expense" />
        <CardValue moneyImg totalValue text="Total" color="totalColor" />
      </Cards>

      <div>
        <Button event={() => setActiveModal(true)}>+ New Transaction</Button>
      </div>

      <DescriptionTitles />
      <TransactionContainer>
      
      {
        // Validation
      }

      <Transaction
        descriptionText="First"
        valueText="500"
        dateText="12/05/2015"
        valueColor="income"
      />
      </TransactionContainer>
      
      {activeModal && <Modal states={activeModal} setStates={setActiveModal} />}
    </Container>
  );
};

export default Home;
