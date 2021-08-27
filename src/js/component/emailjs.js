import React from "react";
import emailjs from "emailjs-com";
import { Form } from "react-bootstrap";

/* import './ContactUs.css'; */

export const ContactUs = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID").then(
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
			<Form.Control type="hidden" name="contact_number" />
			<Form.Label>Name</Form.Label>
			<Form.Control type="text" name="user_name" />
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" name="user_email" />
			<Form.Label>Message</Form.Label>
			<textarea name="message" />
			<Form.Control type="submit" value="Send" />
		</Form>
	);
};
