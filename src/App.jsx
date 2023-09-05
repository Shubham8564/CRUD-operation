import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Create />} exact path="/" />
          <Route element={<Read />} exact path="/read" />
          <Route element={<Update />} exact path="/update" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
