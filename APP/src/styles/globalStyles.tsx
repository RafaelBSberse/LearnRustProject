import { createGlobalStyle  } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    #root {
        margin: 0;
        padding: 0;
        background-color: #333333;
        color: #f2f2f2;
        width: 100vw;
        height: 100vh;
    }
`;