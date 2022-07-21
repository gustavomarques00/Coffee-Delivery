import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        background-color: ${(props) => props.theme.colors["base-background"]};
        color: ${(props) => props.theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
    }
    body,input,textarea,button{
        font-family: ${(props) => props.theme.fonts.regular};
        font-size: ${(props) => props.theme.textSizes["text-regular-m"]};
        font-weight: 400;
    }
    button{
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
