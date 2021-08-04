import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<div className="card card-white">
					<div className="card-body">
						<form action="">
							<input
								type="text"
								className="form-control add-task"
								placeholder="Puedes agregar una nueva tarea"
							/>
						</form>
						<ul className="nav nav-pills todo-nav">
							<li role="presentation" className="nav-item all-task active">
								<a href="#" className="nav-link">
									Tareas
								</a>
							</li>
							<li role="presentation" className="nav-item active-task">
								<a href="#" className="nav-link">
									Por hacer
								</a>
							</li>
							<li role="presentation" className="nav-item completed-task">
								<a href="#" className="nav-link">
									Completados
								</a>
							</li>
						</ul>
						<div className="todo-list">
							<div className="todo-item1">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>Toma 8 vasos de agua</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
							<div className="todo-item2">
								<div className="checker">
									<input type="checkbox" />
								</div>
								<span>Medita 30min</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>

							<div className="todo-item3">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>Realiza una rutina de: Piernas, abdomen y espalda</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
							<div className="todo-item4">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>Tomar una ducha de agua fría</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
							<div className="todo-item5">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>No comer nada despues de las 8pm</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
							<div className="todo-item6">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>Leer un libro durante 2 horas</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
							<div className="todo-item7">
								<div className="checker">
									{" "}
									<input type="checkbox" />{" "}
								</div>
								<span>Mantente alejado de los dispositivos electronicos despues de las 10pm</span>
								<a href="" className="float-right remove-todo-item">
									<i className="icon-close" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
