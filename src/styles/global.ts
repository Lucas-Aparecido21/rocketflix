import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
margin:0;   
padding:0;
box-sizing: border-box;
}
body{
   background-image: linear-gradient(to right, rgba(30, 70, 163, 1), rgba(11, 26, 61, 1), rgba(0, 0, 0, 1), rgba(193, 42, 35, 1));

}
body, input, textarea, button
{
    font-family: 'Popins', sans-serif;
    font-weight: 400;
}
`;
