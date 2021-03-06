import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:Title
  src: url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
}
@font-face {
  font-family:Text
  src: url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap');
}
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background: url('/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
	border-radius: 10px;
}
  
::-webkit-scrollbar
{
	width: 10px;
	background-color: #C2C2C2;
}
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color: #C2C2C2;
}
`;
export default GlobalStyle;
