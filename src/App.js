import React from "react";
import './App.css';
import Cart from "./Cart.js"
import CartHeader from "./CartHeader";
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import CartItemList from "./CartItemList"
import CartItem from "./CartItem";



function App() {

  return (
    <BrowserRouter>
    <Router>
        <div className="App">
          <CartHeader />
      <div className="content">
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/ProductList"><CartItemList /></Route>
          <Route exact path="/ProductList/:id"><CartItem /></Route>
          <Route exact path="/CartPage"><Cart/></Route>
          <Route path="*"><PageNotFound/></Route>
      </Switch>
      </div>
    </div>
    </Router>
    </BrowserRouter>
    
  );
}


export default App;
