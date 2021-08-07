import "../../styles/home.scss";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/landing.scss";

export const Landing = () => {
	return (
		<div className="container-page center">
			<nav className="logbar navbaravbar-dark bg-dark mb-3">
				<Link to="/">
					<button className="btn btn-outline-success" type="button">
						Home <span className="sr-only">(current)</span>
					</button>
				</Link>

				<li className="nav-item">
					<a className="nav-link" href="#">
						Login
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Sign Up
					</a>
				</li>
			</nav>

			<div className="jumbotron bg-muted">
				<h1 className="display-4">Life Planner</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p className="lead">
					<a className="btn btn-light btn-lg" href="#" role="button">
						Start Now
					</a>
				</p>

				<div className="prev-img text-center">
					<img src="..." className="rounded" alt="Responsive image" />
					<img src="..." className="rounded" alt="Responsive image" />
					<img src="..." className="rounded" alt="Responsive image" />
					<p className="lead">
						<a className="btn btn-light btn-lg" href="#" role="button">
							Comienza Ahora
						</a>
					</p>
				</div>
			</div>
			<div className="jumbotron bg-muted">
				<h1 className="display-4">Empieza a mejorar tu dia.</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<p className="lead" />
			</div>
		</div>
	);
};
