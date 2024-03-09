import React from "react";
import Item from "./Item/Item";

function ItemList({productos}) {

    return (
      <>
        {productos.map((producto) => (
                <div key={producto.id}><Item producto={producto} /></div> 
            ))
        }
      </>
    )
  }
  
  export default ItemList