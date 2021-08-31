import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const SolicitudRecuperacion = () => {
	//Store
	const { store, actions } = useContext(Context);
	const [emailRec, setEmailRec] = useState("");
	const [passwordRec1, setPasswordRec1] = useState("");
	const [passwordRec2, setPasswordRec2] = useState("");

	const history = useHistory();

	const handleRecover = e => {
		e.preventDefault();
		if (passwordRec1 === passwordRec2) {
			const user = {
				password: passwordRec1,
				email: emailRec
			};
			actions.setNuevaPassword(user, history);
		} else {
			setPasswordMsg("Las password no son iguales");
		}
	};

	//funcion que llame la accion para inyectar la nueva contraseña en el endpoint
	//IF ambos campos de contraseña son iguales
	//esta pagina es la URL hasheada
	//anteriormente no podia acceder a esta URL pq el hash q recibia desde el BACK tenia puntos y el navegador no lo reconocia

	return (
		<Form className="contact-form justify-content-md-center container mt-3" onSubmit="">
			{/* <Form.Control type="hidden" name="contact_number" />
			<Form.Label>Name</Form.Label>
			<Form.Control type="text" name="user_name" /> */}
			<Form.Label className="text">Email</Form.Label>
			<Form.Control
				value={emailRec}
				onChange={e => setEmailRec(e.target.value)}
				type="email"
				placeholder="Ingresa tu email"
			/>
			<Form.Label className="text">Nueva contraseña</Form.Label>
			<Form.Control
				value={passwordRec1}
				onChange={e => setPasswordRec1(e.target.value)}
				type="password"
				placeholder="Contraseña"
			/>
			<Form.Label className="text">Confirmar nueva contraseña</Form.Label>
			<Form.Control
				value={passwordRec2}
				onChange={e => setPasswordRec2(e.target.value)}
				type="password"
				placeholder="Repetir Contraseña"
			/>
			{/* <Form.Label>Message</Form.Label>
        <textarea name="message" /> */}
			<Form.Control className="mt-3" type="submit" onClick={e => handleRecover(e)} />
		</Form>
	);
};
