import React from 'react'

class VideoPlayer extends React.Component {

    render() {

        return (
        /**Container vídeo */   
        <section className="containerImg">
            <h3 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-xl">Vídeo</h3>
            <video controls width="640" height="360" loading="lazy">
                <source src='/video/SpiderMan.mp4' type='video/mp4' />
                <source src='/video/SpiderMan-webM.webm' type='video/webm' />
                <track src="/video/subtitles.vtt" kind="subtitles" srclang="es" label="Español" default></track>
                Tu navegador no soporta video
            </video>
        </section>
         
        )
    }

}


export default VideoPlayer
