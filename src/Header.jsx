import React from 'react';

class Header extends React.Component{

    render(){

        return(
            <div className='header'>
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
            </div>
        )
    }
}

export  default Header;