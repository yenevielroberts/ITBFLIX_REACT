const Contacto=()=>{

    return(

        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-white justify-start mb-10">Contacta con nosotros</h1>
            <div className="flex flex-col bg-white w-auto h-auto p-4 justify-center items-center rounded-lg">
             <form className="flex flex-col justify-center items-center mt-5">

            <div>
                <label htmlFor="username" className='mr-2'>Nombre</label>
                <input type="text" id="username" name="username" required className='m-2 border border-black rounded-lg p-1 '/>
            </div>
                
                <div>
                   <label htmlFor="userEmail" className='mr-2'>Email</label>
                <input type="email" id="userEmail" name="userEmail" required className='m-2 border border-black rounded-lg p-1 '/> 
                </div>
            
                <label htmlFor="message" className='mr-2'>Mensaje</label>
                <textarea type="text area" id="message" name="message" required className='m-2 border border-black rounded-lg p-1 w-60 h-44'></textarea>

                <button type='submit'className="border p-1 rounded-lg bg-blue-800 text-white w-20 m-2">Log in</button>
             </form>
            </div>
           
        </div>
           
            
        
    )
}

export default Contacto
