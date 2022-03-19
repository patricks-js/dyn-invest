// Context
import axios from "axios";
import { useContext } from "react";
import { BudgetContext } from "../../Context/BudgetContext";
import { ModalContext } from "../../Context/ModalContext";

// Components
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content } from "./styles";

export const ModalIncome = () => {
  const { setVisibilityModalIncome } = useContext(ModalContext);

  const { setRemuneration, remuneration, initialRemuneration, createBudget } =
    useContext(BudgetContext);

  const handleDatas = (e) =>
    setRemuneration({
      ...remuneration,
    //   get v() {
    //     if (e.target.name === "income") {
    //       return Number(e.target.value);
    //     }
    //     return e.target.value;
    //     //   [e.target.name]: e.target.value,
    //   },
      type: "income",
    });

  const submit = (e) => {
    e.preventDefault();
    createBudget(remuneration);
    setVisibilityModalIncome(false);
    setRemuneration(initialRemuneration);
  };

  return (
    <Container>
      <Content onSubmit={(e) => submit(e)}>
        <h2>Nova remuneração</h2>
        <Input
          placeholder={"Descrição"}
          type="text"
          event={(e) => handleDatas(e)}
          identifier="description"
          value={remuneration.description}
        />
        <Input
          placeholder={"Digite o valor da sua remuneração"}
          type="number"
          event={(e) => handleDatas(e)}
          identifier="income"
          value={remuneration.income}
        />
        <Input
          placeholder={"Data do recebimento"}
          type="date"
          event={(e) => handleDatas(e)}
          identifier="date"
          value={remuneration.date}
        />
        <div>
          <Button
            event={(e) => {
              e.preventDefault();
              setVisibilityModalIncome(false);
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
