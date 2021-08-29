import React, { useEffect, useContext } from "react";
import "../../styles/timeline.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

export const Timeline = () => {
	const { store, actions } = useContext(Context);

	let userData = store.user.user;

	console.log("datos del usuario en store: ", userData);

	// AP: 28/8 @ 00:28hrs tengo que contar el número de días que tiene el desafío,
	// contando el numero de días únicos que tienen los to-do de ese usuario

	useEffect(() => {
		console.log("useEffect del Timeline");
	}, []);

	// variable auxiliar para la duracion del desafio
	// let duracion = store.user.user.duracion;

	const rutinaDiaria = dia => {
		console.log("Se ha clickeado el Rutina id ", dia);
	};

	const recetaDiaria = dia => {
		console.log("Se ha clickeado la receta id", dia);
	};

	// esta funcion tiene que estar en el componente To-Do. El dia se le pasa por params (URL).
	const toDoDiario = dia => {
		let num = dia;
		let toDo = JSON.parse(localStorage.getItem("user"));
		toDo = toDo["to-do del usuario"];

		let listaDia = toDo.filter(element => element.dia === num);

		console.log("los to-do del dia", num, "son: ", listaDia);
	};

	const createElement = () => {
		let dias = [];

		let numDias = JSON.parse(localStorage.getItem("user"));
		numDias = numDias.duracion;

		for (let i = 0; i < numDias; i++) {
			let numDia = i + 1;
			dias.push(
				<div className="timeline-container">
					<div className="timeline-icon">
						<i className="far fa-grin-wink" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">{`Día ` + numDia}</h4>
						{/* Los buttons deben estar en un <Link> el ID se pasa por params (URL) 
						ejemplo: <Link to={`/todo/${numDia}`} o bien <Link to={`/receta/${numDia}`} */}
						<Button type="button" className="btn btn-light btn-sm mr-2" onClick={() => toDoDiario(numDia)}>
							{`Ver to-do del día`} <i className="fas fa-tasks" />
						</Button>
						<Button type="button" className="btn btn-light btn-sm" onClick={() => rutinaDiaria(numDia)}>
							{`Ver rutina de ejercicio`} <i className="fas fa-dumbbell" />
						</Button>
						<Button
							type="button"
							className="ml-2 btn btn-light btn-sm"
							onClick={() => recetaDiaria(numDia)}>
							{`Ver receta del dia`} <i className="fas fa-utensils" />
						</Button>
					</div>
				</div>
			);
		}
		return dias;
	};

	return (
		<div className="timeline-wrapper">
			<div className="timeline">
				{createElement()}
				{/* <div className="timeline-container">
					<div className="timeline-icon">
						<i className="far fa-grin-wink" />
					</div>
					<div className="timeline-body">
						<h4 className="timeline-title">Día 1</h4>
						{createElement()}
						<p>store.algo</p>
						<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
							Ver rutina de ejercicio <i className="fas fa-dumbbell" />
						</Button>
						<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
							Ver receta del dia <i className="fas fa-utensils" />
						</Button>
					</div>
				</div> */}
			</div>
		</div>
	);

	// return (
	// 	<div className="timeline-wrapper">
	// 		<div className="timeline">
	// 			<div className="timeline-container primero">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin-wink" />
	// 				</div>
	// 				<div className="timeline-body">

	// 					for(let i = 0; i < duracion; i++){

	// 					}

	// 					<TimelineElement />

	// 					<h4 className="timeline-title">Día {1}</h4>
	// 					<p>store.algo</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container segundo">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin-hearts" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 2</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container tercero">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin-tears" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 3</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container cuarto">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grimace" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 4</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container quinto">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin-beam-sweat" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 5</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container sexto">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 6</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 			<div className="timeline-container final">
	// 				<div className="timeline-icon">
	// 					<i className="far fa-grin-wink" />
	// 				</div>
	// 				<div className="timeline-body">
	// 					<h4 className="timeline-title">
	// 						<Link to="/to-do">
	// 							<button className="badge">Día 7</button>
	// 						</Link>
	// 					</h4>
	// 					<p>
	// 						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam
	// 						earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos.
	// 						Cum fugit laboriosam culpa, repellendus esse commodi deserunt.
	// 					</p>
	// 					<Button type="button" className="btn btn-light" onClick={() => rutinaDiaria("id")}>
	// 						Ver rutina de ejercicio <i className="fas fa-dumbbell" />
	// 					</Button>
	// 					<Button type="button" className="ml-2 btn btn-light" onClick={() => recetaDiaria("id")}>
	// 						Ver receta del dia <i className="fas fa-utensils" />
	// 					</Button>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// );
};
