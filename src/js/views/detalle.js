import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalle.scss";

export const Detalle = () => {
	const [detalle, SetDetalle] = useState(false);
	const { store, actions } = useContext(Context);
	const params = useParams();

	let tipoDetalle = params.tipo;

	let diaDetalle = parseInt(params.dia);

	let userExtras = JSON.parse(localStorage.getItem("user"))["extras del usuario"];

	let extraDia = userExtras
		.filter(element => element.tipo === tipoDetalle)
		.filter(element => element.dia === diaDetalle);
	console.log("el extra del dia es", extraDia);

	useEffect(() => {
		console.log("useEffect de detalle.js");
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 text-center">
					<iframe
						width="100%"
						height="350"
						src={extraDia[0].URLVideo}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-md-4 col-xs-12">
					<h1>{extraDia[0].actividad}</h1>
				</div>
				<div className="col-9">
					<hr />
				</div>
			</div>

			<div className="row">
				<div className="col-md-8">
					<p>{extraDia[0].descripcion}</p>
				</div>
			</div>

			<div className="row mt-5">
				<div className="col-md-3">
					<img className="img-fluid" src={extraDia[0].URLFoto} />
				</div>
				{/* {store.routineDetail.img.map((item, index) => {
						return (
							<div key={index} className="col-md-3">
								<img key={index} className="img-fluid" src={item} />
							</div>
						);
					})} */}
			</div>
		</div>
	);
};
