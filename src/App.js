//Mock


import './App.css';
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter'

function App() {


  return (
    <ThemeProvider theme={theme}>
    
    <GlobalStyles />

      <AppRouter />

    

    </ThemeProvider>
  );
}

export default App;
