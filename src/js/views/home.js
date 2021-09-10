import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useHistory } from "react-router-dom";
import { Jumbotron, Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/landing.scss";

export const Home = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	//Modal Hooks & controls
	const [errorShow, setErrorShow] = useState(false);
	const handleErrorClose = () => setErrorShow(false);
	const handleErrorShow = () => {
		setErrorShow(true);
	};

	const modalErrorClose = () => {
		actions.resetError();
		actions.resetStatus();
		handleErrorClose();
	};

	const showErrorModal = () => {
		console.log("show error modal triggered");
		handleErrorShow();
	};

	const errorModal = () => {
		return (
			<div>
				<Modal show={errorShow} onHide={modalErrorClose}>
					<Modal.Body>{store.error}</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={() => modalErrorClose()}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	};

	return (
		<div className="container-first center">
			<Jumbotron className="bg-muted landing ">
				<h1>Life Planner</h1>
				<p>
					Web enfocada a la optimización del estilo de vida y la pro-actividad rutinaria mediante la
					organización de tareas e integración de nuevos hábitos de distinta índole. <br />
					Organiza una rutina ajustada a las necesidades del usuario de acuerdo a su estilo de vida y
					preferencias alimenticias.
				</p>
			</Jumbotron>

			<div className="container-home">
				<div className="row prev-img text-center">
					<div className="col-sm-4">
						<img
							src="https://www.eatright.org/-/media/eatrightimages/food/planningandprep/cookingtipsandtrends/heart-healthy-cooking-tips-928732898.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
					<div className="col-sm-4">
						<img
							src="https://lifeonsocial.com/wp-content/uploads/2020/08/Boost-Immunity-At-home.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
					<div className="col-sm-4">
						<img
							src="https://static.onecms.io/wp-content/uploads/sites/24/2018/12/gettyimages-88583727-2000.jpg"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					<h2 className="lead mt-5">Registrate y comienza ahora</h2>
				</div>
			</div>

			<Jumbotron className="bg-muted landing">
				<div className="row">
					<div className="col-sm-8">
						<h1>Comienza a mejorar tu dia</h1>
						<p>
							Herramienta útil para la vida diaria, incentivando buenos hábitos alimenticios y saludables
							practicas de valor físico y mental. Plataforma esta orientada a dispositivos mobiles y de
							ordenador, sencilla e intuitiva, haciendo de la aplicación apta para todas las edades.{" "}
							<br />
							Mediante una serie de tareas (desafíos), clasificados por niveles de dificultad, el usuario
							obtendrá diariamente una rutina de ejercicios, una receta recomendada y una lista de hábitos
							para integrar en su rutina.
						</p>
					</div>

					<div className="col-sm-4">
						<img
							src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							className="rounded img-fluid"
							alt="Responsive image"
						/>
					</div>
				</div>
			</Jumbotron>
			{errorModal()}

			{errorShow === false
				? store.error !== ""
					? showErrorModal()
					: console.log("triggered FALSE in store error check")
				: ""}
		</div>
	);
};
