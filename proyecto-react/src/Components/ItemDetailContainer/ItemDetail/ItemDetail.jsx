import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext.jsx';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount/ItemCount.jsx';

import Swal from 'sweetalert2'

import './ItemDetail.css'

export default function ItemDetail({ item }) {

    const [counter, setCounter] = useState(null);
    const { cart, addItem } = useContext(CartContext);

    function purchaseProducts(onAddCounter) {
        setCounter(onAddCounter);
        addItem(item, onAddCounter);
        Swal.fire({
            icon: "success",
            title: "Se agregó tu producto al carrito",
            timer: 2500,
            timerProgressBar: true,
        });
    }

    return (
        <>
            <div className="row p-0 pe-5 ps-5 pb-3 m-0 mt-3">
                <div className='col-6'>
                    <Card className='me-5'>
                        <Card.Img variant="top" src={item?.image} />
                    </Card>
                </div>
                <div className='col-6'>
                    <Card className='border-0'>
                        <Link to={`/`} className="reset-text">
                            <Card.Body className='d-flex text-secondary pb-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-return-left me-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5" />
                                </svg>
                                <Card.Title className='fs-6 d-flex'>
                                    Volver al catálogo
                                </Card.Title>
                            </Card.Body>
                        </Link>
                        <Card.Body className='border-bottom'>
                            <Card.Title className='fs-3 fw-bold'>{item?.title}</Card.Title>
                            <Card.Text>{item?.description}</Card.Text>
                            <Card.Text className='fs-4 fw-bold'>${item?.price}</Card.Text>
                        </Card.Body>
                        <Card.Body className='border-bottom'>
                            <Card.Title className='fs-5 fw-semibold'>Color:</Card.Title>
                            <div className='d-flex'>
                                <Button className="btnColor btn btn-danger rounded-3 mt-2 me-3"></Button>
                                <Button className="btnColor rounded-3 mt-2"></Button>
                            </div>
                        </Card.Body>
                        <Card.Body className='row'>
                            <Card.Text className='col-6 d-grid pt-2'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-left-circle me-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg>
                                    <span><strong>Devolución gratis. </strong>Tienes 30 días desde que lo recibes.</span>
                                </div>
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-shield-check me-2" viewBox="0 0 16 16">
                                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                                    </svg>
                                    <span><strong>Compra Protegida, </strong>recibe el producto que esperabas o te devolvemos tu dinero.</span>
                                </div>
                            </Card.Text>
                            <div className='col-6'>
                                <ItemCount initial={1} stock={item?.stock} onAdd={purchaseProducts} />
                                <Link to={`/cart`} className="reset-text">
                                    <div className='d-grid'>
                                        <Button className={cart.length < 1 ? 'btn btn-danger disabled rounded-3 mt-2' : 'btn btn-danger rounded-3 mt-2'}>Finalizar compra</Button>
                                    </div>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
} 