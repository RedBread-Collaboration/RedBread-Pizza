
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main"
import "./styles/App.css";


function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="Header">
          <Header></Header>
        </div>

        <div className="Content">
          <Main></Main>
        </div>

        <div className="Footer">
          <Footer></Footer>
        </div>
      </div>
    </div>

  );
}

export default App;
