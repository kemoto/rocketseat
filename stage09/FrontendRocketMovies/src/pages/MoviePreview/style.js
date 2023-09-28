import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ContentBox = styled.div`
  height: 70rem;
  margin: 4rem 11rem 15rem;
  overflow-y: auto;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > .menuHeader {
    display: flex;
    align-items: center;
    gap: 2rem;

    > h2 {
      color: var(--white, #f4ede8);
      font-family: Roboto Slab;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    > .rating {
      display: flex;
      align-items: center;
      color: #ff859b;
    }
  }

  > .menuFooter {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #ff859b;

    > img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    > span {
      color: #f4ede8;
      text-align: justify;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const TagSection = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 4rem;
`;

export const DescriptionSection = styled.div`
  margin-top: 4rem;
  color: #f4ede8;
  text-align: justify;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0.5rem;
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
