/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";
import BotEscribiendo from "./BotEscribiendo";

function Mensaje(props) {
	const temp = parseInt(props.id, 10);
	const bot = temp % 2 === 0;

	const color = bot ? "bg-default" : "bg-primary";

	return (
		<div
			size="lg"
			className={`${
				bot ? "self-start" : "self-end"
			} mt-3 break-all ${color} p-2 rounded-lg text-white`}
		>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima
			repellat laborum quibusdam optio atque? Facilis aut atque itaque
			voluptatem, amet, laboriosam rerum laudantium doloribus minima quis quod
			eos {props.id.toString()} totam?
		</div>
	);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function Chat() {
	return (
		<div className="h-60 border flex flex-col max-w-md">
			<div className="bg-orange-400 p-3">
				{/* Mensajes aqui */}
				{arr.map((id, i) => (
					<Mensaje id={i} key={id} />
				))}
				<BotEscribiendo />
			</div>
			<div className="bg-blue-400 p-1">
				{/* Input aqui */}
				<Input type="text" label="Escribe tus dudas aqui!" />
			</div>
		</div>
	);
}

export default Chat;
