import React from "react";
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div class="itemList d-flex align-items-center">
            <div class="greeting fw-bold text-center">
                {greeting}
            </div>
    </div>
        
    )
}


export default ItemListContainer;