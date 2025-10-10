import React from 'react';

class Header extends React.Component{

    render(){

        return(
            <header>
                <div className='header-logo'>
                    <img src="logo"></img>
                </div>
                <div className='header-enlaces'>
                 <a href=''>Series</a>
                 <a href=''>Movies</a>
                 <a href=''>News</a>
                 <a href=''>Contact</a>
                 <a href=''>Login</a>
                </div>
            </header>
        )
    }
}

export  default Header;