import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/to-do.scss";
import { Context } from "../store/appContext";

export const Todo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let dia = parseInt(params.id);

	var [title, setTitle] = useState("");
	const handleChange = event => {
		setTitle(event.target.value);
	};

	const deleteItems = idtask => {
		let id = JSON.parse(localStorage.getItem("user")).id;
		actions.borrarTarea(idtask, id);
	};

	const handleChangeCheckbox = event => {
		setTitle(event.target.value);
	};

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user")).id;
		console.log("el user id es", user);
		actions.obtenerTareas(user);
	}, []);

	console.log("el todolist en store es", store.todoList);

	const handleKeyDown = event => {
		if (event.key === "Enter") {
			actions.nuevaTarea(title);
			setTitle("");
		}
	};

	// let storeList = store.todoList;
	// let diario = storeList.filter(element => element.dia === dia);
	// console.log("elementos del dia", dia, ":", diario);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="card-to-do card-white">
						<div className="card-body">
							<input
								type="text"
								value={title}
								className="form-control add-task"
								placeholder="Puedes agregar una nueva tarea"
								onKeyDown={handleKeyDown}
								onChange={handleChange}
							/>
							<div className="todo-list">
								{store.todoList.filter(element => element.dia === dia).map((item, index) => {
									return (
										<div key={index} className="todo-item">
											{/* <div className="checker">
												{" "}
												<input type="checkbox" defaultChecked={item.done} />{" "}
											</div> */}
											<span>{item.actividad}</span>
											<button
												className="btn btn-light float-right"
												onClick={() => {
													deleteItems(item.id);
												}}>
												<i className="fa fa-check" />
											</button>
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
