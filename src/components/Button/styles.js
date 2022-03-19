import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ buttonExpense }) =>
    buttonExpense ? "var(--color-expense)" : "var(--color-income)"};
  font: normal 1rem var(--font-default);
  cursor: pointer;
`;
