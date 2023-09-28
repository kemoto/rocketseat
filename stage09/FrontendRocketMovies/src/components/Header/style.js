import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  width: 100%;
  height: 11.6rem;

  padding: 2.6rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;

  border-bottom: 1px solid #3e3b47;

  > h1 {
    color: #ff859b;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  text-decoration: none;

  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    color: #f4ede8;

    strong {
      white-space: nowrap;
    }

    span {
      color: #948f99;
      cursor: pointer;

      &:hover {
        color: #6c6a6f;
      }
    }
  }
`;

export const ProfileLink = styled(Link)`
  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    cursor: pointer;
  }
`;
