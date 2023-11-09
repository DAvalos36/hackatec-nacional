import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";


function Recorrido() {
  const [actual, setActual] = useState(1);
  const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [1, 0], [0.2, 2]);

  return (
    <div
    //className='flex flex-col justify-center items-center'
    >
      <div className=" relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover fixed inset-0"
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >    

        </div>
      </div>

      {/* Aquí puedes agregar cualquier otro contenido que desees mostrar encima del video */}
      <section id="inicio">
        <div className="contenedor-tiempo">
          <div className="linea"></div>
          <a
            onClick={() => setActual(1)}
            href="#1"
            id="m1"
            className={`fecha ${actual >= 1 ? "bg-black" : "bg-gray-500"}`}
          ></a>
          <a
            onClick={() => setActual(2)}
            href="#2"
            id="m2"
            className={`fecha ${actual >= 2 ? "bg-black" : "bg-gray-500"}`}
          ></a>
          <a
            onClick={() => setActual(3)}
            href="#3"
            id="m3"
            className={`fecha ${actual >= 3 ? "bg-black" : "bg-gray-500"}`}
          ></a>
          <a
            onClick={() => setActual(4)}
            href="#4"
            id="m4"
            className={`fecha ${actual >= 4 ? "bg-black" : "bg-gray-500"}`}
          ></a>
          <a
            onClick={() => setActual(5)}
            href="#5"
            id="m5"
            className={`fecha ${actual >= 5 ? "bg-black" : "bg-gray-500"}`}
          ></a>
          <a
            onClick={() => setActual(6)}
            href="#6"
            id="m6"
            className={`fecha ${actual >= 6 ? "bg-black" : "bg-gray-500"}`}
          ></a>
        </div>
      </section>
      <section id="1">
        <div className="w-1/4 mx-auto p-4">
        <div className="flex items-center justify-center h-screen" >
            <motion.div>
            <motion.div
                style={{
                    scaleY: scrollYProgress
                }}
                />
            </motion.div>
          <p className="text-center z-50 text-white text-xs">
            Es conocida por su rica historia y su papel en la Revolución
            Mexicana. La ciudad lleva el nombre de José Parral, un líder
            insurgente durante la guerra de independencia de México.
          </p>
          <Image src="Puerta.jpg" width="900px" height="900px"></Image>
        </div>
        </div>
      </section>
      <section id="2">
        <div className="flex items-center justify-center h-screen">
        <p className="text-center z-50 text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis accusamus sapiente quas atque, eligendi fugit magnam,
          laboriosam corrupti dolor ducimus ad deleniti praesentium laudantium
          provident maxime quia tempore necessitatibus.
        </p>
        </div>
        
      </section>
      <section id="3">
        <h1>1. Primera foto </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis accusamus sapiente quas atque, eligendi fugit magnam,
          laboriosam corrupti dolor ducimus ad deleniti praesentium laudantium
          provident maxime quia tempore necessitatibus.
        </p>
      </section>
      <section id="4">
        <h1>1. Primera foto </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis accusamus sapiente quas atque, eligendi fugit magnam,
          laboriosam corrupti dolor ducimus ad deleniti praesentium laudantium
          provident maxime quia tempore necessitatibus.
        </p>
      </section>
      <section id="5">
        <h1>1. Primera foto </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis accusamus sapiente quas atque, eligendi fugit magnam,
          laboriosam corrupti dolor ducimus ad deleniti praesentium laudantium
          provident maxime quia tempore necessitatibus.
        </p>
      </section>
      <section id="6">
        <h1>1. Primera foto </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reiciendis accusamus sapiente quas atque, eligendi fugit magnam,
          laboriosam corrupti dolor ducimus ad deleniti praesentium laudantium
          provident maxime quia tempore necessitatibus.
        </p>
      </section>
      {/* <div class='contenedor'>
                    <aside>
                        <div class='contenedor-temario' id='temario'>
                            <h3 class="titulo">Temario</h3>
                            <ul class="lista">
                                <li class="activo"><a href="#1">1.</a></li>
                                <li><a href="#2">2.</a></li>
                                <li><a href="#3">3.</a></li>
                                <li><a href="#4">4.</a></li>
                                <li><a href="#5">5.</a></li>
                                <li><a href="#6">6.</a></li>
                            </ul>
                        </div>
                    </aside>
                    <main>
                        <div class="card" id='1'>
                            <h1>1. Primera foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                        <div class="card" id='2'>
                            <h1>2. Segunda foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                        <div class="card" id='3'>
                            <h1>3. Tercera foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                        <div class="card" id='4'>
                            <h1>4. Cuarta foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                        <div class="card" id='5'>
                            <h1>5. Quinta foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                        <div class="card" id='6'>
                            <h1>6. Sexta foto </h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis 
                            accusamus sapiente quas atque, eligendi fugit magnam, laboriosam corrupti dolor 
                            ducimus ad deleniti praesentium laudantium provident maxime quia tempore necessitatibus.</p>
                        </div>
                    </main>
                </div> */}
      <script src="scriptlinea.js"> </script>
    </div>
  );
}

export default Recorrido;
