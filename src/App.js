import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './components/product/index';
import AddProduct from './components/product/add';
import EditProduct from './components/product/edit';

//import EditProduct from './components/product/edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h3>Redux with crud</h3>
        <Link to="/index">Home</Link> |
        <Link to="/add">Add</Link> |
        <Link to="/edit">Edit</Link>
        <br></br>
        <Route path="/" exact component={ProductList}></Route>
        <Route path="/index" exact component={ProductList}></Route>
        <Route path="/add" exact component={AddProduct}></Route>
        <Route path="/edit/:id" exact component={EditProduct}></Route>
        <br></br>
    Copyright 2018
  </div>
    </BrowserRouter>
  );
}

export default App;


