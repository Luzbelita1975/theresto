import React from 'react'; /*creo las interfaces*/ 
import ReactDOM from 'react-dom'; /*para las rutas de navegacion*/
import App from './App'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);  /*Esto es un componente*/


/*React dom, utilizo react para mostrar un componente, que declaro en index.html como div id=root   */
/*Archivo que arranca la aplicacion de React*/ 