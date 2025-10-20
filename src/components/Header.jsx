import React from 'react';

class Header extends React.Component {

    render() {
        const { icons } = this.props;

        const iconsNav = icons.map((icon, index) => (

            <div key={index} className='flex flex-col items-center'>
                <a href='' className='mr-4'  dangerouslySetInnerHTML={{ __html: icon.tag }}/>
                <p>{icon.name}</p>
            </div>

        ));

        return (
            <header className='bg-blue-900 mb-36 h-28 flex w-screen '>
                <div className='header-logo'>
                    <img src="/logoitbflix.png" className='w-36 h-28 mr-16'></img>
                </div>

                <div className='p-2 w-full flex justify-evenly items-center' >
                    {/*enlances del nav */}
                   {iconsNav}
                </div>
            </header>

        )
    }
}

export default Header;