import React from 'react'
import Header from './Header'
// import { ReactComponent as ReactLogo } from '../public/A1.svg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import coding from './../Image/coding.mp4'

// video    https://youtu.be/4DAbnHv6VHs
// image    https://www.dreamstime.com/code-editor-using-react-library-capture-snippets-extension-image231175784
// best image https://wallpaperaccess.com/code-4k    

// for animation arrow          https://designdrastic.com/post/demo/scroll-down-button-design-and-animation-with-html-and-css
// - best all arrow animation-  `https://freefrontend.com/css-arrows/
//                              https://codepen.io/MarekZeman91/pen/vfaeL

function Introduction() {
    return (
        <>
            <Image />
            {/* <Video /> */}
        </>
    )
}


function Image() {
    return (
        <div className={' back-img h-screen  bg-cover bg-center  '}>
            <div className='layer h-full w-full'>
                <div className='absolute h-full w-full text-white  grid place-items-center   px-9 '>
                    <div className=' border-red-400 justify-center text-2xl lg:text-5xl items-center font-serif font-semibold '>
                        <h1 className='text-center py-3'>
                            Hello, I'm <span className='text-red-500'>Pradhyumn Soni</span>
                        </h1>
                        <h2 className='border-t-4 text-center py-3'>
                            Full-stack web developer
                        </h2>
                    </div>


                    {/* <button className='absolute right-0 bg-yellow-500 border-2'>MY RESUME</button> */}

                    <div className=" hidden absolute lg:flex justify-end items-center right-20 h-52 w-36 box  ">
                        <span className='px-2 mr-5 pb-1 hide  bg-gray-800 font-serif font-semibold'>My Resume</span>
                        {/* <div className="  arrowtest-east"></div> */}
                        <div className="arrow"></div>
                        {/* <div class="resumeArrow">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div> */}

                        {/* <span className='animated-arrow' href='https://google.com'>
                            <span className='the-arrow -left'>
                                <span className='shaft'></span>
                            </span>
                            <span className='main'>
                                <span className='text'>
                                    My Resume
                                </span>
                                <span className='the-arrow -right'>
                                    <span className='shaft'></span>
                                </span>
                            </span>
                        </span> */}
                    </div>


                    {/* <span className='mX-1 bg-red-400'> welcome to Introduction</span> */}
                    {/* <img src= alt="React Logo" /> */}
                    {/* <ReactLogo /> */}
                    {/* <A1 /> */}
                    <div className=" absolute bottom-8   flex justify-center  items-end  h-32 w-36 box  ">
                        {/* <span className='px-2 hide text-lg font-serif font-semibold bg-gray-900'>My Resume</span> */}
                        {/* <div className="  arrowtest-south"></div> */}
                        <div class="resumeArrow  ">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h1>  Scroll up</h1>

                    </div>
                </div>
                {/* <h4 className='absolute text-white text-left ml-5 bottom-10'>
                    Remotely available IST−10 to IST−20 @ <span className='text-red-400'>sonipradhyumn@gmail.com</span>
                </h4> */}
            </div >
        </div >)
}


function Video() {
    return (
        <div className=' baa h-full  bg-cover bg-center  '>


            <div className='absolute h-full w-full text-white text-3xl flex justify-center items-center px-9 border-2'>
                <div className='  border-2 border-red-400 justify-center items-center'>
                    <h1>
                        Hello, my name is Pradhyumn Soni
                    </h1>
                    <div className='bg-white h-1 mx-10 '></div>
                    <h2>

                        SOFTWARE ENGINEER
                    </h2>
                    <h3>
                        Remotely available IST−10 to IST−20. sonipradhyumn@gmail.com
                    </h3>
                </div>




                {/* <span className='mX-1 bg-red-400'> welcome to Introduction</span> */}
                {/* <img src= alt="React Logo" /> */}
                {/* <ReactLogo /> */}
                {/* <A1 /> */}

            </div>
            <video className='' autoPlay muted loop id="myVideo" src={coding} type="video/mp4" ></video>
            {/* </video> */}

        </div>
    )
}
export default Introduction
