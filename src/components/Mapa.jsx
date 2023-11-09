import React, { useState } from 'react';

function Mapa() {
    const [estado, setestado] = useState("México")
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h1>¡Bienvenido/a a {estado}</h1>
            </div>
            <div>
                <span>Aquí va el mapita</span>
            </div>
            <div>
                <p>Aquí va el párrafo...</p>
            </div>
        </div>
    );
}

export default Mapa;
