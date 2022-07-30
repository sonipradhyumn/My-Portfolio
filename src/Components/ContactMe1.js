import React, { useState, useEffect, useRef } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import up_arrow from '../Image/up_arrow.svg'

function ContactMe1({ AddComponentHeight }) {
    const [ContactForm, setContactForm] = useState({
        name: "", email: "", subject: "", message: ""
    });
    const [changeDiv, setChangeDiv] = useState(false);
    const [currentPlaceholderNumber, setCurrentPlaceholderNumber] = useState(0);
    const [error, setError] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [warning, setWarning] = useState(false);
    const [WarningMessage, setWarningMessage] = useState('Please Enter your Name');
    const ref = useRef(null);

    let contactPlaceholders = ["Enter your name", "Put your email address", "Now subject", "Write your awesome message :)"];
    let requestMessage = ['Please Enter your Name.', 'Please Enter your Email.', 'Please Enter your Email Subject.', 'Please Type your Message.'];
    let validationMessage = ['Name Should Contain Only Alphabets!.', "Oops!! You Entered Invalid Email Address.", '', ''];
    let pickRegex = [/^[\p{L} ,.'-]+$/u, /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/];

    useEffect(() => {
        AddComponentHeight('ContactMe', ref.current?.clientHeight)
    }, [])

    function getCurrentPlaceholderNameByNumber(number) {
        switch (number) {
            case 0: return 'name';
            case 1: return 'email';
            case 2: return 'subject';
            case 3: return 'message';
            default: return 'name';
        };
    }

    function SaveUserEnteredData(input) {
        let currentPlaceholderType = getCurrentPlaceholderNameByNumber(currentPlaceholderNumber)
        setContactForm({ ...ContactForm, [currentPlaceholderType]: input });

    }
    function ClearForm() {
        document.getElementById("contactInput").value = '';
        setCurrentPlaceholderNumber(0);
        setContactForm({
            name: "", email: "", subject: "", message: ""
        });

        setTimeout(function () {
            // setMessageSuccess(true)
            // setSuccessMessage('Hurray Email Sent')
            setError(true)
            setErrorMessage('Email Service Is Down !!')
        }, 1000);

        setTimeout(function () {
            // setMessageSuccess(false)
            // setSuccessMessage('')
            setError(false)
            setErrorMessage('')
        }, 4000);
    }

    function CheckEnteredInput() {
        let currentPlaceholderType = getCurrentPlaceholderNameByNumber(currentPlaceholderNumber)

        if (ContactForm[currentPlaceholderType] === '') {
            setError(true);
            setErrorMessage(requestMessage[currentPlaceholderNumber]);
        } else if (!ContactForm[currentPlaceholderType].match(pickRegex[currentPlaceholderNumber])) {
            setError(true);
            setErrorMessage(validationMessage[currentPlaceholderNumber]);
        } else {
            changeInputPlaceholderName();
        }
    }

    function changeInputPlaceholderName() {
        setError(false);
        setErrorMessage('');
        setChangeDiv(true);
        setCurrentPlaceholderNumber(currentPlaceholderNumber + 1);
        document.getElementById("contactInput").value = '';
        setTimeout(function () {
            setChangeDiv(false);
        }, 500);
    }

    return (
        <div ref={ref} className=' cursor-default text-white  w-full h-screen justify-center items-center  contact-img bg-cover bg-fixed bg-top ' >
            <div className='layer-2 w-full h-full p-9'>
                <div className='flex items-center justify-between mb-10'>
                    <h1 className="  work-width font-serif italic  font-semibold text-2xl lg:text-4xl    ">Get in touch </h1>
                    <span className=' hidden md:flex text-center font-serif italic text-xl '> <span className='w-44'>Let's get social</span> <img className='h-8 w-8' src={up_arrow}></img> </span>
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
                    {currentPlaceholderNumber >= 1
                        ? <p className='mt-1 m-4 font-serif italic  text-2xl '> Hi {ContactForm.name}</p>
                        : <p className='mt-1 m-4 h-10 font-serif text-2xl '> </p>
                    }
                    <div className='h-20 justify-center items-center text- '>
                        <input
                            id='contactInput'
                            onChange={(e) => SaveUserEnteredData(e.target.value)}
                            className=' contact-input   border-slate-900 h-14 w-[23rem] md:w-[34rem] text-center font-serif placeholder-black placeholder:font-serif placeholder:text-2xl'
                            style={changeDiv ? { "backgroundPosition": "left" } : {}}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    currentPlaceholderNumber < 3 ? CheckEnteredInput() : ContactForm.message !== "" ? ClearForm() :
                                        <></>
                                }
                            }}
                            placeholder={changeDiv ? "Saving..." : contactPlaceholders[currentPlaceholderNumber]}>
                        </input>
                        {error && <h2 className='bg-red-900' > {errorMessage}</h2>}
                        {messageSuccess && <h2 className='bg-lime-800'> {successMessage}</h2>}
                    </div>
                    {currentPlaceholderNumber < 3 &&
                        <div className='flex justify-center m-10  '>
                            <button className=' w-32 h-10 flex justify-center items-center text-center text-white bg-zinc-900 font-serif  text-xl' onClick={() => {
                                CheckEnteredInput();
                            }}>Next</button>
                        </div>
                    }
                    {currentPlaceholderNumber === 3 && ContactForm.message != '' &&
                        <div className='flex justify-center m-10'>
                            <button className=' b  w-36 h-10 flex justify-center items-center text-white text-center bg-slate-900 font-serif  text-xl' onClick={() => { ClearForm() }} >Send message</button>
                        </div>

                    }
                    {currentPlaceholderNumber === 3 && ContactForm.message == '' &&
                        <div className='flex justify-center w-64 h-10 m-10' />
                    }
                </div>
                <br />
                {/* <div className='w-full grid justify-end'>
                    <h1 className='font-serif italic text-xl '>Let's get social</h1>
                    <div className='flex justify-between w-40 animate-charcter'>
                        <a href="https://www.linkedin.com/in/pradhyumn-soni-210131174" target="_blank"> <FaLinkedinIn />    </a>
                        <a href="https://github.com/sonipradhyumn" target="_blank"><FaGithub /> </a>
                        <a href="https://instagram.com/pradhyumn_soni?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram /> </a>
                        <a href="https://twitter.com/soni_pradhyumn" target="_blank"><FaTwitter /> </a>
                        <a href="https://www.facebook.com/pradhyumn.soni.7" target="_blank"><FaFacebookF /> </a>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default ContactMe1
