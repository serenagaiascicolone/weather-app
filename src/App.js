//Mock
import MockCity from './mock/MockCity'

import './App.css';
import theme from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components';
import MockWeek from './mock/MockWeek';
import MockHeader from './mock/MockHeader';
import MockHome from './mock/MockHome';
function App() {
  return (
    <ThemeProvider theme={theme}>
    
    <GlobalStyles />
        <MockHeader />
        {/* <MockHome /> */}
        <MockCity />
    

    </ThemeProvider>
  );
}

export default App;
