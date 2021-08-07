import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalle = () => {
	const [detalle, SetDetalle] = useState(false);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// ir a la base de datos a consultar el detale del usuario
		//Reemplazar true por el objeto con el detalle
		SetDetalle(true);
	}, []);

	return <div>Vista detalle</div>;
};
