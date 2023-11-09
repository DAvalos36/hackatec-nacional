import React from 'react';
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function Monumentos() {
    const list = [
      {
        title: "Teatro",
        img: "./teatroH.jpeg",
        ciudad: "Parral",
      },
      {
        title: "Fuente Santa Maria",
        img: "./Fuente.jpg",
        ciudad: "Parral",
      },
      {
        title: "Catedral",
        img: "./Catedral.jpeg",
        ciudad: "Parral",
      },
      {
        title: "Museo",
        img: "./Museo Campeche .jpg",
        ciudad: "Campeche",
      },
      {
        title: "Museo",
        img: "./Museo Michoacán .jpg",
        ciudad: "Michoacan",
      },
      {
        title: "Museo",
        img: "./Museo Morelos.jpg",
        ciudad: "Morelos",
      },
      {
        title: "Museo",
        img: "./Museo Querétaro .jpg",
        ciudad: "Queretaro",
      },
      {
        title: "Chichenitza",
        img: "./Chichen Yucatan.jpg",
        ciudad: "Yucatan",
      },
      
      {
        title: "Coba",
        img: "./Copan_St_H.jpg",
        ciudad: "Jalisco",
      },
      {
        title: "Parque",
        img: "./Tulum.jpeg",
        ciudad: "Tulum",
      },
      
    ];
  
    return (
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
              <b>{item.title}</b>
              <p className="text-default-500 pl-48px">{item.ciudad}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }
