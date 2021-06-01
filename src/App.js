import Router from './routing';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./config/Theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
