// Kalian bisa menambahkan CSS di src/components/Header.css
import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <>
            <h1>Call a friend</h1>
            <p>your friendly contact app</p>
            <hr className="Liner" />
        </>
    )
}

export default Header;