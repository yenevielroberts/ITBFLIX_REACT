
import React from 'react'
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';
import Galeria from './Galeria';

class Multimedia extends React.Component {

    render() {
        return (
            <section className="flex-col mb-36 h-fit sm:h-fit bg-blue-900" >
                <h2 className=" mb-2 ml-2 p-3 w-96 text-white font-serif text-2xl">Multimedia</h2>
                <Galeria />
                <AudioPlayer />
                <VideoPlayer />
            </section>
        )
    }

}


export default Multimedia
