import React, { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";

/* import './ContactUs.css'; */

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	//aqui va un IF que diga si el mail existe en el registro,
	//ejecutar la accion que va al endpoint que genera la URL con hash Y QUE SE EJECUTE
	//la URL como hash sera recibido aqui como parametro para ser parte del correo a enviar por emailJS
	//si no, que envie una alerta diciendo, usuario no existente

	function sendEmail(e) {
		e.preventDefault();

		const dataEmail = {
			to_name: "{email}",
			from_name: "Life Planner",
			message: "link de recuperacion password"
		};

		actions.setRecuperarPassword(user);

		emailjs.sendForm("service_c68bj7m", "template_k8dnosa", dataEmail, "user_vIs5peWJ64GxsW5fuLdX5").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	}

	return (
		<Form className="contact-form justify-content-md-center" onSubmit={sendEmail}>
			{/* <Form.Control type="hidden" name="contact_number" />
			<Form.Label>Name</Form.Label>
			<Form.Control type="text" name="user_name" /> */}
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" name="user_email" />
			{/* <Form.Label>Message</Form.Label>
			<textarea name="message" /> */}
			<Form.Control type="submit" value="Send" />
		</Form>
	);
};
