import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function ContactMe1() {
    const [ContactForm, setContactForm] = useState({
        name: "", email: "", subject: "", message: ""
    })
    const [currentPlaceholderNumber, setCurrentPlaceholderNumber] = useState(0)
    let contactPlaceholder = ["Enter your name", "now your email address", "now subject", "now write your awesome message :)"]
    // console.log('currentPlaceholderNumber->', currentPlaceholderNumber);
    // console.log('ContactForm----', ContactForm);
    function SaveUserEnteredData(input) {
        // console.log('input>>', input)
        let currentIndexOfPlaceholder = 'name'
        switch (currentPlaceholderNumber) {
            case 0: currentIndexOfPlaceholder = 'name'; break;
            case 1: currentIndexOfPlaceholder = 'email'; break;
            case 2: currentIndexOfPlaceholder = 'subject'; break;
            case 3: currentIndexOfPlaceholder = 'message'; break;
            default: currentIndexOfPlaceholder = 'name'; break;
        }

        setContactForm({ ...ContactForm, [currentIndexOfPlaceholder]: input })

    }
    function ClearForm() {
        document.getElementById("input").value = '';
        setCurrentPlaceholderNumber(0)
        setContactForm({
            name: "", email: "", subject: "", message: ""
        })

    }

    return (

        <div className='grid w-full h-screen border justify-center items-center px-9'>
            <div>
                <h1>Get in touch</h1>
                <h5><p>Do you speak Hindi? It's ok if you don't, </p>
                    I speak English too.</h5>
            </div>


            <div>
                <h2> Send an Email</h2>
                <div>
                    <input
                        id='input'
                        onChange={(e) => SaveUserEnteredData(e.target.value)}
                        // onFocus={(e) => e.target.value = ''}
                        className='border'
                        placeholder={contactPlaceholder[currentPlaceholderNumber]}>
                    </input>
                </div>
                {currentPlaceholderNumber < 3 &&
                    <button className='border bg-blue-200' onClick={() => {
                        setCurrentPlaceholderNumber(currentPlaceholderNumber + 1); document.getElementById("input").value = '';
                    }}>Next</button>
                }
                {currentPlaceholderNumber === 3 && ContactForm.message != '' &&
                    <button className='border bg-blue-200' onClick={() => { ClearForm() }} >Send message</button>
                }
            </div>
            <div>
                <h1>Let's get social</h1>
                <div className='flex justify-between w-40 border-2'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedinIn />

                </div>
            </div>

        </div >


    )
}

export default ContactMe1
