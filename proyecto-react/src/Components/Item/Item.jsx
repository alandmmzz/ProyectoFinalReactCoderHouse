import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function Item({producto}) {

    return (
        <div class="CardContainer d-flex justify-content-center w-100">
            <Card style={{ width: '18rem' }}>
            <Link to={`/item/${producto.id}`} className="text-reset">
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center fw-bold">{producto.title}</Card.Title>
                    <Card.Text className="d-flex justify-content-center fw-bold">$ {producto.price}</Card.Text>
                </Card.Body>
                </Link>
            </Card>
        </div>   
    )
  }