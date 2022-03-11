import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: var(--shadow);
    height: 100vh;
    position: fixed;
`

export const Content = styled.div`
  width: 35.5rem;
  height: 21.4375rem;

  background-color: #f0f2f5;

  border-radius: 5px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  h2 {
    color: var(--color-alt);
    font-weight: 500;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      border: 1px solid;
      padding: 10px 15px;
      width: 200px;
      font-size: 1.1rem;
      font-weight: 500;
      transition: background .3s;
      border-radius: 5px;
      &:hover {
          background-color:  hsla(104.1,63.5%,40.8%, 20%);
      }
      &:first-child {
        border-color: var(--color-expense);
        color: var(--color-expense);
        &:hover {
            background-color:  hsla(0,81.4%,53.7%, 20%);
        }
      }
    }
  }
`;