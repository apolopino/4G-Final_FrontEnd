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

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<iframe
						width="560"
						height="315"
						src="https://www.youtube-nocookie.com/embed/PvJ2l2yEftM"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>

			<div className="row">Row de titulo</div>

			<div className="row">Row de contenido</div>

			<div className="row">Row de fotos</div>
		</div>
	);
};
