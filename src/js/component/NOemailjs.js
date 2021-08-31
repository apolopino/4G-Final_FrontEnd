//este codigo no esta funcionando bien aun
import React, { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/password.scss";

/* import './ContactUs.css'; */

export const ContactUs = () => {
	// Store
	const { store, actions } = useContext(Context);

	/* useEffect(() => {
		actions.setRecuperarPassword(store.user);
	}, []); */

	async function getUrlRecover(email) {
		let resp = await fetch(store.URLBACKEND + "/solicitudrecuperacion", {
			method: "POST",
			body: JSON.stringify({ email: email }),
			headers: { "Content-type": "application/json; charset=UTF-8" }
			//AQUI RECIBO MI URL EN MI .THEN
			//GUARDAR EN EL STORE EN UNA VARIABLE EXCLUSIVA PARA ELLO, PARA PODER SACARLO COMO DATO Y ENVIARLO EN EL MAIL
		});
		let data = await resp.json();

		return data;
	}

	async function sendEmail(e) {
		e.preventDefault();
		let data = await getUrlRecover(e.target.user_email.value);

		/* .then(resp => resp.json())
		.then(data => {
			console.log("--data--", data); */
		/* setStore({ urlrecover: data }); */
		/* e.target.urlrecover.value = data.link;
		console.log(e.target, "target"); */
		console.log("--data--", data);
		/* }); */
		/* console.log(store.urlrecover, "!"); */

		/* const URLrecover = "123"; */
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
		<Form
			className="contact-form justify-content-md-center container mt-3"
			onSubmit={async evento => {
				await sendEmail(evento);
			}}>
			<h6>Ingresa tus datos para solicitar el link de recuperacion de contraseñ456a.</h6>
			<Form.Label className="text">Name</Form.Label>
			<Form.Control type="text" name="user_name" />
			<Form.Label className="text">Email</Form.Label>
			<Form.Control type="email" name="user_email" />
			<Form.Control type="hidden" name="urlrecover" value="" />
			<Form.Control className="mt-3" type="submit" value="Send" />
		</Form>
	);
};