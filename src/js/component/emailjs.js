import React, { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/password.scss";

/* import './ContactUs.css'; */

export const ContactUs = () => {
	const { store, actions } = useContext(Context);

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_c68bj7m", "template_k8dnosa", e.target, "user_vIs5peWJ64GxsW5fuLdX5").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	return (
		<Form className="contact-form center col-xs-10 col-sm-8 col-md-4 mt-3" onSubmit={sendEmail}>
			{/* <Form.Control type="hidden" name="name" /> */}
			<h6>Formulario de contacto, sugerencias y felicitaciones</h6>
			<Form.Label className="text">Name</Form.Label>
			<Form.Control type="text" name="user_name" />
			<Form.Label className="text">Email</Form.Label>
			<Form.Control type="email" name="user_email" />
			<Form.Label className="text">Dejanos tu mensaje aca</Form.Label>
			<textarea className="container box" name="message" rows="5" />
			<Form.Control className="mt-3" type="submit" value="Send" />
		</Form>
	);
};
