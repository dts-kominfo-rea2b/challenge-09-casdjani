// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css'
import React from 'react';

const Contact = ({ value }) => {
    return (
        <div className='ProfileWrapper'>
            <img className='ImgProfile' src={value.photo} />
            <div>
                <h2>{value.name}</h2>
                <p>{value.phone}</p>
                <p>{value.email}</p>
            </div>
        </div>
    )
}

export default Contact;