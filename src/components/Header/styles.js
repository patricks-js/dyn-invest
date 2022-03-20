import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 25vh;
  background-color: var(--color-header);
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    align-items: center;
    position: relative;
    top: -2rem;
    > h1 {
        margin-right: 40px;
    }
  }
`;
