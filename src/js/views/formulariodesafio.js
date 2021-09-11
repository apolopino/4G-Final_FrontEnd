import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/formulario.scss";

export const FormularioDesafio = () => {
	//Store
	const { store, actions } = useContext(Context);

	const history = useHistory();

	const handlePost = e => {
		e.preventDefault();

		actions.postDesafio();
	};

	//funcion que llame la accion para inyectar datos en el endpoint /desafios /dias /templatetodo /extras
	//considerar algun IF
	//esta pagina deberia ser accesible solo para usuarios que pueden crear desafios> anadir columna boolean a Users

	return (
		<div className="contact-form center col-xs-10 col-sm-8 col-md-6 container mt-3">
			<Form>
				<h4>Desafio</h4>
				<Form.Control type="text" placeholder="Nombre del desafio" />
				<br />
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Descripcion del desafio</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<br />
				<Form.Control type="text" placeholder="feat1" />
				<br />
				<Form.Control type="text" placeholder="feat2" />
				<br />
				<Form.Control type="text" placeholder="feat3" />
				<br />
				<Form.Control type="text" placeholder="URL fotografia" />
				<br />

				{/* <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group> */}
			</Form>

			<Form>
				<h4>Dias</h4>
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Extras del dia</Form.Label>
					<Form.Control as="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
					<Form.Group controlId="exampleForm.ControlSelect1">
						<Form.Label>ToDo Template</Form.Label>
						<Form.Control as="select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</Form.Control>
					</Form.Group>
				</Form.Group>
				<Form.Control type="text" placeholder="Numero del dia" />
				<br />
				<Form.Label>Desafio</Form.Label>
				<Form.Control as="select" multiple>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</Form.Control>
				<br />
			</Form>

			<Form>
				<h4>Template ToDo</h4>
				<Form.Control type="text" placeholder="Nombre tarea" />
				<br />
				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Label>Dias</Form.Label>
					<Form.Control as="select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</Form.Control>
				</Form.Group>
			</Form>

			<Form>
				<h4>Recetas / Rutinas</h4>
				<Form.Control type="text" placeholder="Nombre actividad" />
				<br />
				<Form.Control type="text" placeholder="Dia" />
				<br />
				<Form.Control type="text" placeholder="rutina o receta" />
				<br />
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Descripcion</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<Form.Control type="text" placeholder="URL Video" />
				<br />
				<Form.Control type="text" placeholder="URL fotografia" />
				<br />
			</Form>
		</div>
	);
};
