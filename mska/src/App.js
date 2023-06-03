import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { urlResource } from "./components/shared/urlResource";
import Home from "./components/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={urlResource.LINK_TO_HOME_PAGE} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
