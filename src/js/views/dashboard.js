import React, { useState, useEffect, useContext } from "react";
import { Timeline } from "../component/timeline";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Onboard } from "../component/onboard";

export const Dashboard = () => {
	console.log("loading dashboard component");

	const [onboard, setOnboard] = useState(false);

	useEffect(() => {
		// ir a la base de datos y revisar si el usuario tiene desafios y actualizar el estado. Ahora solo lo seteo manualmente. Onboard = true es que no tiene desafios y hay que hacerle onboarding
		setOnboard(true);
	}, []);

	if (onboard === true) {
		return (
			<div className="container">
				<Onboard />
			</div>
		);
	} else {
		return (
			<div className="container">
				<Timeline />
			</div>
		);
	}
};
