import { SVGMap } from "react-svg-map";
import Mexico from "@svg-maps/mexico";
import "./Mapita.css";
import { useEffect, useState } from "react";

function Mapita() {
	const uno_pueblo = [
		"Baja California",
		"Coahuila",
		"Colima",
		"Durango",
		"Morelos",
		"Tlaxcala",
		"Tamaulipas",
		"Veracruz",
	];

	const dos_pueblos = ["Morelos", "Tamaulipas", "Tlaxcala", "Veracruz"];

	const tres_pueblos = [
		"Aguascalientes",
		"Baja California Sur",
		"Campeche",
		"Chiapas",
		"Nayarit",
		"Quintana Roo",
		"Tabasco",
	];

	const cuatro_pueblos = ["Quintana Roo", "Sinaloa", "Sonora", "Yucatán"];

	const cinco_pueblos = [
		"Chihuahua",
		"Guanajuato",
		"Hidalgo",
		"Jalisco",
		"Nuevo León",
		"Oaxaca",
		"Zacatecas",
	];

	const seis_pueblos = ["Querétaro", "San Luis Potosí", "Zacatecas"];

	const ocho_pueblos = ["Jalisco"];

	const nueve_pueblos = ["Hidalgo", "Michoacán", "Puebla"];

	const [estadoSeleccionado, setEstadoSeleccionado] = useState("");

	useEffect(() => {
		Mexico.locations.forEach((location) => {
			console.log(location);
			location.path;
		});
	}, []);

	return (
		<div className="w-full flex justify-center items-center my-4">
			<SVGMap
				map={Mexico}
				onChange={(e) => console.log(e)}
				className="w-full h-[600px]"
				locationClassName={(location) => {
					const stateName = location.name;
					if (stateName === estadoSeleccionado) {
						return "resaltar_estado";
					} else if (uno_pueblo.includes(stateName)) {
						return "uno_pueblo";
					} else if (dos_pueblos.includes(stateName)) {
						return "dos_pueblos";
					} else if (tres_pueblos.includes(stateName)) {
						return "tres_pueblos";
					} else if (cuatro_pueblos.includes(stateName)) {
						return "cuatro_pueblos";
					} else if (cinco_pueblos.includes(stateName)) {
						return "cinco_pueblos";
					} else if (seis_pueblos.includes(stateName)) {
						return "seis_pueblos";
					} else if (ocho_pueblos.includes(stateName)) {
						return "ocho_pueblos";
					} else if (nueve_pueblos.includes(stateName)) {
						return "nueve_pueblos";
					} else {
						return ""; // Si no está en ningún arreglo, no aplica ninguna clase
					}
				}}
				onLocationClick={(e) => {
					const n = e.target.attributes.name.value;
					setEstadoSeleccionado(n);
				}}
			/>
		</div>
	);
}

export default Mapita;
