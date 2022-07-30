import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function ContactMe() {
    return (
        <div className='grid w-full h-screen border justify-center items-center'>
            <div>
                <h1>Contact Me</h1>
                <h5><p>Do you speak Hindi? It's ok if you don't, </p>
                    I speak English too.</h5>
            </div>
            <div className='flex justify-between w-40 border-2'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
            </div>
            <h2> Send an Email</h2>
            <div>
                <input className='border' placeholder=' name'></input>
                <input className='border' placeholder=' Email'></input>
            </div>
            <input className='border' placeholder=' subject'></input>
            <input className='border' placeholder=' message'></input>
            <button className='border bg-blue-200'>Send message</button>
        </div>
    )
}

export default ContactMe
