import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarModule = () => {
	// Store
	const { store, actions } = useContext(Context);

	// Modal controls
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [registerShow, setRegisterShow] = useState(false);
	const handleRegisterClose = () => setRegisterShow(false);
	const handleRegisterShow = () => setRegisterShow(true);

	const history = useHistory();

	const handleLogin = () => {
		handleClose();
		actions.setShowOnboard(false);
		history.push("/dashboard");
	};

	const handleRegister = () => {
		handleRegisterClose();
		actions.setShowOnboard(true);
		history.push("/dashboard");
	};

	const loginLinks = () => {
		// esto se muestra si es usuario debe loguearse. Al hacerlo, poner un action que cambie el estado de isLogged en el store
		return (
			<div className="ml-auto pr-5">
				<Nav>
					<Nav.Link onClick={handleRegisterShow}>Register</Nav.Link>
					<Nav.Link className="mr-sm-2" onClick={handleShow}>
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

	const modals = () => {
		return (
			<div>
				{/* Login modal */}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Iniciar sesion</Modal.Title>
					</Modal.Header>
					<Form>
						<Modal.Body>
							<Form.Group controlId="loginEmail">
								<Form.Label>Correo electronico</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
								<Form.Text className="text-muted">Nunca compartiremos tus datos.</Form.Text>
							</Form.Group>

							<Form.Group controlId="loginPassword">
								<Form.Label>Contraseña</Form.Label>
								<Form.Control type="password" placeholder="Password" />
							</Form.Group>
						</Modal.Body>

						<Modal.Footer className="justify-content-md-center">
							<Button variant="primary" onClick={handleLogin}>
								Login
							</Button>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>

				{/* REGISTER MODAL */}
				<Modal show={registerShow} onHide={handleRegisterClose}>
					<Modal.Header closeButton>
						<Modal.Title>Registrarse</Modal.Title>
					</Modal.Header>
					<Form>
						<Modal.Body>
							<Form.Group className="mb-3" controlId="registerName">
								<Form.Label>Nombre</Form.Label>
								<Form.Control type="text" placeholder="First name" />
							</Form.Group>

							<Form.Group controlId="registerEmail">
								<Form.Label>Correo electronico</Form.Label>
								<Form.Control type="email" placeholder="Enter email" />
							</Form.Group>

							<Form.Group controlId="registerPass">
								<Form.Label>Contraseña</Form.Label>
								<Form.Control type="password" placeholder="Contraseña" />
							</Form.Group>

							<Form.Group controlId="registerPassValidate">
								<Form.Control type="password" placeholder="Repetir Contraseña" />
							</Form.Group>
						</Modal.Body>

						<Modal.Footer className="justify-content-md-center">
							<Button variant="primary" onClick={handleRegister}>
								Registrar
							</Button>
							<Button variant="secondary" onClick={handleRegisterClose}>
								Cancel
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>
			</div>
		);
	};

	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand className="pl-5" href="#home">
					Life Planner
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					{/* Muestro cosas diferentes en caso de estar logueado */}
					{store.isLogged === true ? logoutLink() : loginLinks()}
				</Navbar.Collapse>
			</Navbar>

			{/* Carga los modals en caso que no este logueado */}
			{store.isLogged === true ? "" : modals()}
		</div>
	);
};
