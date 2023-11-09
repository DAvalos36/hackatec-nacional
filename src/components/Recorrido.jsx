import React from 'react';

function Recorrido() {

    return (
        <div className='flex flex-col justify-center items-center'>
            <video autoPlay loop muted style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", backgroundAttachment: 'fixed' }}>
                <source src="video.mp4" type="video/mp4" />
            </video>
            {/* Aquí puedes agregar cualquier otro contenido que desees mostrar encima del video */}
            
        </div>
    );
}

export default Recorrido;
