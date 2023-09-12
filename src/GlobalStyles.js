import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   background-image: url(https://images5.alphacoders.com/130/1305448.jpg);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
   
}
`;
export default GlobalStyle;
