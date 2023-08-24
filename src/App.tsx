import { BrowserRouter } from "react-router-dom";
import Routers from "./Route/Route";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_BASENAME}>
      <Routers />
    </BrowserRouter>
  );
}

export default App;