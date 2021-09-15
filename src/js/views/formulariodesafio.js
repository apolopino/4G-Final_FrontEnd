import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/formulario.scss";

export const FormularioDesafio = () => {
	//Store
	const { store, actions } = useContext(Context);

	const [nombredesafio, setNombredesafio] = useState("");
	const [descripciondesafio, setDescripciondesafio] = useState("");
	const [feat1, setFeat1] = useState("");
	const [feat2, setFeat2] = useState("");
	const [feat3, setFeat3] = useState("");
	const [urlphoto, setUrlphoto] = useState("");
	const [msg, setMsg] = useState("");

	const history = useHistory();

	//funcion de prueba
	const handleDesafio = e => {
		e.preventDefault();
		if (
			(nombredesafio.length >= 1) &
			(descripciondesafio.length >= 1) &
			(feat1.length >= 1) &
			(feat2.length >= 1) &
			(feat3.length >= 1) &
			(urlphoto.length >= 1)
		) {
			const desafios = {
				nombreDesafio: nombredesafio,
				descripcionDesafio: descripciondesafio,
				feat1: feat1,
				feat2: feat2,
				feat3: feat3,
				photoURL: urlphoto
			};
			actions.setDesafio(desafios);
		} else {
			setMsg("Falta informacion en alguno de los campos");
		}
	};

	//funcion para insertar nuevo desafio
	const handlePost = e => {
		e.preventDefault();

		actions.newChallenge();
	};

	//funcion que llame la accion para inyectar datos en el endpoint /desafios /dias /templatetodo /extras
	//considerar algun IF
	//esta pagina deberia ser accesible solo para usuarios que pueden crear desafios> anadir columna boolean a Users

	return (
		<div className="contact-form center col-xs-10 col-sm-8 col-md-6 container mt-3">
			<Form>
				<h4>Desafio</h4>
				<Form.Control
					value={nombredesafio}
					onChange={e => setNombredesafio(e.target.value)}
					type="text"
					placeholder="Nombre del desafio"
				/>
				<br />
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Descripcion breve del desafio (max 250 caracteres incluyendo espacios)</Form.Label>
					<Form.Control
						value={descripciondesafio}
						onChange={e => setDescripciondesafio(e.target.value)}
						as="textarea"
						rows={3}
					/>
				</Form.Group>
				<br />
				<Form.Control value={feat1} onChange={e => setFeat1(e.target.value)} type="text" placeholder="feat1" />
				<br />
				<Form.Control value={feat2} onChange={e => setFeat2(e.target.value)} type="text" placeholder="feat2" />
				<br />
				<Form.Control value={feat3} onChange={e => setFeat3(e.target.value)} type="text" placeholder="feat3" />
				<br />
				<Form.Control
					value={urlphoto}
					onChange={e => setUrlphoto(e.target.value)}
					type="text"
					placeholder="URL fotografia"
				/>
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
				<br />
				<span style={{ color: "red" }}>{msg}</span>
				<Button className="col-12 mt-3 mb-5" variant="primary" onClick={handleDesafio}>
					Ingresar desafio
				</Button>
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
				<Form.Label>Tipo</Form.Label>
				<Form.Control as="select">
					<option>receta</option>
					<option>rutina</option>
				</Form.Control>
				<br />
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Descripcion breve (max 250 caracteres incluyendo espacios)</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<Form.Control type="text" placeholder="URL Video" />
				<br />
				<Form.Control type="text" placeholder="URL fotografia" />
				<br />
				<Button className="col-12 mt-3 mb-5" variant="primary" onClick={handlePost}>
					Ingresar desafio
				</Button>
			</Form>
		</div>
	);
};
