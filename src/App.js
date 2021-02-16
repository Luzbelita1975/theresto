import React from 'react';
import Hero from "./components/Hero";
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./Pages/Page-1";
import Page2 from "./Pages/Page-2";
import Page3 from "./Pages/Page-3";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path="./Pages/Page-1" component={Page1}/>
                <Route path="./Pages/Page-2" component={Page2}/>
                <Route path="./Pages/Page-3" component={Page3}/>
                
            </Switch>
        </BrowserRouter>
    )
}


function App() {
  return (
    <Router>
     <GlobalStyle/>
     <Hero />
     <Products heading='Choose your favorite' data={productData} />
     <Feature />
     <Products heading='Sweet Treats for You' data={productDataTwo} />
    </Router>
         


  );
}

/*Codigo que hacer funcionar la aplicacion*/ 
export default App;
