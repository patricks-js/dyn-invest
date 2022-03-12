import { BudgetContextProvider } from "./Context/BudgetContext";
import Home from "./Home";
import Global from "./styles/global";

const App = () => {
  return (
    <>
      <BudgetContextProvider>
        <Home />
      </BudgetContextProvider>
      <Global />
    </>
  );
};
export default App;
