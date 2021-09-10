import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/password.scss";

export const Recuperacion = () => {
	//Store
	const { store, actions } = useContext(Context);
	const [respuesta, setRespuesta] = useState("");
	const [emailRec, setEmailRec] = useState("");

	const handleRecuperacion = e => {
		e.preventDefault();
		const user = {
			email: emailRec
		};
		actions.setRecuperarPassword(user);
		setRespuesta("Correo enviado");
	};

	return (
		<Form className="contact-form center col-xs-10 col-sm-8 col-md-4 mt-3">
			<Form.Label className="text">Email</Form.Label>
			<Form.Control
				value={emailRec}
				onChange={e => setEmailRec(e.target.value)}
				type="email"
				placeholder="Ingresa tu email"
			/>
			<Form.Control className="mt-3" type="submit" onClick={e => handleRecuperacion(e)} />
			<span style={{ color: "white" }}>{respuesta}</span>
		</Form>
	);
};
