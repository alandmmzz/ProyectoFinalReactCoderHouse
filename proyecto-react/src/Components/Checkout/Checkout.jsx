import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { ValidateCheckout } from '../../utils/Validations';

export default function Checkout() {
    const [validated, setValidated] = useState(false);

    // const [nameErrorMessage, setNameErrorMessage] = useState("Por favor introduce tu nombre.");

    const navigator = useNavigate();

    const nameInputRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        const order = { name: nameInputRef.current.value }
        if (!ValidateCheckout(order)) {
            console.log("El nombre debe tener entre 2 y 42");
        } else {
            console.log("Orden generada");
            navigator("/");
        }


        setValidated(true);
    };

    function generateOrder() {

    }

    return (
        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationName">
                        <Form.Label>Tu nombre:</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre" ref={nameInputRef} />
                        <Form.Control.Feedback type="invalid">
                            Por favor introduce tu nombre.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationNumber">
                        <Form.Label>Tu número de celular:</Form.Label>
                        <Form.Control required type="number" placeholder="Celular" />
                        <Form.Control.Feedback type="invalid">
                            Por favor introduce tu número de celular.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationEmail">
                        <Form.Label>Tu dirección de email:</Form.Label>
                        <Form.Control required type="email" placeholder="Email" />
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
                            Por favor introduce tu país.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCity">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor introduce tu ciudad.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationZipCode">
                        <Form.Label>Código Zip:</Form.Label>
                        <Form.Control type="number" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Por favor introduce un código postal.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check required label="Acepto los términos y condiciones."
                        feedback="Debes aceptar los términos y condiciones antes de continuar." feedbackType="invalid" />
                </Form.Group>
                <Button type="submit" onClick={generateOrder()} className="btn btn-dark position-relative rounded-pill mt-2">
                    <span>Finalizar compra</span>
                </Button>
            </Form>
        </div>
    );
}


