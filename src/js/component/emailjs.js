import React, { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/password.scss";

/* import './ContactUs.css'; */

const URLfront = "https://3000-chocolate-bat-k8s1td5r.ws-us16.gitpod.io";
const URLrecover = URLfront + "/solicitudrecuperacion" + "/hash";
console.log(URLrecover);

export const ContactUs = () => {
	/* const { store, actions } = useContext(Context); */

	//aqui va un IF que diga si el mail existe en el registro,
	//ejecutar la accion que va al endpoint que genera la URL con hash Y QUE SE EJECUTE
	//la URL como hash sera recibido aqui como parametro para ser parte del correo a enviar por emailJS
	//si no, que envie una alerta diciendo, usuario no existente

	function sendEmail(e) {
		e.preventDefault();

		/* const dataEmail = {
			to_name: "{email}",
			from_name: "Life Planner",
			message: "link de recuperacion password"
		};
 */
		/* actions.setRecuperarPassword(user); */

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
		<Form className="contact-form justify-content-md-center container mt-3" onSubmit={sendEmail}>
			{/* <Form.Control type="hidden" name="name" /> */}
			<h6>Ingresa tus datos para solicitar el link de recuperacion de contraseña.</h6>
			<Form.Label className="text">Name</Form.Label>
			<Form.Control type="text" name="user_name" />
			<Form.Label className="text">Email</Form.Label>
			<Form.Control type="email" name="user_email" />
			{/* <Form.Label>Message</Form.Label>
			<textarea name="message" /> */}
			<Form.Control className="mt-3" type="submit" value="Send" />
		</Form>
	);
};
