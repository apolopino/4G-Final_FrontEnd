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
					src={
						"image" in props
							? props.image
							: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/whm012220lavenderset-015-1583933144.jpeg?crop=1xw:1xh;center,top&resize=640:*"
					}
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
					<Link to={props.detalleDesafio} className="mt-auto">
						<Button variant="primary">
							{typeof props.buttonText === "undefined" ? "Select" : props.buttonText}
						</Button>
					</Link>
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
