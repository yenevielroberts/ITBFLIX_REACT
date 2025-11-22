import { redirect} from 'react-router-dom';
import data from '../db/users.json'
import {useState } from 'react'
import e from 'cors';


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
     * errors
     *- Objecto donde cada clave(email, password) puede contener un mensaje de error tipo string.
     *- Si no hay errors para un campo, entonces la clave no existira o tendra un valor nulo
     */
    const [errors, setErrors]=useState([])


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
            setErrors({['credenciales']:message}) 
        }
       
        return message
    }

    /**
     * handleChange
     * - Actualiza el formData por campo
     * @param {*} userEmail 
     * @param {*} password 
     */
    const handleChange=(userEmail, password)=>{
    
        // Actualizo el valor del formulario
        //Hago una copia de los valores previos y tambíen agrego un valor nuevo para [name] que luego se compara con el valor previo y si es diferente se sobreescribe
        setFormData((prev)=>({...prev,['email']:userEmail}));
        setFormData((prev)=>({...prev,['password']:password}));

        setErrors(null);

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
            
            setErrors({['credenciales']:"Usuario logeado"})
        }
    }


    const renderInput=(id, label,type="text")=>(

        <div>
            <label htmlFor={id} className=''>
                {label}
            </label>
            <input type={type} id={id} name={formData[id]} onChange={handleChange} required/>
        </div>
    )

    return(

        <main>
             <div className="flex justify-center">
            
            <div className="flex flex-col bg-white w-6/12 h-96 justify-center items-center rounded-lg">
                <h1 className="text-2xl">Log in</h1>
                {errors &&(
                        <div>
                            {errors.credenciales}
                        </div>
                    )}
                <form onSubmit={handleSubmit}className="flex flex-col">
                    {renderInput("userEmail","User email","email")}
                    {renderInput("userPassword","User password","password")}
                    <button type='submit'>Log in</button>
                </form>
            </div>
         </div>
        </main>
    )
}

export default LoginFormulario;
