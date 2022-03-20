// Context
import { useContext } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import { ModalContext } from "../../Context/ModalContext";

// Components
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content } from "./styles";

export const ModalExpense = () => {
  const { setVisibilityModalExpense } = useContext(ModalContext);

  const { setSpending, spending, initialSpending, createBudget } =
    useContext(BudgetContext);

  const handleInfos = (e) =>
    setSpending({
      ...spending,
      [e.target.name]: e.target.value,
      type: "expense",
    });

  const handleDatas = (e) =>
    setSpending({
      ...spending,
      [e.target.name]: Number(e.target.value),
      type: "expense",
    });

  function submit(e) {
    e.preventDefault();
    createBudget(spending);
    setVisibilityModalExpense(false);
    setSpending(initialSpending);
    location.reload()
  }

  return (
    <Container>
      <Content onSubmit={(e) => submit(e)}>
        <h2>Nova despesa</h2>
        <Input
          placeholder={"Descrição"}
          type="text"
          event={(e) => handleInfos(e)}
          identifier="description"
          value={spending.description}
        />
        <Input
          placeholder={"Digite o valor da nova despesa"}
          type="number"
          event={(e) => handleDatas(e)}
          identifier="expense"
          value={spending.expense}
        />
        <Input
          placeholder={"Data do pagamento"}
          type="date"
          event={(e) => handleInfos(e)}
          identifier="date"
          value={spending.date}
        />
        <div>
          <Button
            event={(e) => {
              e.preventDefault();
              setVisibilityModalExpense(false);
            }}
          >
            Cancelar
          </Button>
          <Button>Salvar</Button>
        </div>
      </Content>
    </Container>
  );
};
