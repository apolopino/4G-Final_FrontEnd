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
	return (
		<div className="container-page">
			<nav className="slctbar navbaravbar-dark bg-dark mb-3">
				<Link to="/">
					<button className="btn btn-outline-success" type="button">
						Home <span className="sr-only">(current)</span>
					</button>
				</Link>

				<ul className="nav-item float-right">
					<a className="nav-link" href="#">
						Logout
					</a>
				</ul>
				<ul className="nav-item text-center">
					<img src={img1} className="img-fluid" alt="Responsive image" />
				</ul>
			</nav>

			<div className="jumbotron bg-muted">
				<div className="container">
					<h1 className="row text-light float-left mb-">Con este desafio:</h1>

					<div className="row container spheres justify-content-between">
						<div className="circ" />
						<div className="circ" />
						<div className="circ" />
					</div>

					<div className="container align-items-center justify-content-between">
						<div className="row align-items-center">
							<div className="col">
								Ordena tu rutina de ejercicios ocacionales Lorem ipsum dolor sit amet
							</div>
							<div className="col">
								Prepara comidas saludables que te permitan Lorem ipsum dolor sit amet
							</div>
							<div className="col">Organiza tu rutina diaria Lorem ipsum dolor sit amet</div>
						</div>
					</div>

					<p className="row lead d-flex justify-content-between">
						<a className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0" href="#" role="button">
							1 Rutina de 30min cada 2 dias.
						</a>
						<a className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0" href="#" role="button">
							1 Receta sencilla para preparar al dia.
						</a>
						<a className="btn btn-secondary btn-lg p-sm-0 p-md-0 p-lg-0 p-x-0" href="#" role="button">
							2 Actividades que ayudaran a organizar tu dia.
						</a>
					</p>

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
								Comenzar.
							</a>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
