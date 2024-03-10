import { useContext, useRef, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from "react-router-dom";

import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Swal from 'sweetalert2'

import "./Checkout.css";

export default function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const [validated, setValidated] = useState(false);

    const navigator = useNavigate();

    const nameInputRef = useRef("");
    const phoneInputRef = useRef("");
    const emailInputRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const order = {
                buyer: {
                    name: nameInputRef.current.value,
                    phone: phoneInputRef.current.value,
                    email: emailInputRef.current.value
                },
                items: cart.map(product => ({
                    id: product.id,
                    title: product.title,
                    quantity: product.quantity,
                    price: product.price
                })),
                date: serverTimestamp(),
                total: cart.reduce((total, product) => total + (product.price * product.quantity), 0)
            }
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order).then(({ id }) => Swal.fire({
                title: "Gracias por elegirnos!",
                text: `Tu ID de compra es: ${id}`,
                icon: "success"
            }));
            clearCart();
            navigator("/");
        }
        setValidated(true);
    };

    return (
        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationName">
                        <Form.Label>Tu nombre:</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre" ref={nameInputRef} pattern="^.{2,42}$" />
                        <Form.Control.Feedback type="invalid">
                            Introduce un nombre válido.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationNumber">
                        <Form.Label>Tu número de celular:</Form.Label>
                        <Form.Control required type="number" placeholder="Celular" ref={phoneInputRef} pattern="^\d{10}$" />
                        <Form.Control.Feedback type="invalid">
                            Introduce un número válido (10 dígitos).
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationEmail">
                        <Form.Label>Tu dirección de email:</Form.Label>
                        <Form.Control required type="email" placeholder="Email" ref={emailInputRef} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
                        <Form.Control.Feedback type="invalid">
                            El mail ingresado no es correcto.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCountry">
                        <Form.Label>País:</Form.Label>
                        <Form.Control type="text" placeholder="País" required />
                        <Form.Control.Feedback type="invalid">
                            Introduce tu país.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad" required />
                        <Form.Control.Feedback type="invalid">
                            Introduce tu ciudad.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationZipCode">
                        <Form.Label>Código Zip:</Form.Label>
                        <Form.Control type="number" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Introduce un código postal.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check required label="Acepto los términos y condiciones."
                        feedback="Debes aceptar los términos y condiciones antes de continuar." feedbackType="invalid" />
                </Form.Group>
                <Button type="submit" className="btn btn-dark position-relative rounded-pill mt-2">
                    <span>Finalizar compra</span>
                </Button>
            </Form>
        </div>
    );
}


