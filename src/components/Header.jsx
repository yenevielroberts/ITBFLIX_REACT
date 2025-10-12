import React from 'react';

class Header extends React.Component{

    render(){

        return(
            <header class="bg-blue-900 mb-36 h-28 flex">
                <div className='header-logo'>
                    <img src="public\logoitbflix.png " class="w-36 h-28 mr-16 "></img>
                </div>
                <div className='header-enlaces' class="p-2 w-full flex justify-evenly items-center ">
                 <a href='' class="mr-4">Series</a>
                 <a href=''class="mr-4">Movies</a>
                 <a href=''class="mr-4">News</a>
                 <a href=''class="mr-4">Contact</a>
                 <a href=''class="mr-4">Login</a>
                </div>
            </header>
            
        )
    }
}

export  default Header;