import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import { ContactUs } from "../component/emailjs";

export const Contact = () => {
	return (
		<div className="container">
			<ContactUs />
		</div>
	);
};
