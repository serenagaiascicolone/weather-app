import './App.css';
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { useState } from 'react';
import setBodyColor from './utilities/bodyColor';
function App() {

  return (
      <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
            <AppRouter />
    </ThemeProvider>
  </Provider>  
  );
}

export default App;
