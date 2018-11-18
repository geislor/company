import React, { Component } from "react";
import Site from "./Site";
import Header from './components/Header';
import Footer from "./components/Footer";
import Abount from "./components/About";
import Services from "./components/Services";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Abount />
        <Services />
        <Site />
        <Footer />
      </div>
    );
  }
}

export default App;
