import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 4.8rem;
  background-color: ${({$colortype}) => ($colortype=="pink") ? "#ff859b" : "#0D0C0F"};
  color: ${({$colortype}) => ($colortype=="pink") ? "#312E38" : "#FF859B"};
  border-radius: 1rem;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  padding: 1.6rem;

  &:active {
    background-color: ${({$colortype}) => ($colortype=="pink") ? "#bf5f71" : "#0D0C0F"};
  }
`;
