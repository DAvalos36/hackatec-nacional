import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Monumentos from "./Monumentos.jsx";
import Mapita from "./Mapita.jsx";
import { Link } from "wouter";

function Mapa() {
	const [estadoSeleccionado, setEstadoSeleccionado] = useState("");

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center items-center">
				<h1 style={{textAlign: 'center', fontSize: 18, fontWeight: 500, marginBottom: 10}}>
					¡Bienvenido/a a{" "}
					{estadoSeleccionado !== "" ? estadoSeleccionado : "México"}
				</h1>
				<Button as={Link} href="/recorrido" style={{fontSize: 15, fontWeight: 400}} variant='shadow' color='secondary'>
					Visita el recorrido virtual
				</Button>
			</div>
			<div>
				<Mapita
					estadoSeleccionado={estadoSeleccionado}
					setEstadoSeleccionado={setEstadoSeleccionado}
				/>
			</div>
			<div>
				<Monumentos estado={estadoSeleccionado} />
			</div>
		</div>
	);
}

export default Mapa;
