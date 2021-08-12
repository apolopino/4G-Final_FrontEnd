import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { ChallengeCard } from "./challengeCard";

export const Onboard = () => {
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
					{/* Primera card con data dummy - esta hay que pasarla al store (ver diagrama) */}
					<ChallengeCard
						image="https://i.stack.imgur.com/y9DpT.jpg"
						titulo="Desafio 1"
						content="Descripción del desafío"
						buttonText="Me animo!"
						url="/detalle"
					/>
					<ChallengeCard />
					<ChallengeCard />
					<ChallengeCard />
				</div>
			</div>
		</div>
	);
};
