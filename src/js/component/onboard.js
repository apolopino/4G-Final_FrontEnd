import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { ChallengeCard } from "./challengeCard";

export const Onboard = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		console.log("cargando actions/getdesafios");
		actions.listaDesafios();
	}, []);

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
					{/* {store.desafiosDisponibles.map((item, index) => { */}
					{store.desafiosList.map((item, index) => {
						return (
							<ChallengeCard
								key={index}
								image={item.image}
								titulo={item.nombreDesafio}
								content={item.descripcion}
								buttonText="Seleccionar"
								url={item.url}
								detalleDesafio={item.detalleDesafio}
								index={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
