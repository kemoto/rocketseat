import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 16px;
  background: rgba(255, 133, 155, 0.05);
  padding: 3.2rem;
  text-decoration: none;

  > .header {
    > h2 {
      color: #F4EDE8;
      font-size: 2.4rem;
      font-weight: 700;
    }

    > .rating {
      color: #ff859b;
    }
  }

  > p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--gray, #999591);
  }

  > .tags {
    display: flex;
    gap: 0.8rem;
  }
`;
