import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
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
        <div className="d-grid">
            <ButtonGroup>
                <Button onClick={() => subtractCount()} variant="dark">-</Button>
                <span className='bg-dark text-light pt-2 ps-5 pe-5'>Cantidad: {itemCounter}</span>
                <Button onClick={() => addCount()} variant="dark">+</Button>
            </ButtonGroup>
            <Button onClick={() => {onAdd(itemCounter)}} className="btn btn-dark rounded-3 mt-2">Agregar al carrito</Button>
        </div>
    )
}