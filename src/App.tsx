import { BrowserRouter } from "react-router-dom";
import Router from "./Route/Route";
import "./App.css";
import Accueil from "./components/Accueil";
import Experience from "./components/experience";

function App() {
  return (
    <BrowserRouter>
      <Router />
      {/* <Accueil /> */}
    </BrowserRouter>
    // <div>
    //   <Accueil />
    //   <Experience />
    // </div>
  );
}

export default App;