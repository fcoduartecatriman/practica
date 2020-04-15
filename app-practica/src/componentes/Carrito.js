import React from 'react';
import './Carrito.css';
import Producto from './Producto';


const Carrito = ({carrito,agregarProducto}) => (


    <div className="Carrito">
        <h2>Carrito</h2>
        {carrito.length ===0
        ?<p>sin compras</p>
        :carrito.map(producto => (
        <Producto
        key={producto.id}
        producto={producto} 
        carrito={carrito}
        agregarProducto={agregarProducto}
     />
            
        ))}
</div>
);
         

 
export default Carrito;