import React, { useState, useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function ContactMe1({ AddComponentHeight }) {
    const [ContactForm, setContactForm] = useState({
        name: "", email: "", subject: "", message: ""
    });
    const [changeDiv, setChangeDiv] = useState(false);
    const [currentPlaceholderNumber, setCurrentPlaceholderNumber] = useState(0);
    let contactPlaceholder = ["Enter your name", "Put your email address", "Now subject", "Write your awesome message :)"];

    const ref = useRef(null);

    useEffect(() => {
        AddComponentHeight('ContactMe', ref.current?.clientHeight)
    }, [])

    function SaveUserEnteredData(input) {

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

    function changeInput() {
        setChangeDiv(true);
        setCurrentPlaceholderNumber(currentPlaceholderNumber + 1); document.getElementById("input").value = '';
        setTimeout(function () {
            setChangeDiv(false);
        }, 500);
    }
    return (

        <div ref={ref} className='cursor-default  grid w-full h-screen border justify-center items-center p-9 contact-img    bg-cover bg-fixed bg-top   ' >

            <div>
                <h1 className="  work-width font-serif italic text-neutral-900 font-semibold text-2xl lg:text-4xl    ">Get in touch </h1>

            </div>

            <div className=' flex justify-center items-center text-center '>
                <h2 className=' font-serif italic'>
                    <p className='text-3xl'>Do you speak Hindi ?  It's ok if you don't, </p>
                    <p className='text-3xl'> I speak English too.</p>
                    <br></br>
                    <p className='text-xl'>Send me an Email</p>
                </h2>
            </div>

            <div className='  grid justify-center items-center text-center  '>
                {currentPlaceholderNumber >= 1 ?
                    <p className='mt-1 m-4 font-serif italic  text-2xl '> Hi {ContactForm.name}</p>
                    :
                    <p className='mt-1 m-4 h-10 font-serif text-2xl '> </p>
                }
                <div className='flex justify-center items-center '>
                    <input
                        id='input'
                        onChange={(e) => SaveUserEnteredData(e.target.value)}
                        className=' check text-black  border-slate-900 h-14 w-[34rem] text-center font-serif placeholder-black placeholder:font-serif placeholder:text-2xl'
                        style={changeDiv ? { "backgroundPosition": "left" } : {}}
                        onKeyPress={(event) => { if (event.key === 'Enter') { currentPlaceholderNumber < 3 ? changeInput() : ClearForm() } }}
                        placeholder={changeDiv ? "Saving..." : contactPlaceholder[currentPlaceholderNumber]}>
                    </input>
                </div>

                {currentPlaceholderNumber < 3 &&
                    <div className='flex justify-center m-10  '>
                        <button className='border-4 w-40 h-10 flex justify-center items-center text-center text-white bg-slate-800 font-serif  text-xl' onClick={() => {
                            changeInput();
                        }}>Next</button>
                    </div>

                }

                {currentPlaceholderNumber === 3 && ContactForm.message != '' &&
                    <div className='flex justify-center m-10'>
                        <button className=' border-4  w-44 h-10 flex justify-center items-center text-white text-center bg-slate-900 font-serif  text-xl' onClick={() => { ClearForm() }} >Send message</button>

                    </div>

                }

                {currentPlaceholderNumber === 3 && ContactForm.message == '' &&
                    <div className='flex justify-center w-64 h-10 m-10'>
                    </div>
                }

            </div>

            <br></br>

            <div className='w-full grid justify-end'>
                <h1 className='font-serif italic text-xl '>Let's get social</h1>
                <div className='flex justify-between w-40 animate-charcter'>
                    <a href="https://www.linkedin.com/in/pradhyumn-soni-210131174" target="_blank"> <FaLinkedinIn />    </a>
                    <a href="https://github.com/sonipradhyumn" target="_blank"><FaGithub /> </a>
                    <a href="https://instagram.com/pradhyumn_soni?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram /> </a>
                    <a href="https://twitter.com/soni_pradhyumn" target="_blank"><FaTwitter /> </a>
                    <a href="https://www.facebook.com/pradhyumn.soni.7" target="_blank"><FaFacebookF /> </a>
                </div>

            </div>
           

        </div >
    )
}

export default ContactMe1
