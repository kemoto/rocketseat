import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    display: flex;
    align-items: center;
    padding-left: 14.4rem;
    width: 100%;
    height: 14.4rem;
    background-color: rgba(255, 133, 155, 0.05);
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 34rem;
  height: 5.6rem;
  color: #948f99;

  > Input {
    padding: 1.9rem 1.2rem;
  }

  > div:nth-child(3) {
    margin-top: 2.4rem;
  }

  > Button {
    margin-top: 2.4rem;
    width: 100%;
    color: var(--background, #312e38);
    font-weight: 500;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: -9rem;
  padding-bottom: 6.4rem;
  color: #312e38;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 0.7rem;
    bottom: 5.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: #ff859b;
    cursor: pointer;

    > input {
      display: none;
    }
  }
`;

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: #ff859b;
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
