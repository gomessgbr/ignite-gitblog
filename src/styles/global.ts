import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box
    }

    body{
        font: 14px Nunito, sans-serif;
        line-height: 160%;
        background-color: ${({ theme }) => theme["base-background"]};
    }
    button{
        cursor: pointer;
    }


`;
