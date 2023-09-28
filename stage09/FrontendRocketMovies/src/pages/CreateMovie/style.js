import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  width: 100%;
  padding: 4rem 14.7rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Section = styled.div`
  width: 100%;
  padding: 0 14.7rem 4rem;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Text = styled.div`
  padding: 0 14.7rem 4rem;
`;

export const Markers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 14.7rem 4rem;

  > div {
    display: flex;
    gap: 2.4rem;
    padding: 1.6rem;
    border-radius: 1rem;
    background-color: #0d0c0f;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  padding: 0 14.7rem 4rem;

  &:first-child {
    background-color: black;
  }
`;

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.8rem;
  color: #ff859b;
  text-align: center;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
