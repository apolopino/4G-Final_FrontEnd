import React, { useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Single } from "./views/single";
import { Dashboard } from "./views/dashboard";
import { Detalle } from "./views/detalle";
import { Desafios } from "./views/desafios";
import { Recuperacion } from "./views/recuperacion";
import { SolicitudRecuperacion } from "./views/solicitudrecuperacion";
import injectContext, { Context } from "./store/appContext";
import { NavbarModule } from "./component/navbar";
import { Footer } from "./component/footer";
import { Onboard } from "./component/onboard";

const Wrapper = ({ children }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	let location = useLocation();
	let { pathname } = { ...location };

	useEffect(
		() => {
			if (["/dashboard", "/detalle", "/desafio"].includes(pathname)) {
				/* return <div>{children}</div>; */
				!store.isLogged ? history.push("/") : null;
			} /* else {
				
			} */
		},
		[store.isLogged]
	);

	return <div>{children}</div>;
};

Wrapper.propTypes = {
	children: PropTypes.any
};

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Wrapper>
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
							<Route exact path="/desafio">
								<Desafios />
							</Route>
							<Route exact path="/recuperacion">
								<Recuperacion />
							</Route>

							<Route exact path="/solicitudrecuperacion/:hash">
								<SolicitudRecuperacion />
							</Route>

							<Route exact path="/desafios/:id">
								<Desafios />
							</Route>

							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</Wrapper>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
