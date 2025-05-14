// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import React from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";

function App() {
  return (
    <div className={css.app}>
      <div>
        <CafeInfo />
      </div>
    </div>
  );
}

export default App;
