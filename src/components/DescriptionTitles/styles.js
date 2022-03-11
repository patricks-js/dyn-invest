import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: transparent;
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

