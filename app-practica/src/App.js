import React, { Fragment,useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Producto from './componentes/Producto';


function App() {

const [ productos, guardarproductos] = useState ([
  {id: 1, nombre: '...and justice for all', precio: 50},
  {id: 2, nombre: 'abigail', precio: 50},
  {id: 3, nombre: 'mutter', precio: 50},
]);



const [carrito, agregarProducto] = useState([]);
  
const fecha = new Date().getFullYear();
  return (
    
      <Fragment>
      <Header
      titulo="CURSO DE REACT" />
      <h1>Vinilos en stock:</h1>
      {productos.map(producto => (
        <Producto
        key={producto.id}
        producto={producto} 
        productos={productos}
        carrito={carrito}
        agregarProducto={agregarProducto}/>

      ))}
      <Footer
      fecha={fecha} />
     </Fragment>
  );
}

export default App;