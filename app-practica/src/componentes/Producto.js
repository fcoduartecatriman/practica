import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto;
    const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id);
    agregarProducto([
    ...carrito,
       producto

    ]);
    }

    const eliminarProducto = id => {
        const productos=carrito.filter(Producto => producto.id !== id);
        agregarProducto(productos)
    }
    return (

        <div>
            <h2>{nombre}</h2>   
            <p>${precio}</p>
            <p>{id}</p>
            {productos
            ?

            (
            <button
                type="button"
                onClick= {() =>seleccionarProducto(id) }
            >comprar</button>
            )
        
            :
            (
                <button
                type="button"
                onClick={() => eliminarProducto (id) }
            >eliminar</button>
            )
            }
        </div>

      );
}
 
export default Producto ;

