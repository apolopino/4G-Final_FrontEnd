import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/landing.scss";

// pendiente: ACTIVAR LOS BOTONES DEL SITE PARA LLAMAR AL MODAL
export const Home = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="container-first center">
			<Jumbotron className="bg-muted landing ">
				<h1>Life Planner</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p>
					<Button variant="btn btn-light btn-lg">Empieza Ahora</Button>
				</p>
			</Jumbotron>

			{/* esto tenemos que cambiarlo por 3 cards */}
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
					<p className="lead mt-5">
						<a className="btn btn-light btn-lg" href="#" role="button">
							Comienza Ahora
						</a>
					</p>
				</div>
			</div>

			<Jumbotron className="bg-muted landing">
				<div className="row">
					<div className="col-sm-8">
						<h1>Comienza a mejorar tu dia</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
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
		</div>
	);
};
