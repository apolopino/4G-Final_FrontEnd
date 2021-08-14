import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarModule = () => {
	// Modal controls
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Store
	const { store, actions } = useContext(Context);

	const loginLinks = () => {
		// esto se muestra si es usuario debe loguearse. Al hacerlo, poner un action que cambie el estado de isLogged en el store
		return (
			<div className="ml-auto pr-5">
				<Nav>
					<Nav.Link href="#">Register</Nav.Link>
					<Nav.Link className="mr-sm-2" href="#link">
						Login
					</Nav.Link>
				</Nav>
			</div>
		);
	};

	const logoutLink = () => {
		// esto se muestra si el usuario está logueado. Al hacer logout, poner un action que cambie el estado de isLogged en el store
		return (
			<div className="ml-auto pr-5">
				<Nav>
					<Nav.Link href="#">Logout</Nav.Link>
				</Nav>
			</div>
		);
	};

	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Navbar bg="light" expand="lg">
				<Navbar.Brand className="pl-5" href="#home">
					React-Bootstrap
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* Muestro cosas diferentes en caso de estar logueado */}
					{store.isLogged === true ? logoutLink() : loginLinks()}
				</Navbar.Collapse>
			</Navbar>

			{/* Este es el modal para hacer login. No deberia ni cargarse en el site si store.isLogged = true */}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Iniciar sesion</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you&aposre reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
