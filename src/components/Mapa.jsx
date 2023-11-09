import React, { useState } from 'react';
import {Card, CardBody, CardFooter, Image,Button} from "@nextui-org/react";
import Monumentos from "./Monumentos.jsx"

function Mapa() {
    const [estado, setestado] = useState("México")
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1>¡Bienvenido/a a {estado}</h1>
                <Button>Visita el recorrido virtual</Button>
            </div>
            <div>
                <span>Aquí va el mapita</span>
            </div>
            <div>
                <Monumentos/>
            </div>
        </div>
    );
}

export default Mapa;
