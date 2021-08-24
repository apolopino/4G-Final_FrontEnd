import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "/workspace/4G-Final_FrontEnd/src/img/Desafio.png";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import "../../styles/desafios.scss";

export const Desafios = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let url = {};

	useEffect(() => {
		// estoy obteniendo el segundo elemento de la list, no es el elemento con el desafio if = params.id
		// params.id saca el id de la url que le di en routes
		let objeto = store.desafiosList[params.id];
		console.log("chequeo el objeto", objeto);
	}, []);

	return (
		<div className="container-page">
			<row>
				<div className="col-sm-12 bg-light">
					<img src={img1} className="img-fluid" alt="Responsive image" />
				</div>
			</row>

			<row>
				<div className="jumbotron jumbotron-desafios bg-muted">
					<div className="container">
						<h1 className="col text-light float-left mb-">Con este desafio:</h1>

						<div className="container">
							<div className="row">
								<div className="col mx-auto fas fa-dumbbell fa-lg p-sm-0 p-md-0 p-lg-0 p-x-0" />
								<div className="col mx-auto fa fa-cutlery fa-lg p-sm-0 p-md-0 p-lg-0 p-x-0" />
								<div className="col mx-auto fas fa-th-list fa-lg p-sm-0 p-md-0 p-lg-0 p-x-0" />
							</div>
						</div>

						<div className="container align-items-center">
							<div className="row align-items-center justify-content-between">
								<div className="col">
									Ordena tu rutina de ejercicios ocacionales Lorem ipsum dolor sit amet
								</div>
								<div className="col">
									Prepara comidas saludables que te permitan Lorem ipsum dolor sit amet
								</div>
								<div className="col">Organiza tu rutina diaria Lorem ipsum dolor sit amet</div>
							</div>
						</div>

						<div className="container align-items-center">
							<div className="row align-items-center justify-content-between">
								<button
									type="button"
									className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0"
									aria-label="Middle Align">
									<span className="" aria-hidden="true" />1 Rutina de 30min cada 2 dias.
								</button>
								<button
									type="button"
									className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0"
									aria-label="Middle Align">
									<span className="" aria-hidden="true" />1 Receta sencilla para preparar al dia.
									dias.
								</button>
								<button
									type="button"
									className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0"
									aria-label="Middle Align">
									<span className="" aria-hidden="true" />2 Actividades que ayudaran a organizar tu
									dia.
								</button>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4">
								<ul>
									<li>Recibe un resumen diario de tu avance.</li>
									<li>Recibe notificaciones diarias de tus actividades para el dia.</li>
									<li>Trackea tu progreso diario.</li>
								</ul>
							</div>
						</div>

						<p className="row">
							<div className="col-md-6 offset-md-5">
								<a className="btn btn-light btn-lg" href="#" role="button">
									Comenzar
								</a>
							</div>
						</p>
					</div>
				</div>
			</row>
		</div>
	);
};
