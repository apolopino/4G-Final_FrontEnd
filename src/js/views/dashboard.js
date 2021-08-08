import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Onboard } from "../component/onboard";
import { Challenge } from "../component/challenge";

export const Dashboard = () => {
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
				<Challenge />
			</div>
		);
	}
};
