import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Modal, Button, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Spinner } from "../component/spinner";

export const NavbarModule = () => {
	// Store
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailReg, setEmailReg] = useState("");
	const [passwordReg1, setPasswordReg1] = useState("");
	const [passwordReg2, setPasswordReg2] = useState("");
	const [passwordMsg, setPasswordMsg] = useState("");
	const [nombreReg, setNombreReg] = useState("");

	// Modal controls
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [registerShow, setRegisterShow] = useState(false);
	const handleRegisterClose = () => setRegisterShow(false);
	const handleRegisterShow = () => setRegisterShow(true);

	// History hook
	const history = useHistory();

	// Logging in state hook
	const [loggedInState, setLoggedInState] = useState();

	//Registering state hook
	const [registerState, setRegisterState] = useState();

	//LOGIN+REGISTER+LOGOUT
	const handleLogin = e => {
		e.preventDefault();
		setLoggedInState("logging in");

		const user = {
			email: email,
			password: password
		};

		actions.setLogin(user, history);
		handleClose();
	};

	const handleRegister = e => {
		e.preventDefault();
		setRegisterState("registering");
		if (passwordReg1 === passwordReg2) {
			const user = {
				email: emailReg,
				password: passwordReg1,
				nombre: nombreReg
			};
			actions.setRegister(user, history);
			handleRegisterClose();
			actions.setShowOnboard(true);
		} else {
			setRegisterState("");
			setPasswordMsg("Las password no son iguales");
		}
	};

	const handleLogout = e => {
		e.preventDefault();
		console.log(1);
		actions.setLogout(history);
		setLoggedInState("");
		setRegisterState("");
	};

	useEffect(() => {
		actions.getToken();
	}, []);

	const loginLinks = () => {
		// esto se muestra si es usuario debe loguearse. Al hacerlo, poner un action que cambie el estado de isLogged en el store

		return (
			<div className="ml-auto pr-5">
				<Nav>
					<Nav.Link href="/contact">Contacto</Nav.Link>
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
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/contact">Contacto</Nav.Link>
					<Nav.Link href="/dashboard">Dashboard</Nav.Link>
					<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
				</Nav>
			</div>
		);
	};

	const modals = () => {
		return (
			<div>
				{/* Aca debiese llamar a un modal de error luego del Login Failed ?  */}
				{loggedInState === "logging in" ? store.error === "" ? "" : <Spinner /> : ""}
				{console.log("loggedInState:", loggedInState, "store.error:", store.error)}
				{/* Login modal */}
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Iniciar sesion</Modal.Title>
					</Modal.Header>
					<Form>
						<Modal.Body>
							<Form.Group controlId="loginEmail">
								<Form.Label>Correo electronico</Form.Label>
								<Form.Control
									value={email}
									onChange={e => setEmail(e.target.value)}
									type="email"
									placeholder="Enter email"
								/>
								<Form.Text className="text-muted">Nunca compartiremos tus datos.</Form.Text>
							</Form.Group>

							<Form.Group controlId="loginPassword">
								<Form.Label>Contraseña</Form.Label>
								<Form.Control
									value={password}
									onChange={e => setPassword(e.target.value)}
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
							<Link to="/recuperacion">¿Olvidaste tu contraseña?</Link>
						</Modal.Body>

						<Modal.Footer className="justify-content-md-center">
							<Button type="submit" variant="primary" onClick={e => handleLogin(e)}>
								Login
							</Button>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
						</Modal.Footer>
					</Form>
				</Modal>

				{/* REGISTER MODAL */}
				{registerState === "registering" ? <Spinner /> : ""}
				<Modal show={registerShow} onHide={handleRegisterClose}>
					<Modal.Header closeButton>
						<Modal.Title>Registrarse</Modal.Title>
					</Modal.Header>
					<Form>
						<Modal.Body>
							<Form.Group className="mb-3" controlId="registerName">
								<Form.Label>Nombre</Form.Label>
								<Form.Control
									value={nombreReg}
									onChange={e => setNombreReg(e.target.value)}
									type="text"
									placeholder="Nombre"
								/>
							</Form.Group>

							<Form.Group controlId="registerEmail">
								<Form.Label>Correo electronico</Form.Label>
								<Form.Control
									value={emailReg}
									onChange={e => setEmailReg(e.target.value)}
									type="email"
									placeholder="Ingresa tu email"
								/>
							</Form.Group>

							<Form.Group controlId="registerPass">
								<Form.Label>Contraseña</Form.Label>
								<Form.Control
									value={passwordReg1}
									onChange={e => setPasswordReg1(e.target.value)}
									type="password"
									placeholder="Contraseña"
								/>
							</Form.Group>

							<Form.Group controlId="registerPassValidate">
								<Form.Control
									value={passwordReg2}
									onChange={e => setPasswordReg2(e.target.value)}
									type="password"
									placeholder="Repetir Contraseña"
								/>
							</Form.Group>
							<span style={{ color: "red" }}>{passwordMsg}</span>
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
				<Navbar.Brand className="pl-5" href="/">
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
