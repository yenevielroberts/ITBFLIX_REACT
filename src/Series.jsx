import React from 'react';

class Series extends React.Component{
    render(){
        const nombreSecciones=['Series','Movies','Más visto','Actores']
        return(
            <div className='section-series'>
                <h2></h2>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
                <div className='foto'><img></img></div>
            </div>
        )
    }

}