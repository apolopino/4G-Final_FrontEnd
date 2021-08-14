import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalle.scss";

export const Detalle = props => {
	const [detalle, SetDetalle] = useState(false);
	const { store, actions } = useContext(Context);

	//Debug: reviso lo que tiene el store en routineDetail.video
	// console.log("el rutineDetail.video en store es ", store.routineDetail.video);

	//Debug: lo pruebo con props
	// console.log("el nombre es ", store[+props.tipo + [nombre]]);

	console.log(
		"se ha accedido al detalle de",
		props.tipo,
		". Para cambiar el tipo (rutina/receta) hacerlo en el layout (dev)"
	);

	useEffect(() => {
		// ir a la base de datos a consultar el detale del usuario
		//Reemplazar true por el objeto con el detalle
		SetDetalle(true);
	}, []);

	if (props.tipo === "rutina") {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<iframe
							width="100%"
							height="350"
							src={store.routineDetail.video}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 col-xs-12">
						<h1>{store.routineDetail.nombre}</h1>
					</div>
					<div className="col-9">
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-md-8">
						<p>{store.routineDetail.detalle}</p>
					</div>
				</div>

				<div className="row mt-5">
					{store.routineDetail.img.map((item, index) => {
						return (
							<div key={index} className="col-md-3">
								<img key={index} className="img-fluid" src={item} />
							</div>
						);
					})}
				</div>
			</div>
		);
	} else if (props.tipo === "receta") {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<iframe
							width="100%"
							height="350"
							src={store.recipeDetail.video}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-md-4 col-xs-12">
						<h1>{store.recipeDetail.nombre}</h1>
					</div>
					<div className="col-9">
						<hr />
					</div>
				</div>

				<div className="row">
					<div className="col-md-8">
						<p>{store.recipeDetail.detalle}</p>
					</div>
				</div>

				<div className="row mt-5">
					{store.recipeDetail.img.map((item, index) => {
						return (
							<div key={index} className="col-md-3">
								<img key={index} className="img-fluid" src={item} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

Detalle.propTypes = {
	tipo: PropTypes.string
};
