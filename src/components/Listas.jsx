import React from 'react'
import data from '../db/data.json'

class Lista extends React.Component{
    
render(){

    //Envio el nombre decual lista quiero mostrar movies o series
    const {listas}=this.props;

    const listaMostrar=data[listas]

     const lista=listaMostrar.map((serie, index)=>(

        <div key={index} className="flex flex-col m-10 justify-center items-center">
            <h3 className='text-lg text-white font-bold mb-5'>{serie.name}</h3>
            <div className='rounded-xl hover:ring-4 ring-yellow-300'>
                  <img src={serie.image} className="max-w-56 max-h-56 rounded-xl"  />
            </div>
          
        </div>
     ));

    
    return(

       <div className='flex flex-row flex-wrap items-center'>
            {lista}
       </div> 
    )
}

   

   
}

export default Lista