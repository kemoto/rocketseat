import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/backgroundImg.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const SignInHeader = styled.div`
  margin-bottom: 4.8rem;
  > h1 {
    color: #ff859b;
    font-family: Roboto Slab;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > span {
    color: #cac4cf;
    font-family: Roboto Slab;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 34rem;
  margin: 23.5rem 16rem 0;

  > label {
    display: flex;
    justify-content: left;
    color: var(--white, #f4ede8);
    text-align: center;
    font-family: Roboto Slab;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > .inputs {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    color: #948f99;
    margin: 4.8rem 0 4.2rem 0;
  }

  > .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.2rem;

    > Button {
      color: var(--background, #312e38);
      text-align: center;
      font-family: Roboto Slab;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

export const CreateAcc = styled(Link)`
  text-decoration: none;
  color: #ff859b;
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
