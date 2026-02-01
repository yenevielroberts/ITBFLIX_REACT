import React from 'react'
import data from '../db/data.json'

class Lista extends React.Component{
    
render(){

    //Envio el nombre decual lista quiero mostrar movies o series
    const {listas}=this.props;

    const listaMostrar=data[listas]

     const lista=listaMostrar.map((serie, index)=>(

        <section key={index} className="flex flex-col m-10 justify-center items-center">
            <h2 className='text-lg text-white font-bold mb-5'>{serie.name}</h2>
            <div className='rounded-xl hover:ring-4 ring-yellow-300'>
                  <img src={serie.image} className="max-w-56 max-h-56 rounded-xl"  alt={serie.alt}/>
            </div>
          
        </section>
     ));

    
    return(

       <section className='flex flex-col'>
            <h1 className='text-2xl text-white font-bold m-5'>{listas}</h1>
            <div className='flex flex-row flex-wrap items-center'>
               {lista}  
            </div>
           
       </section> 
    )
}

   

   
}

export default Lista