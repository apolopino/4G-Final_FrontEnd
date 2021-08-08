import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ChallengeList = props => {
	return (
		<div className="col-md-3">
			<div className="card text-center h-100 bg-light">
				<img
					src={"image" in props ? props.image : "https://i.stack.imgur.com/y9DpT.jpg"}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{"titulo" in props ? props.titulo : "Challenge Title"}</h5>
					<p className="card-text">
						{"content" in props
							? props.content
							: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor sapien vitae congue volutpat."}
					</p>
					<Link to={typeof props.url == "undefined" ? "#" : props.url}>
						<button className="btn btn-primary mt-auto">
							{typeof props.buttonText === "undefined" ? "Select" : props.buttonText}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

ChallengeList.propTypes = {
	image: PropTypes.string,
	titulo: PropTypes.string,
	content: PropTypes.string,
	buttonText: PropTypes.string,
	url: PropTypes.string
};
