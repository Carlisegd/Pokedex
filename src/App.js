import React from "react";
import RouterApp from "./routes/Router";
import {BrowserRouter} from "react-router-dom";
import GlobalStates from "../src/Global/GlobalStates";

const App = () => {

  return (
    <GlobalStates>
    <BrowserRouter>
      
      <RouterApp  />
    </BrowserRouter>
    </GlobalStates>
  );
}

export default App
