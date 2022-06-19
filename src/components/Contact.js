// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css'
import React from 'react';

const Contact = ({ data }) => {
    return (
        <div className='ProfileWrapper'>
            <img className='ImgProfile' src={data.photo} />
            <div>
                <h2>{data.name}</h2>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;