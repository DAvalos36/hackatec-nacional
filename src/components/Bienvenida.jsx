import { Button } from '@nextui-org/react';
import React from 'react';
import { motion } from "framer-motion"

function Bienvenida() {
    return (
        <motion.div whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}>
        <div className='flex flex-col justify-center items-center'>
            <h1>¡Bienvenido/a!</h1>
            <p style={{textAlign: 'center'}}>Es un gusto para nosotros que nos estés visitando. Esperamos que
                tu estancia sea de lo más agradable y que disfrutes de tu experiencia virtual.
            </p>
            <Button>¡Adelante!</Button>
        </div>
        </motion.div>
    );
}

export default Bienvenida;
