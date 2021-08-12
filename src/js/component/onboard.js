import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { ChallengeCard } from "./challengeCard";

export const Onboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-light">
			<div className="row justify-content-center">
				<h2>Bienvenido!</h2>
			</div>
			<div className="row justify-content-center">
				<h3>Para comenzar, elige un desafío</h3>
			</div>
			<div className="container text-light">
				<div className="row p-5">
					{store.desafiosDisponibles.map((item, index) => {
						return (
							<ChallengeCard
								key={index}
								image={item.image}
								titulo={item.titulo}
								content={item.content}
								buttonText={item.buttonText}
								url={item.url}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
