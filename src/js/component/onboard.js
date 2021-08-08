import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import { ChallengeList } from "./challengeList";

export const Onboard = () => {
	return (
		<div className="bg-light text-dark">
			<div className="row justify-content-center">
				<h2>Bienvenido!</h2>
			</div>
			<div className="row justify-content-center">
				<h3>Para comenzar, elige un desafío</h3>
			</div>
			<div className="container bg-light text-dark">
				<div className="row p-5">
					<ChallengeList
						image="https://i.stack.imgur.com/y9DpT.jpg"
						titulo="Desafio 1"
						content="Descripción del desafío"
						buttonText="Me animo!"
						url="#"
					/>
					<ChallengeList />
					<ChallengeList />
					<ChallengeList />
				</div>
			</div>
		</div>
	);
};
