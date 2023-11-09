import { Button, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Bienvenida from "./components/Bienvenida";
import Mapa from "./components/Mapa";
import Recorrido from "./components/Recorrido";


function App() {
	return (
		<>
			{/* <Navbar className="bg-transparent backdrop-blur-0">
				<NavbarBrand>
					<p className="font-bold text-inherit">ACME</p>
				</NavbarBrand>
				<NavbarContent justify="end">
					<NavbarItem className="hidden lg:flex">
						<Button as={Link} className="rounded-full round-brown" href="#" variant="bordered">
							Recorridos virtuales
						</Button>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} className="blue rounded-full" href="#" variant="flat">
							<Image className="m-2" src="raiteame.svg" style={{height: 20}}></Image>
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar> */}
			<div className="s-full flex justify-center items-center">
				{/* <Bienvenida className=""></Bienvenida> */}
				{/* <Mapa></Mapa> */}
				<Recorrido></Recorrido>
			</div>
		</>
	);
}

export default App;
