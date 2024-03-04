import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx'

export default function ItemDetail({ item }) {

    const [counter, setCounter] = useState(null);
    const {cart, addItem} = useContext(CartContext);

    function purchaseProducts(onAddCounter) {
        setCounter(onAddCounter);
        addItem(item, onAddCounter);
    }

    return (
        <div className="CardContainer d-flex justify-content-center w-100">
            <Card style={{ width: '18rem', marginRight: '15px' }}>
                <Card.Img variant="top" src={item?.image} />
                <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                    {item?.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex justify-content-center fw-bold">{item?.price}</ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-center fw-bold">{item?.category}</ListGroup.Item>
                </ListGroup>
            </Card>
            <Card style={{ width: '27rem' }}>
                <ItemCount initial={1} stock={15} onAdd={purchaseProducts}/>
            </Card>
        </div>
    )
} 