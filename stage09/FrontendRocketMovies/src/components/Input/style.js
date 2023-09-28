import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background-color: #262529;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  > svg {
    margin-left: 1.2rem;
  }

  > input {
    padding: 1.9rem 2.4rem;
    flex: 1;
    background-color: transparent;
    border: none;
    height: 6rem;
    border-radius: 1rem;

    color: white;
    font-size: 1.6rem;

    &::placeholder {
      color: #948f99;
    }
  }
`;
