import React from "react";
import "../../styles/timeline.scss";
import { Link } from "react-router-dom";

export const Timeline = () => {
	console.log("loading Timeline component");

	return (
		<div className="timeline-wrapper">
			<div className="timeline">
				<div className="timeline-container primero">
					<div className="timeline-icon">
						<i className="far fa-grin-wink" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 1</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container segundo">
					<div className="timeline-icon">
						<i className="far fa-grin-hearts" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 2</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container tercero">
					<div className="timeline-icon">
						<i className="far fa-grin-tears" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 3</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container cuarto">
					<div className="timeline-icon">
						<i className="far fa-grimace" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 4</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container quinto">
					<div className="timeline-icon">
						<i className="far fa-grin-beam-sweat" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 5</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container sexto">
					<div className="timeline-icon">
						<i className="far fa-grin" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 6</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
				<div className="timeline-container final">
					<div className="timeline-icon">
						<i className="far fa-grin-wink" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">
							<Link to="/to-do">
								<button className="badge">Día 7</button>
							</Link>
						</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
							earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
							Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
						</p>
						<p className="timeline-subtitle">Duración</p>
					</div>
				</div>
			</div>
		</div>
	);
};
