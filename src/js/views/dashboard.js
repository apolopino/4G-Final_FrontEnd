import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Timeline } from "../component/timeline";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { Onboard } from "../component/onboard";

export const Dashboard = () => {
	const { store, actions } = useContext(Context);

	const onboard = JSON.parse(localStorage.getItem("user")).desafio;
	console.log("el objeto en LOCALSTORAGE", onboard);

	const history = useHistory();
	useEffect(() => {
		// ir a la base de datos y revisar si el usuario tiene desafios y actualizar el estado. Ahora solo lo seteo manualmente. Onboard = true es que no tiene desafios y hay que hacerle onboarding
		// setOnboard(false);
		console.log("hola", store.isLogged);
		if (store.isLogged !== true) history.push("/");
	}, []);

	if (onboard === null) {
		return (
			<div className="container mb-5">
				<Onboard />
			</div>
		);
	} else {
		return (
			<div className="container mb-5">
				<Timeline />
			</div>
		);
	}
};
