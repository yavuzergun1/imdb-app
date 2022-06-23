import axios from "axios";
import { DataProvider } from "./Context/Context";
import Pages from "./Router/Pages";
import Data from "./Data/Data";

function App() {
  return (
    <DataProvider>
      <Pages />
      <Data />
    </DataProvider>
  );
}

export default App;
