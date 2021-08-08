import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/desafios.scss";

export const Desafios = () => {
	return (
		<div className="container-page justify-content-between">
			<nav className="slctbar navbaravbar-dark bg-dark mb-3">
				<Link to="/">
					<button className="btn btn-outline-success" type="button">
						Home <span className="sr-only">(current)</span>
					</button>
				</Link>

				<ul className="nav-item">
					<a className="nav-link" href="#">
						Logout
					</a>
				</ul>
				<ul className="nav-item text-center">
					<img src="..." className="img-fluid" alt="Responsive image" />
				</ul>
			</nav>

			<div className="jumbotron bg-muted text-center mx-auto">
				<img src="..." className="img-fluid" alt="Responsive image" />
				<p className="lead">
					<a className="btn btn-secondary btn-lg" href="#" role="button">
						1 Rutina de 30min cada 2 dias.
					</a>
					<a className="btn btn-secondary btn-lg" href="#" role="button">
						1 Receta sencilla para preparar al dia.
					</a>
					<a className="btn btn-secondary btn-lg" href="#" role="button">
						2 Actividades que ayudaran a organizar tu dia.
					</a>
				</p>

				<p className="lead text-center">
					<a className="btn btn-light btn-lg" href="#" role="button">
						Comenzar.
					</a>
				</p>
			</div>
		</div>
	);
};
