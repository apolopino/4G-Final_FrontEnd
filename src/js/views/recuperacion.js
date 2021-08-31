import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Recuperacion = () => {
	//Store
	const { store, actions } = useContext(Context);
	const [emailRec, setEmailRec] = useState("");

	const handleRecuperacion = e => {
		e.preventDefault();
		const user = {
			email: emailRec
		};
		actions.setRecuperarPassword(user);
	};

	return (
		<Form className="contact-form justify-content-md-center container mt-3">
			<Form.Label className="text">Email</Form.Label>
			<Form.Control
				value={emailRec}
				onChange={e => setEmailRec(e.target.value)}
				type="email"
				placeholder="Ingresa tu email"
			/>
			<Form.Control className="mt-3" type="submit" onClick={e => handleRecuperacion(e)} />
		</Form>
	);
};
