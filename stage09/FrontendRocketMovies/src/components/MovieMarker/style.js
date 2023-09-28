import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  width: fit-content;

  font-family: Roboto;

  background-color: ${({ $isnew }) => ($isnew ? "transparent" : "#262529")};
  border: ${({ $isnew }) => ($isnew ? "2px dashed #948F99" : "none")};
  color: ${({ $isnew }) => ($isnew ? "#948F99" : "#FFFFFF")};
  cursor: ${({ $isnew }) => ($isnew ? "pointer" : "normal")};
  border-radius: 1rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff859b;
  cursor: pointer;
`;
