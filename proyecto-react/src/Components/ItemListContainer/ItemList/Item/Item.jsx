import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./Item.css"

export default function Item({producto}) {

    return (
        <div className="cardProduct d-flex justify-content-center me-2 mb-5 w-100">
            <Card className="shadow 
            rounded-4 border-0" style={{ width: '18rem', height: "25rem"}}>
                <Link to={`/item/${producto.id}`} className="text-reset">
                    <Card.Img className="p-3" style={{height: "18rem"}} variant="top" src={producto.image} />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-center">{producto.title}</Card.Title>
                        <Card.Text className="d-flex justify-content-center fs-4 fw-bold">$ {producto.price}</Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </div>   
    )
  }