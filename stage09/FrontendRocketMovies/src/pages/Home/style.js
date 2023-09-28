import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  padding-bottom: 5rem;
`;

export const Menu = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5rem 20rem;

  > Button {
    width: 20rem;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 98%;
  max-width: 125rem;
  margin: 0 auto;
  overflow-y: auto;
`;

export const NewMovie = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1c1b1e;
  font-feature-settings: "liga" off;
  font-family: Roboto Slab;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #FF859B;
  padding: 1.6rem;
  border-radius: 1rem;
`;
