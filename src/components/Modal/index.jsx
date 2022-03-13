// Context
import axios from "axios";
import { useContext } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import { ModalContext } from "../../Context/ModalContext";

// Components
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content } from "./styles";

export const Modal = () => {
  const { setVisibilityModal } = useContext(ModalContext);

  const {
    setMoney,
    setExpense,
    setTotal,
    setDescription,
    setDate,
    setDatas,
    datas,
    url,
  } = useContext(BudgetContext);

  let value;

  let descriptionText;

  let dateText;

  function setMoneyValue(e) {
    value = Number(e.target.value);
  }

  function setDescriptionValue(e) {
    descriptionText = e.target.value;
  }

  function setDateValue(e) {
    dateText = e.target.value;
  }

  const handleDatas = (values) => {
    try {
      const { data } = axios.post(url, values);
    } catch (error) {
      console.log(error);
    }
  };

  function setValues() {
    if (value) {
      if (value > 0) {
        setMoney((prev) => prev + value);
        setTotal((prev) => prev + value);
      } else {
        setExpense((prev) => prev + value);
        setTotal((prev) => prev + value);
      }
    }
    setDescription(descriptionText);
    setDate(dateText);
    setDatas({
      description: descriptionText,
      value: value,
      date: dateText,
    });
  }

  function submit(e) {
    e.preventDefault();
    handleDatas(datas)
    setVisibilityModal(false);
  }

  return (
    <Container>
      <Content onSubmit={submit}>
        <h2>New Transaction</h2>
        <Input
          placeholder={"Description"}
          type="text"
          event={(e) => setDescriptionValue(e)}
        />
        <Input
          placeholder={"R$ 0.00"}
          type="number"
          event={(e) => setMoneyValue(e)}
          required
        />
        <Input type="date" event={(e) => setDateValue(e)} />
        <div>
          <Button event={() => setVisibilityModal(false)}>Cancelar</Button>
          <Button event={setValues}>Salvar</Button>
        </div>
      </Content>
    </Container>
  );
};
