import { Button } from '@nextui-org/react';
import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'wouter';

function Bienvenida() {
    return (
        
        
        <div className='flex flex-col justify-center items-center' style={{backgroundColor: 'rgba(255, 225, 71, 0.5)', borderRadius: 50, height: 500, width: 1000}}>
            <h1 style={{fontWeight: 500, fontSize: 50}}>¡Bienvenido/a!</h1>
            <div><p style={{textAlign: 'center', paddingInline: 20, marginBlock: 50}}>Es un gusto para nosotros que nos estés visitando. Esperamos que
                tu estancia sea de lo más agradable y que disfrutes de tu experiencia virtual.
            </p></div>
            <motion.div whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}>
            <Button as={Link} href='/mapa' style={{fontSize: 18, fontWeight: 400}} variant='shadow' color='secondary'>¡Adelante!</Button>
            </motion.div>
        </div>
        
    );
}

export default Bienvenida;
