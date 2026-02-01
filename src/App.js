// src/App.js
import React from "react";
import AppRoutes from "./routes";   // arquivo que criamos em src/routes/index.js
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;