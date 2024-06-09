import React, { useState } from "react";
import card from "./components/card";
import navbar from "./components/navbar";
import header from "./components/header";
import footer from "./components/footer";

function App() {
  return (
    <><div className="fixed-top">
      <navbar/>
      <header />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center cardcss">
      <card  />
      </div>
      <footer/>
    </>
  );
}

export default App;