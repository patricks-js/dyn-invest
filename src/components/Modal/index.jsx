// Context
import { useContext, useState } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import { ModalContext } from "../../Context/ModalContext";

// Components
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content } from "./styles";

export const Modal = () => {
  const { setVisibilityModal } = useContext(ModalContext);

  const { setMoney, setExpense, setTotal, setDescription } = useContext(BudgetContext);

  let value;

  let descriptionText;

  function setMoneyValue(e) {
    value = Number(e.target.value);
  }

  function closeModal() {
    setVisibilityModal(false);
  }

  function salveMoney() {
    if (value) {
      if (value > 0) {
        setMoney((prev) => prev + value);
        setTotal((prev) => prev + value);
      } else {
        setExpense((prev) => prev + value);
        setTotal((prev) => prev + value)
      }
    }
    setVisibilityModal(false);
  }

  function setDescriptionValue(e) {
    descriptionText = e.target.value    
  }

  function salveDescription() {
      setDescription((prev) => prev + description)
  }

  return (
    <Container>
      <Content>
        <h2>New Transaction</h2>
        <Input placeholder={"Description"} type="text" event={(e) => setDescriptionValue(e)}/>
        <Input
          placeholder={"R$ 0.00"}
          type="number"
          event={(e) => setMoneyValue(e)}
        />
        <Input type="date" />
        <div>
          <Button event={closeModal}>Cancelar</Button>
          <Button event={salveMoney}>Salvar</Button>
        </div>
      </Content>
    </Container>
  );
};
