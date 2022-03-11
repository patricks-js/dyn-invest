import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 25vh;
    background-color: #2d4a22;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

    img {
      width: 100%;
      max-width: 200px;
      position: relative;
      top: -40px;
    }
  }

  > div:nth-child(3) {
    width: 100%;
    max-width: 1000px;
  }
`;

export const Cards = styled.div`
  max-width: 1000px;
  width: 90%;
  display: flex;
  gap: 2rem;
`;

export const TransactionContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
