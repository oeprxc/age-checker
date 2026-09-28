import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import AgeForm from "./Components/AgeForm";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          {/* Header */}
          <Header />

          {/* Main */}
          <AgeForm />
        </div>
      </div>
    </>
  );
};

export default App;
