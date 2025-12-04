import React from 'react'

class AudioPlayer extends React.Component {

    render() {

        return (
        <div>
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
