import {
	Button,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";

function Nav() {
	return (
		<Navbar className="bg-transparent backdrop-blur-0">
			<NavbarBrand>
				<p className="font-bold text-inherit">ACME</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Button
						as={Link}
						className="rounded-full round-brown"
						href="#"
						variant="bordered"
					>
						Recorridos virtuales
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						className="blue rounded-full"
						href="#"
						variant="flat"
					>
						<Image className="m-2" src="raiteame.svg" style={{ height: 20 }} />
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export default Nav;
