// Context
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

  const handleInfos = (e) =>
    setRemuneration({
      ...remuneration,
      [e.target.name]: e.target.value,
      type: "income",
    });

  const handleDatas = (e) =>
    setRemuneration({
      ...remuneration,
      [e.target.name]: Number(e.target.value),
      type: "income",
    });

  const submit = (e) => {
    e.preventDefault();
    // if (remuneration) {
    createBudget(remuneration);
    // }
    setVisibilityModalIncome(false);
    setRemuneration(initialRemuneration);
    location.reload();
  };

  return (
    <Container>
      <Content onSubmit={(e) => submit(e)}>
        <h2>Nova remuneração</h2>
        <Input
          placeholder={"Descrição"}
          type="text"
          event={(e) => handleInfos(e)}
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
          event={(e) => handleInfos(e)}
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
