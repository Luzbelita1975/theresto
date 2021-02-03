import React from 'react';
import Hero from "./components/Hero";
import { BrowserRouter as Router} from 'react-router-dom';
import { SidebarLink } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Hero />
     <Products heading='Choose your favorite' data={productData} />
     <Feature />
     <Products heading='Sweet Treats for You' data={productDataTwo} />
     <Footer />
   
     <Router exact path ="/" />
     <Sidebar/>  

     <Router exact path ="/pizza" />
     <Sidebar/>

     <Router exact path ="/dessert" />
     <Sidebar/>

     <Router exact path ="/Full" />
     <Sidebar/>
    
     </Router>
     
    

     


  );
}

export default App;
