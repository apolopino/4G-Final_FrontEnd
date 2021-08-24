import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import "../../styles/challengeCard.scss";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

export const ChallengeCard = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();

	const challengeID = props.url;
	console.log("props.id tiene ", challengeID);

	// const redirect = url => {
	// 	console.log("la url recibid aes ", url);
	// 	history.push(url);
	// };

	let string = props.content;
	const limit = 50;

	function getExcerpt(string, limit) {
		let shortText = string;
		shortText = shortText.substr(0, shortText.lastIndexOf(" ", limit)) + "...";
		return shortText;
	}

	return (
		<div className="col-lg-3 col-md-6 mb-3 text-dark">
			<div className="card card-no-border text-center h-100 bg-light">
				<img
					src={"image" in props ? props.image : "https://i.stack.imgur.com/y9DpT.jpg"}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body d-flex flex-column">
					<OverlayTrigger
						key={props.index}
						placement="bottom"
						overlay={<Tooltip id={`tooltip-a-${props.index}`}>Ver detalles</Tooltip>}>
						<Link to={props.detalleDesafio}>
							<h5 className="card-title">{"titulo" in props ? props.titulo : "Challenge Title"}</h5>
						</Link>
					</OverlayTrigger>

					<p className="card-text">
						{"content" in props
							? getExcerpt(string, limit)
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sapien vitae congue volutpat."}
					</p>

					<OverlayTrigger
						key={props.index}
						placement="top"
						overlay={<Tooltip id={`tooltip-${props.index}`}>Inscribir Desafío</Tooltip>}>
						<Button variant="primary" className="mt-auto" onClick={() => actions.setChallenge(challengeID)}>
							{typeof props.buttonText === "undefined" ? "Select" : props.buttonText}
						</Button>
					</OverlayTrigger>
				</div>
			</div>
		</div>
	);
};

ChallengeCard.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string,
	content: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string,
	detalleDesafio: PropTypes.string,
	index: PropTypes.number
};
