import React from 'react';

class Header extends React.Component {

    render() {
        const { icons } = this.props;

        const iconsNav = icons.map((icon, index) => (//Itero el array de objectos
          //Contenedor de icon y enlace
            <div key={index} className='flex flex-col items-center justify-center hover:text-yellow-300'>
                <a href='' className='mr-4 '  dangerouslySetInnerHTML={{ __html: icon.tag }}/>
                <p>{icon.name}</p>
            </div>

        ));

        return (
            <header className='bg-blue-900 mb-20 h-28 flex'>
                <nav className=' flex flex-row w-screen text-white'>
                    {/**Contenedor para el logo */}
                    <div className='header-logo'>
                    <img src="/logoitbflix.png" className='w-36 h-28 mr-16'></img>
                    </div>

                    {/*enlances del nav */}
                    <div className='p-2 w-full flex flex-row justify-evenly items-center' >
                    {iconsNav}
                    </div> 
                </nav>
            </header>
        )
    }
}

export default Header;