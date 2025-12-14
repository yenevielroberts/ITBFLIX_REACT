import React from 'react'

class AudioPlayer extends React.Component {

    render() {

        return (
         /**Container audio */   
        <div className='m-5'>
            <h2 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">Audio</h2>
            <audio controls >
            <source src='audio/Kygo-Freeze.mp3' type='audio/mpeg' />
             <source src='audio/Kygo-Freeze-ogg.ogg' type='audio/ogg' />
             Tu navegador no soporta el elemento <code>audio</code>
          </audio>
        </div>
         
        )
    }

}


export default AudioPlayer
