import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  p {
    width: 100%;
    display: inline-flex;
    &:nth-child(2) {
      justify-content: center;
    }
    &:last-child {
      justify-content: flex-end;
    }
  }
`;

export const Description = styled.p`
  color: var(--color-alt);
`;

const hundleColor = (color) => {
  switch (color) {
    case "income":
      return "var(--color-income)  ";
    case "expense":
      return "var(--color-expense)";
  }
};

export const Value = styled.p`
  color: ${({ color }) => hundleColor(color)};
`;

export const Date = styled.p``;
