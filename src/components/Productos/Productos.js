import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import './Productos.css';
import Buscador from '../Buscador/Buscador';

class Productos extends Component {
    
    render() { 
        return (  
           <div className="productos">
                <h2>Nuestros Productos</h2>

                <Buscador 
                    busqueda={this.props.buscarProducto}
                />

                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto => (
                        <Producto
                            key={producto}
                            infoProducto={this.props.productos[producto]}
                        />
                    ))}
                </ul>
           </div>
        );
    }
}
 
export default Productos;