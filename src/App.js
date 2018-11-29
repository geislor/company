import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Abount from "./components/About";
import Services from "./components/Services";
import Portfolio from "./containers/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Admin from "./containers/admin/Admin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          
          <Route path='/' exact component={Abount} />
          <Route path='/services' component={Services} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/contact' component={Contact} />

          <Route path='/admin' component={Admin} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
