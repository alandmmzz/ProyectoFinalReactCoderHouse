import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from '../Item/Item';

export default function Checkout() {
    const {cart} = useContext(CartContext);
    console.log(cart);

    return (
        <>
        <button type="button" className="btn btn-dark position-relative rounded-pill">
            <span >Finalizar compra</span>
        </button>
      </>
    )
}


