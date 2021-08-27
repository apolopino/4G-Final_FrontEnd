import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { Dashboard } from "./views/dashboard";
import { Detalle } from "./views/detalle";
import { Desafios } from "./views/desafios";
import injectContext from "./store/appContext";

import { NavbarModule } from "./component/navbar";
import { Footer } from "./component/footer";
import { Onboard } from "./component/onboard";
import { Todo } from "./views/to-do";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarModule />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/dashboard">
							<Dashboard />
						</Route>
						<Route exact path="/detalle">
							<Detalle tipo="rutina" />
						</Route>
						{/* <Route exact path="/desafio">
							<Desafios />
						</Route> */}
						<Route exact path="/desafios/:id">
							<Desafios />
						</Route>
						<Route exact path="/to-do">
							<Todo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
