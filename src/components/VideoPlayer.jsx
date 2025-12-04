import React from 'react'

class VideoPlayer extends React.Component {

    render() {

        return (
        <div>
             
            <video controls width="640" height="360" loading="lazy">
            <source src='video/SpiderMan.mp4' type='video/mp4' />
             <track src="public/video/subtitles.vtt" kind="subtitles" srclang="es" label="Español" default></track>
             Tu navegador no soporta el elemento <code>video</code>
          </video>
       
        </div>
         
        )
    }

}


export default VideoPlayer
