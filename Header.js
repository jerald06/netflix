import React, { useEffect, useState } from 'react';
import './Header.css';
function Header ()
{
    const [ show, setShow ] = useState( false );
    useEffect( () =>
    {
        window.addEventListener( "scroll", () =>
        {
            if ( window.scrollY > 100 )
            {
                setShow( true )
            }
            else
            {
                setShow( false )
            }
        } )
        /*   return () =>
           {
               window.removeEventListener( "scroll" )
           }
           */
    }, [] )

    return (
        <div className={ `header ${ show && "header_black" }` }>
            <img className='header_logo'
                src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
                alt=''
            />
            <img className='header_userIcon'
                src='https://download.logo.wine/logo/Tencent_QQ/Tencent_QQ-Logo.wine.png'
                alt=''
            />
        </div>
    );
}

export default Header
