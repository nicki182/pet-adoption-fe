import { addDecorator } from '@storybook/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../theme/index';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:Title
  src: url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
}
@font-face {
  font-family:Text
  src: url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300&display=swap');
}`;
addDecorator((story) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </>
));
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
