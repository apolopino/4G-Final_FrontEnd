import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import img1 from "/workspace/4G-Final_FrontEnd/src/img/Desafio.png";
import { Container, Modal } from "react-bootstrap";
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

	//Modal hooks
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		let object = store.desafiosList;
		let desafioId = parseInt(params.id);

		const detalleDesafio = object.find(findChallenge);

		actions.activeDesafio(detalleDesafio);

		function findChallenge(objeto) {
			return objeto.id === desafioId;
		}

		console.log("el desafio activo es:", store.activeDesafio);
	}, []);

	// const inscribeDesafio = () => {
	// 	actions.setChallenge(history)
	// }
	console.log("handle show", show);

	const modal = () => {
		return (
			<div>
				{/* <Button variant="primary" onClick={handleShow}>
					Launch demo modal
				</Button> */}

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Inscribir desafío</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						Estás a punto de inscribir el desafío {store.activeDesafio.nombreDesafio}. Estas seguro?
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cancelar
						</Button>
						<Button variant="primary" onClick={() => actions.setChallenge(history)}>
							Inscribir
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	};

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
				<Button variant="primary" className="mt-auto" onClick={handleShow}>
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
			{modal()}
		</div>
	);
};
