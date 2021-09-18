import { event } from "jquery";
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/to-do.scss";
import { Context } from "../store/appContext";
import { SpinnerSm } from "../component/spinner_sm.js";

export const Todo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let dia = parseInt(params.id);

	// Creo el estado de loading
	// const [loadingState, setLoadingState] = useState();

	var [title, setTitle] = useState("");
	const handleChange = event => {
		setTitle(event.target.value);
	};

	const deleteItems = idtask => {
		let id = JSON.parse(localStorage.getItem("user")).id;
		actions.borrarTarea(idtask, id);
	};

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user")).id;
		console.log("el user id es", user);
		// setLoadingState(true);
		actions.obtenerTareas(user);
		// console.log("el activeDia es", store.activeDia);
	}, []);

	// console.log("el todolist en store es", store.todoList);

	const handleKeyDown = event => {
		console.log("evento", event);
		if (event.key === "Enter") {
			let dia = parseInt(params.id);
			actions.nuevaTarea(title, dia);

			setTitle("");
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 to-do-container">
					<div className="card-to-do">
						<div className="card-body to-do-card-body">
							<input
								type="text"
								value={title}
								className="form-control add-task"
								placeholder="Puedes agregar una nueva tarea"
								onKeyDown={handleKeyDown}
								onChange={handleChange}
							/>
							<div className="todo-list">
								{store.loadingList === true ? <SpinnerSm /> : ""}
								{store.todoList
									.filter(element => element.dia === dia)
									.map((item, index) => {
										return (
											<div key={`row-${index}`} className="row todo-item align-items-center">
												<div key={`col-${index}-1`} className="col-10">
													<div key={index} className="">
														{item.done === true ? (
															<span className="text-dark">
																<s>{item.actividad}</s>
															</span>
														) : (
															<span>{item.actividad}</span>
														)}
													</div>
												</div>

												<div key={`col-${index}-2`} className="col-2">
													{item.done === true ? (
														<button className="btn btn-sm btn-secondary float-right">
															<i className="fas fa-check text-light" />
														</button>
													) : (
														<button
															className="btn btn-sm btn-light float-right"
															onClick={() => {
																deleteItems(item.id);
															}}>
															<i className="fa fa-check" />
														</button>
													)}
												</div>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
