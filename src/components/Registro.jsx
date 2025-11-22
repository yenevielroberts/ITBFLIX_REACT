//Funciones auxiliares

/**
 * validarCorreo
 * - Comprueba el formato basico de un email con una expresión regex
 */
const validarCorreu = (correu) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correu);


const loginRegistro=()=>{

    return(
        <div className="flex justify-center">
            <div className="flex flex-col bg-white w-6/12 h-96 justify-center items-center rounded-lg">
                <h1 className="text-2xl">Log in</h1>
                <form className="flex flex-col">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" className=" border border-black rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" className=" border border-black rounded-lg mb-5"/>

                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" className=" border border-black rounded-lg mb-5"/>

                    <label for="confirmPassword">Confirmar contraseña</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" className=" border border-black rounded-lg "/>
                </form>
            </div>
         </div>
    )
}

export default Login