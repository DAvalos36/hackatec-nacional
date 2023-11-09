/* eslint-disable react/prop-types */
import { Button, Input, ScrollShadow } from "@nextui-org/react";
import BotEscribiendo from "./BotEscribiendo";
import { useState } from "react";
import axios from "axios";

function Mensaje(props) {
	const role = props.role;
	const content = props.content;
	const bot = role === "assistant";

	const color = bot ? "bg-default" : "bg-primary";

	if (role === "system") return null;

	return (
		<div
			size="lg"
			className={`${
				bot ? "self-start" : "self-end"
			} mt-3 break-all ${color} p-2 rounded-lg text-white max-w-[80%]`}
		>
			{content}
		</div>
	);
}

function Chat() {
	const [cargando, setCargando] = useState(false);
	const [conversacion, setConversacion] = useState([]);

	const [inputValue, setInputValue] = useState("");

	// use axios to send message to backend

	async function sendMessage(chatHistory, message) {
		setInputValue("");
		setCargando(true);
		const m = { role: "user", content: message };
		if (chatHistory.length === 0) {
			const u = {
				role: "system",
				content:
					"Eres un gia de turista de una ciudad llamada hidalgo del parral, en el estado de chihuahua, Mexico. Como experto que eres, tienen un gran conocimiento historico, y eres capaz de resolver cualquier duda relacionada",
			};
			chatHistory.push(u);
		}
		setConversacion([...conversacion, m]);
		chatHistory.push(m);
		console.log(chatHistory);
		try {
			// const response = await axios.post("http://127.0.0.1:8000/chatbot/", {
			// 	chatHistory,
			// });
			const response = await axios.post(
				"http://127.0.0.1:8000/chatbot/",

				chatHistory,

				{ headers: { "Access-Control-Allow-Origin": "*" } },
			);
			const data = response.data;
			console.log(data);
			setConversacion(data.respuesta);
		} catch (error) {
			console.log(error);
			alert(error);
		} finally {
			setCargando(false);
		}
	}

	return (
		<div className="h-60 border flex flex-col max-w-md">
			<div className="bg-gray-600 p-3">
				<ScrollShadow hideScrollBar className="flex flex-col h-[400px] ">
					{/* Mensajes aqui */}
					{conversacion.map((e, i) => (
						// rome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<Mensaje role={e.role} content={e.content} key={i} />
					))}
				</ScrollShadow>
				<BotEscribiendo />
			</div>
			<div className="bg-black p-3 flex justify-around items-center">
				{/* Input aqui */}
				<Input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					type="text"
					className="w-[75%]"
					label="¡Escribe tus dudas aqui!"
				/>
				<Button
					color="primary"
					className="w-[10%] h-full"
					isLoading={cargando}
					isDisabled={inputValue === ""}
					onClick={() =>
						// Get the input data
						sendMessage(conversacion, inputValue)
					}
				>
					E
				</Button>
			</div>
		</div>
	);
}

export default Chat;
