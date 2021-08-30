import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/to-do.scss";
import { Context } from "../store/appContext";

export const Todo = () => {
	const { store, actions } = useContext(Context);

	var [title, setTitle] = useState("");
	const handleChange = event => {
		setTitle(event.target.value);
	};
	const deleteItems = indice => {
		actions.borrarTarea(indice);
	};

	const handleChangeCheckbox = event => {
		setTitle(event.target.value);
	};

	useEffect(() => {
		actions.obtenerTareas();
	}, []);

	const handleKeyDown = event => {
		if (event.key === "Enter") {
			actions.nuevaTarea(title);
			setTitle("");
		}
	};

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
								{store.todoList.map((item, index) => {
									return (
										<div key={index} className="todo-item">
											{/* <div className="checker">
												{" "}
												<input type="checkbox" defaultChecked={item.done} />{" "}
											</div> */}
											<span>{item.title}</span>
											<button
												className="btn btn-light float-right"
												onClick={() => {
													deleteItems(index);
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
