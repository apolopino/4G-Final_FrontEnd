import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { Dashboard } from "./views/dashboard";
import { Detalle } from "./views/detalle";

import injectContext from "./store/appContext";

import { NavbarModule } from "./component/navbar";
import { Footer } from "./component/footer";
import { Onboard } from "./component/onboard";

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
							{/* Cambiar rutina por receta para acceder al store recetas */}
							<Detalle tipo="receta" />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
