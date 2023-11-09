import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Monumentos from "./Monumentos.jsx";
import Mapita from "./Mapita.jsx";

function Mapa() {
	const [estadoSeleccionado, setEstadoSeleccionado] = useState("");

	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				<h1>¡Bienvenido/a a {estadoSeleccionado}</h1>
				<Button>Visita el recorrido virtual</Button>
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
