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
		let object = store.desafiosList;
		let desafioId = parseInt(params.id);

		const detalleDesafio = object.find(findChallenge);

		actions.activeDesafio(detalleDesafio);

		function findChallenge(objeto) {
			return objeto.id === desafioId;
		}

		// console.log(object.find(findChallenge));
	}, []);

	//Hay que hacer que los siguientes elementos del desafio los saque del store:
	// Titulo
	// Descripcion
	// Feature 1, 2, y 3
	// foto
	// el objeto sacado del store tendrá la siguiente estructura:
	// [{
	// 	"descripcion": "Descripcion larga del desafio 2",
	// 	"dias del desafio": [],
	// 	"feat1": "feature 1",
	// 	"feat2": "feature 2",
	// 	"feat3": "feature 3",
	// 	"id": 2,
	// 	"nombreDesafio": "Desafio 2",
	// 	"photoURL": "http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/12/knowledge-10520101920.jpg"
	// }]
	// Falta: cambiar todos los elementos, ya los saca del store usando el elemento activeDesafio

	return (
		<div className="container-page">
			<row>
				<div
					className="jumbotron"
					style={{
						backgroundImage: `url(${store.activeDesafio.photoURL})`,
						backgroundPosition: "left",
						backgroundRepeat: "no-repeat",
						boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
						backgroundColor: "#FFF"
					}}>
					<h1 className="display-4">Hello, world!</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className="my-4" />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">
						Learn more
					</a>
				</div>

				<div className="col-sm-12 bg-light">
					<img src={store.activeDesafio.photoURL} className="img-fluid" alt="Responsive image" />
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
