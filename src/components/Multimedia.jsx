import data from '../db/multimedia.json'
import React from 'react'
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

class Multimedia extends React.Component {

    render() {

        const  imagenes  = data.seriesWebp
        const titleSection  = "Multimedia"

        //console.log(imagenes)
        let arrayImagenes = []; {/**Array donde se guarda el contenedor individual de la imagenes*/ }
        
            arrayImagenes = imagenes.map((imagen, index) => (

                /*Contenedor indivual de las imagenes */
                <div className="mb-10 mt-5 rounded-xl hover:ring-4 ring-yellow-300" key={index} >
                    <a href=''>
                        <img srcSet="/img/imgWebp/houseposter.webp 1x, /img/imgWebp/99.webp 2x" srcloading="lazy" className="max-w-56 max-h-56 rounded-xl" />
                    </a>
                </div>
            ));
        


        return (
            <section className="flex-col mb-36 h-fit sm:h-fit bg-blue-900" >
                {/**Contenedor del titulo y flecha */}
                <div className="flex w-full items-center">
                    <h2 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">{titleSection}</h2>
                    {/**Icono de flecha */}
                    <div className="flex w-full justify-end mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8
                     text-black hover:text-yellow-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                </div>
                {/**Contenedor de todas las imagenes de una sección */}
                <div className=" flex flex-row flex-wrap  justify-evenly ">
                    {arrayImagenes}{/**Muestro las imagenes */}
                </div>
                <AudioPlayer />
                <VideoPlayer />
            </section>
           

           
        )
    }

}


export default Multimedia
