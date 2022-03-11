import styled from "styled-components";

export const Container = styled.div`
  width: 22rem;
  height: 8.5rem;

  background-color: ${({totalValue}) => (totalValue ? "#49AA26" : "#ffffff")};
  border-radius: 5px;

  position: relative;
  top: -5rem;

  box-shadow: var(--box-shadow);

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Values = styled.div`
  p {
    font-size: 2.25rem;
    color: ${({ total }) => (total ? "white" : "var(--color-alt)")};
    span {
      font-weight: 500;
    }
  }
`;

const hundleColor = (color) => {
  switch (color) {
    case "incomeColor":
      return "var(--color-alt)";
    case "totalColor":
      return "white";
    default:
      return "var(--color-default)";
  }
};

export const Title = styled.span`
  color: ${({color}) => hundleColor(color)};
  font-size: 1.2rem;
`;
