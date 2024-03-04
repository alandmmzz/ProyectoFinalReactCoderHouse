import {useState} from "react";

export default function ItemCount({ initial, stock, onAdd }) {
    
    const [itemCounter, setItemCounter] = useState(initial);

    function addCount(){
        if (itemCounter < stock) {
            setItemCounter(itemCounter + 1)
        }
    }

    function subtractCount(){
        if (itemCounter > 1) {
            setItemCounter(itemCounter - 1)
        }
    }


    return (
        <div className="d-flex">
            <div className="d-flex me-2">
                <button onClick={() => subtractCount()} >-</button>
                <p>{itemCounter}</p>
                <button onClick={() => addCount()}>+</button>
            </div>
            <div>
                <button onClick={() => {onAdd(itemCounter)}}>Agregar al carrito</button>
            </div>
        </div>
    )
}