import usePersistedState from "./utils/usePersistedState"

import { BudgetContextProvider } from "./Context/BudgetContext";
import { ThemeProvider } from "styled-components";
import light from "./styles/Themes/light";
import dark from "./styles/Themes/dark";
import Home from "./Home";
import Global from "./styles/global";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BudgetContextProvider>
        <Home toggleTheme={toggleTheme} />
      </BudgetContextProvider>
      <Global />
    </ThemeProvider>
  );
};
export default App;
