import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/landing.scss";

// pendiente: ACTIVAR LOS BOTONES DEL SITE PARA LLAMAR AL MODAL
export const Home = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false);
	const [emailReg, setEmailReg] = useState("");
	const [passwordReg1, setPasswordReg1] = useState("");
	const [passwordReg2, setPasswordReg2] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [registerShow, setRegisterShow] = useState(false);
	const handleRegisterClose = () => setRegisterShow(false);
	const handleRegisterShow = () => setRegisterShow(true);

	const history = useHistory();

	const handleRegister = e => {
		e.preventDefault();
		if (passwordReg1 === passwordReg2) {
			const user = {
				email: emailReg,
				password: passwordReg1,
				nombre: nombreReg
			};
			actions.setRegister(user, history);
			handleRegisterClose();
		} else {
			setPasswordMsg("Las password no son iguales");
		}
	};

	const modalsHome = () => {
		return (
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
		);
	};

	return (
		<div className="container-first center">
			<Jumbotron className="bg-muted landing ">
				<h1>Life Planner</h1>
				<p>
					Web enfocada a la optimización del estilo de vida y la pro-actividad rutinaria mediante la
					organización de tareas e integración de nuevos hábitos de distinta índole. <br />
					Organiza una rutina ajustada a las necesidades del usuario de acuerdo a su estilo de vida y
					preferencias alimenticias.
				</p>
				<p>
					<h3>Empieza Ahora</h3>
				</p>
			</Jumbotron>

			{/* esto tenemos que cambiarlo por 3 cards */}
			<div className="container-home">
				<div className="row prev-img text-center">
					<div className="col-sm-4">
						<img
							src="https://www.eatright.org/-/media/eatrightimages/food/planningandprep/cookingtipsandtrends/heart-healthy-cooking-tips-928732898.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
					<div className="col-sm-4">
						<img
							src="https://lifeonsocial.com/wp-content/uploads/2020/08/Boost-Immunity-At-home.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
					<div className="col-sm-4">
						<img
							src="https://static.onecms.io/wp-content/uploads/sites/24/2018/12/gettyimages-88583727-2000.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<p className="lead mt-5">
						<h3>Comienza Ahora</h3>
					</p>
				</div>
			</div>

			<Jumbotron className="bg-muted landing">
				<div className="row">
					<div className="col-sm-8">
						<h1>Comienza a mejorar tu dia</h1>
						<p>
							Herramienta útil para la vida diaria, incentivando buenos hábitos alimenticios y saludables
							practicas de valor físico y mental. Plataforma esta orientada a dispositivos mobiles y de
							ordenador, sencilla e intuitiva, haciendo de la aplicación apta para todas las edades.{" "}
							<br />
							Mediante una serie de tareas (desafíos), clasificados por niveles de dificultad, el usuario
							obtendrá diariamente una rutina de ejercicios, una receta recomendada y una lista de hábitos
							para integrar en su rutina.
						</p>
					</div>

					<div className="col-sm-4">
						<img
							src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};
