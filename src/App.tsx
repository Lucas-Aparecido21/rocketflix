import { ThemeProvider } from "styled-components";
import { AppFlix } from "./components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <AppFlix />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
