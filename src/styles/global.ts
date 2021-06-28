import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
  --background: #144C91;
  --green:#96C11F;
  --white: #FFFFFF;
  --blue: #144C91;
  --blue-light: #1D60A5;
  --text-title:##FFFFFF;
  --text-body:#969CB3;
  --shape: #FFFFFF;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  color: var(--white)
}
html{
  @media (max-width: 1080px){
    font-size: 93,75%;
  }
  @media (max-width: 720px){
    font-size: 87,5%
  }
}
body, input, textarea, button{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
h1, h2, h3,h4,h5, h6, strong{
  font-weight: 600;
}
body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}
button{
  cursor:pointer;
}

a{
  text-decoration: none;
  color: inherit;
}
[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
