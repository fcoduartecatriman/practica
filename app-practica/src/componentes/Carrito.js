import React from 'react';
import './Carrito.css';
import Producto from './Producto';


const Carrito = ({carrito}) => (


    <div className="Carrito">
        <h2>Carrito</h2>
        
        {carrito.map(producto => (
        <Producto
        key={producto.id}
        producto={producto} 

     />
            
        ))}
</div>
);
         

 
export default Carrito;