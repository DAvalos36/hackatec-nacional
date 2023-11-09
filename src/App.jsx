import { Route } from "wouter";
import Bienvenida from "./components/Bienvenida";
import Mapa from "./components/Mapa";
import Recorrido from "./components/Recorrido";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Route path="/">
				{(params) => (
					<>
						<Nav />
						<div className="s-full flex justify-center items-center">
							<Bienvenida />
						</div>
					</>
				)}
			</Route>
			<Route path="/mapa">
				{(params) => (
					<>
						<Nav />
						<div className="s-full flex justify-center items-center">
							<Mapa />;
						</div>
					</>
				)}
			</Route>
			<Route path="/recorrido">
				{(params) => (
					<>
						<Nav />
						<div className="s-full flex justify-center items-center">
							<Recorrido />
						</div>
					</>
				)}
			</Route>
		</>
	);
}

export default App;
