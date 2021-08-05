import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Dashboard = () => {
	useEffect(() => {
		// ir a la base de datos y revisar si el usuario tiene desafios, setear una variable
		let withChallenge = true;
		// Abajo: auxiliar para testing
		// let withoutChallenge = true;
	}, []);

	if (withChallenge === true) {
		return <div>COntenido dashboard con challenge</div>;
	} else {
		return <div>Onboard</div>;
	}
};
