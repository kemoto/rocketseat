import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    background: #1C1B1E;
    color: white;
  }
  
  border-style, a, button, textarea {
    font-family: 'Roboto Slab', serif;
  }
`;