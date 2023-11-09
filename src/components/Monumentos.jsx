import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function Monumentos() {
  const list = [
    {
      title: "Teatro",
      texto: "Hidalgo del parral",
      img: "./teatroH.jpeg",
      ciudad: "Recorrer",
    },
    {
      title: "Fuente  Santa Maria",
      texto: "Hidalgo del parral",
      img: "./Fuente.jpg",
      ciudad: "Recorrer",
    },
    {
      title: "Catedral",
      texto: "Hidalgo del parral",
      img: "./Catedral.jpeg",
      ciudad: "Recorrer",
    },
    {
      title: "Museo",
      texto:"Campeche",
      img: "./Museo Campeche .jpg",
      ciudad: "Recorrer",
    },
    {
      title: "Museo",
      texto:"Michoacán",
      img: "./Museo Michoacán .jpg",
      ciudad: "Recorrer",
    },
    {
      title: "Rey Colima",
      texto: "Colima",
      img: "./reyColima.jpeg",
      ciudad: "Recorrer",
    },
    {
      title: "Museo",
      texto: "Querétaro",
      img: "./Museo Querétaro .jpg",
      ciudad: "Recorrer",
    },
    {
      title: "Chichenitza",
      texto: "Yucatan",
      img: "./Chichen Yucatan.jpg",
      ciudad: "Recorrer",
    },

    {
      title: "Coba",
      texto: "Jalisco",
      img: "./Copan_St_H.jpg",
      ciudad: "Recorrer",
    },
    {
      title: "Parque",
      texto: "Tulum",
      img: "./Tulum.jpeg",
      ciudad: "Recorrer",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-col justify-between">
              <b>{item.title}</b>
              <p>{item.texto}</p>
            </div>
            <Button variant="bordered" className="" startContent={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 100 100"><path fill="currentColor" d="M21 32C9.459 32 0 41.43 0 52.94c0 4.46 1.424 8.605 3.835 12.012l14.603 25.244c2.045 2.672 3.405 2.165 5.106-.14l16.106-27.41c.325-.59.58-1.216.803-1.856A20.668 20.668 0 0 0 42 52.94C42 41.43 32.544 32 21 32Zm0 9.812c6.216 0 11.16 4.931 11.16 11.129c0 6.198-4.944 11.127-11.16 11.127c-6.215 0-11.16-4.93-11.16-11.127c0-6.198 4.945-11.129 11.16-11.129zM87.75 0C81.018 0 75.5 5.501 75.5 12.216c0 2.601.83 5.019 2.237 7.006l8.519 14.726c1.193 1.558 1.986 1.262 2.978-.082l9.395-15.99c.19-.343.339-.708.468-1.082a12.05 12.05 0 0 0 .903-4.578C100 5.5 94.484 0 87.75 0Zm0 5.724c3.626 0 6.51 2.876 6.51 6.492c0 3.615-2.884 6.49-6.51 6.49c-3.625 0-6.51-2.875-6.51-6.49c0-3.616 2.885-6.492 6.51-6.492z"/><path fill="currentColor" fillRule="evenodd" d="M88.209 37.412c-2.247.05-4.5.145-6.757.312l.348 5.532a126.32 126.32 0 0 1 6.513-.303zm-11.975.82c-3.47.431-6.97 1.045-10.43 2.032l1.303 5.361c3.144-.896 6.402-1.475 9.711-1.886zM60.623 42.12a24.52 24.52 0 0 0-3.004 1.583l-.004.005l-.006.002c-1.375.866-2.824 1.965-4.007 3.562c-.857 1.157-1.558 2.62-1.722 4.35l5.095.565c.038-.406.246-.942.62-1.446h.002v-.002c.603-.816 1.507-1.557 2.582-2.235l.004-.002a19.64 19.64 0 0 1 2.388-1.256zM58 54.655l-3.303 4.235c.783.716 1.604 1.266 2.397 1.726l.01.005l.01.006c2.632 1.497 5.346 2.342 7.862 3.144l1.446-5.318c-2.515-.802-4.886-1.576-6.918-2.73c-.582-.338-1.092-.691-1.504-1.068Zm13.335 5.294l-1.412 5.327l.668.208l.82.262c2.714.883 5.314 1.826 7.638 3.131l2.358-4.92c-2.81-1.579-5.727-2.611-8.538-3.525l-.008-.002l-.842-.269zm14.867 7.7l-3.623 3.92c.856.927 1.497 2.042 1.809 3.194l.002.006l.002.009c.372 1.345.373 2.927.082 4.525l5.024 1.072c.41-2.256.476-4.733-.198-7.178c-.587-2.162-1.707-4.04-3.098-5.548zM82.72 82.643a11.84 11.84 0 0 1-1.826 1.572h-.002c-1.8 1.266-3.888 2.22-6.106 3.04l1.654 5.244c2.426-.897 4.917-1.997 7.245-3.635l.006-.005l.003-.002a16.95 16.95 0 0 0 2.639-2.287zm-12.64 6.089c-3.213.864-6.497 1.522-9.821 2.08l.784 5.479c3.421-.575 6.856-1.262 10.27-2.18zm-14.822 2.836c-3.346.457-6.71.83-10.084 1.148l.442 5.522c3.426-.322 6.858-.701 10.285-1.17zm-15.155 1.583c-3.381.268-6.77.486-10.162.67l.256 5.536c3.425-.185 6.853-.406 10.28-.678zm-15.259.92c-2.033.095-4.071.173-6.114.245l.168 5.541a560.1 560.1 0 0 0 6.166-.246z"  className="fill-blue-700"/></svg>}>
              <p className="text-default-500 pl-48px">{item.ciudad}</p>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
