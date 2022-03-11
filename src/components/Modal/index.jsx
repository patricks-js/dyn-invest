import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container, Content } from "./styles";

export const Modal = ({ setStates }) => {
  const [state] = useState(false);

  return (
    <Container>
      <Content>
        <h2>New Transaction</h2>
        <Input placeholder={"Description"} type="text" />
        <Input placeholder={"R$ 0.00"} type="number" />
        <Input type="date" />
        <div>
          <Button
            event={() => {
              setStates(state);
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
