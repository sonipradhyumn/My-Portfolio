import React from 'react'
import { FaRocket, FaMobileAlt, FaReact, FaBrain } from 'react-icons/fa';


function AboutMe() {
    return (
        <div className='bg-red-400 h-screen px-9'>
            <div className='  h-full w-full grid grid-row-3 justify-center items-center border-2  '>
                <div className='h-1/2 w-full grid grid-cols-2'>
                    <div>

                        <h1>about.</h1>
                        <span>
                            <p>
                                I like building awesome software. I've built websites and corporate softwares. I also enjoy turning complex problems into simple, beautiful and intuitive designs.
                            </p>
                            <p>
                                When I'm not pushing code, you'll find me cooking, gardening or playing badminton.
                            </p>
                        </span>
                    </div>
                    <div className='flex justify-center items-center' >
                        <img className='  w-30 h-20' src='./pradhyumn.png'></img>
                    </div>
                </div>
                <div className='grid justify-center'>
                    <h1>I Prioritise</h1>
                    <div className=' grid sm:flex justify-center items-center justify-between'>
                        {/* 1st */}
                        <div className='border-2 text-center '>
                            <div className='flex justify-center '>
                                <span className='h-16 w-16 m-4 transform rotate-45 bg-white flex justify-center items-center '>
                                    <FaMobileAlt className='transform -rotate-45 h-8 w-8' />
                                </span>
                            </div>
                            <div >
                                <span className='block'>  Responsive</span>
                                <span>My layouts will work on any device, big or small.</span>
                            </div>
                        </div>
                        {/* 2st */}
                        <div className='border-2 text-center'>
                            <div className='flex justify-center '>
                                <span className='h-16 w-16 m-4 transform rotate-45 bg-white flex justify-center items-center'>
                                    <FaReact className='transform -rotate-90 h-8 w-8' />
                                </span>
                            </div>
                            <div>
                                <span className='block'> Dynamic</span>
                                <span>Websites don't have to be static, I love making pages come to life.</span>
                            </div>
                        </div>
                        {/* 3st */}
                        <div className='border-2 text-center'>
                            <div className='flex justify-center '>
                                <span className='h-16 w-16 m-4 transform rotate-45 bg-white flex justify-center items-center'>
                                    <FaRocket className='transform -rotate-90 h-8 w-8' />
                                </span>
                            </div>
                            <div>
                                <span className='block'> Fast</span>
                                <span>Fast load times and lag free interaction, my highest priority</span>
                            </div>
                        </div>
                        {/* 4st */}
                        <div className='border-2 text-center'>
                            <div className='flex justify-center '>
                                <span className='h-16 w-16 m-4 transform rotate-45 bg-white flex justify-center items-center'>
                                    <FaBrain className='transform -rotate-45 h-8 w-8' />
                                </span>
                            </div>
                            <div >
                                <span className='block'>Intuitive</span>
                                <span>Strong preference for easy to use, intuitive UX/UI.</span>
                            </div>
                        </div>





                    </div>
                </div>
                {/* <div>
                    <h1>about.</h1>
                    <span>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</span>
                </div> */}
            </div>




        </div>
    )
}

export default AboutMe
