import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

export const SolicitudRecuperacion = () => {
	const { store, actions } = useContext(Context);

	const handleRecover = e => {
		e.preventDefault();

		//aqui va una funcion que llame la accion que inyecta la nueva contraseña en el endpoint
		/* actions.setNuevaPassword(user); */
		//IF ambos campos de contraseña son iguales
		//esta pagina es la URL hasheada, en la cual actualmente no puedo acceder y no se pq
	};
	return (
		<Form className="contact-form justify-content-md-center container mt-3" onSubmit="">
			<Form.Control type="hidden" name="contact_number" />
			{/* <Form.Label>Name</Form.Label>
			<Form.Control type="text" name="user_name" /> */}
			<Form.Label className="text">Nueva contraseña</Form.Label>
			<Form.Control type="email" name="user_email" />
			<Form.Label className="text">Confirmar nueva contraseña</Form.Label>
			<Form.Control type="text" name="user_name" />
			{/* <Form.Label>Message</Form.Label>
        <textarea name="message" /> */}
			<Form.Control className="mt-3" type="submit" onClick={e => handleRecover(e)} />
		</Form>
	);
};
