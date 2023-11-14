import '../styles/Banner.css'
import logo from '../assets/logo.png'
import React from 'react';

function Banner() {
    return (
        <div>
         {/* style={{
            color: 'black',
            textAlign: 'right',
            padding: 32,
            borderBottom: 'solid 3px black'
        }} */}
            <img src={logo} alt='La maison jungle' className='lmj-logo'/>
            <h1>La maison jungle</h1>
        </div>
    )
}

export default Banner;