import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "/workspace/4G-Final_FrontEnd/src/img/Desafio.png";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import "../../styles/desafios.scss";

export const Desafios = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const history = useHistory();

	let url = {};

	useEffect(() => {
		let object = store.desafiosList;
		let desafioId = parseInt(params.id);

		const detalleDesafio = object.find(findChallenge);

		actions.activeDesafio(detalleDesafio);

		function findChallenge(objeto) {
			return objeto.id === desafioId;
		}
	}, []);

	// console.log("duracion ", store.activeDesafio.duracion);
	// console.log("objeto activeDesafio:", store.activeDesafio);

	return (
		<div className="container-page">
			<div
				className="jumbotron text-light"
				style={{
					backgroundImage: `url(${store.activeDesafio.photoURL})`,
					backgroundPosition: "left",
					backgroundRepeat: "no-repeat",
					boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.5)",
					backgroundColor: "#FFF",
					backgroundSize: "cover"
				}}>
				<h1 className="display-4">{store.activeDesafio.nombreDesafio}</h1>
				<p className="lead">{store.activeDesafio.descripcion}</p>
				<hr className="my-4" />
				<p>Este desafío dura {store.activeDesafio.duracion} días</p>
				<Button variant="primary" className="mt-auto" onClick={() => actions.setChallenge(history)}>
					Inscribir desafío
				</Button>
			</div>

			<div className="jumbotron jumbotron-desafios bg-muted">
				<div className="container">
					<h1 className="col text-light float-left mb-">Con este desafio:</h1>

					<div className="row">
						<div className="col-sm-4">
							<div className="card bg-dark text-light" style={{ width: "18rem" }}>
								<div className="card-body">
									<p className="card-text">{store.activeDesafio.feat1}</p>
								</div>
							</div>
						</div>

						<div className="col-sm-4">
							<div className="card bg-dark text-light" style={{ width: "18rem" }}>
								<div className="card-body">
									<p className="card-text">{store.activeDesafio.feat2}</p>
								</div>
							</div>
						</div>

						<div className="col-sm-4">
							<div className="card bg-dark text-light" style={{ width: "18rem" }}>
								<div className="card-body">
									<p className="card-text">{store.activeDesafio.feat3}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
