import '../styles/Banner.css'
import logo from '../assets/logo.png'
import React from 'react';

function Banner({ children }) {
    return (
        <div className='lmj-banner'>
            {children}
        </div>
    )
}

export default Banner;