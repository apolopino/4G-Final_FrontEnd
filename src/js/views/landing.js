import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/landing.scss";

export const Landing = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container-page center">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Inicio</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto" />
					<Nav>
						<Nav.Link href="login" onClick={handleShow}>
							Registrarse
						</Nav.Link>
						<Nav.Link eventKey={2} href="signup">
							Ingresar
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Iniciar Sesion</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Correo electronico</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
						<Form.Text className="text-muted">Nunca compartiremos tus datos.</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Contraseña</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cerrar
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Guardar Cambios
					</Button>
				</Modal.Footer>
			</Modal>

			<Jumbotron bg-muted>
				<h1>Life Planner</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					<Button variant="btn btn-light btn-lg">Empieza Ahora</Button>
				</p>
			</Jumbotron>

			<div className="prev-img text-center">
				<img src="..." className="rounded" alt="Responsive image" />
				<img src="..." className="rounded" alt="Responsive image" />
				<img src="..." className="rounded" alt="Responsive image" />
				<p className="lead">
					<a className="btn btn-light btn-lg" href="#" role="button">
						Comienza Ahora
					</a>
				</p>
			</div>

			<Jumbotron bg-muted>
				<h1>Comienza a mejorar tu dia</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<img src="..." className="rounded float-right" alt="Responsive image" />
			</Jumbotron>
		</div>
	);
};
