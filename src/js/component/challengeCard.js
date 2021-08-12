import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";
import "../../styles/challengeCard.scss";

export const ChallengeCard = props => {
	console.log("el props.redirect es ", props.url);
	const history = useHistory();

	const redirect = url => {
		console.log("la url recibid aes ", url);
		history.push(url);
	};

	return (
		<div className="col-md-3 text-dark">
			<div className="card card-no-border text-center h-100 bg-light">
				<img
					src={"image" in props ? props.image : "https://i.stack.imgur.com/y9DpT.jpg"}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body d-flex flex-column">
					<Link to={props.detalleDesafio}>
						<h5 className="card-title">{"titulo" in props ? props.titulo : "Challenge Title"}</h5>
					</Link>
					<p className="card-text">
						{"content" in props
							? props.content
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sapien vitae congue volutpat."}
					</p>
					{/* <Link to={typeof props.url == "undefined" ? "#" : props.url}> */}
					<Button variant="primary" className="mt-auto" onClick={() => redirect(props.url)}>
						{typeof props.buttonText === "undefined" ? "Select" : props.buttonText}
					</Button>
					{/* </Link> */}
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
	detalleDesafio: PropTypes.string
};
