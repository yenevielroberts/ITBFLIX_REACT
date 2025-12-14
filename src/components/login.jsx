import data from '../db/users.json'
import {useState } from 'react'


//Funciones auxiliares

/**
 * loginRegistro
 * Component that manages the form
 *  
 */
const LoginFormulario=()=>{

    //Donde guardaré los valores de los inputs

    const [formData, setFormData]=useState({
        email:"",
        password:"",
    })


    /**
     * displayMessage
     *- Objecto donde cada clave(email, password) puede contener un mensaje de error tipo string.
     *- Si no hay errors para un campo, entonces la clave no existira o tendra un valor nulo
     */
    const [displayMessage, setDisplayMessage]=useState([])


    /**
     * valirdarUserCredenciales
     * - Comprueba que el usuario exista en nuestra base de dados(users.json)
     * @param {*User email} userEmail 
     * @param {* User password} password 
     * @returns 
     */
    const valirdarUserCredenciales=(userEmail,password)=>{
        let message=null;

        let userExiste=data.users.find((user)=>

            user.email===userEmail && user.password=== password
        )

        //onsole.log(userExiste.email)

        if(!userExiste) message="Credenciales incorrectas"


        if(message != null){
            // Actualizo el estado de errors de las credenciales:
            setDisplayMessage({['credenciales']:message}) 
        }
       
        return message
    }

    /**
     * handleChange
     * - Actualiza el formData por campo
     * @param {*} e
     */
    const handleChange=(e)=>{
        const {name,value}=e.target
        // Actualizo el valor del formulario
        //Hago una copia de los valores previos y tambíen agrego un valor nuevo para [name] que luego se compara con el valor previo y si es diferente se sobreescribe
        setFormData((prev)=>({...prev,[name]:value}));

        setDisplayMessage(null);

    }
   
    /**
     * handleSubmit
     * - Función que se ejecuta al enviar el formulario. Llama las demás funciones para hacer la validación
     * @param {*} e 
     */
    const handleSubmit=(e)=>{

        e.preventDefault();

        const email=document.getElementById("userEmail").value
        const password=document.getElementById("userPassword").value

        const valido= valirdarUserCredenciales(email, password)

        if(valido==null){
            
            setDisplayMessage({['credenciales']:"Usuario logeado"})
        }
    }


    const renderInput=(id, label,type="text")=>(

        <div>
            <label htmlFor={id} className='mr-2'>
                {label}
            </label>
            <input type={type} id={id} name={id} value={formData[id]} onChange={handleChange} required className='m-2 border border-black rounded-lg p-1 focus:outline-blue-500'/>
        </div>
    )

    return(

        <main>
            <div className="flex flex-col justify-center items-center">
                  <h1 className="text-2xl font-bold text-white justify-start mb-10">Log in</h1>
                <div className="flex flex-col bg-white w-auto h-auto p-4 justify-center items-center rounded-lg">
                  
                        {/**si el objeto submitMessage no es null renderiza */}
                    {displayMessage &&(
                            
                        <div className='m-5 font-bold'>
                            {displayMessage.credenciales}
                        </div>    

                     )}
                    <form onSubmit={handleSubmit}className="flex flex-col justify-center items-center">
                        {renderInput("userEmail","User email","email")}
                        {renderInput("userPassword","User password","password")}
                        <button type='submit'className="border p-1 rounded-lg bg-blue-800 text-white w-20 m-2  hover:bg-green-800">Log in</button>
                    </form>
                </div>
         </div>
        </main>
    )
}

export default LoginFormulario;
