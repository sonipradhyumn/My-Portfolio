import React, { useEffect, useRef, useState } from 'react'
import { FaRocket, FaMobileAlt, FaReact, FaBrain, FaRegCircle, FaCircle } from 'react-icons/fa';
import { Wave, Random } from 'react-animated-text';
import '../App.css'

function AboutMe({ AddComponentHeight }) {
    const [bioLength, setBioLength] = useState(4);
    const [textAnimation, setTextAnimation] = useState({ previous: 0, next: 1 })
    const ref = useRef(null);

    const animateText = (number) => {
        setTextAnimation({ previous: bioLength, next: number })
        const timer = setTimeout(() => {
            setBioLength(number);
        }, 1000);
    }

    useEffect(() => {
        AddComponentHeight('AboutMe', ref.current?.clientHeight)
    }, [])

    return (
        <div ref={ref} className='bg-zinc-100 h-full p-9 pb-10 w-full grid grid-row-3 justify-center items-center   '>
            <h1 className="font-serif italic text-neutral-900 font-semibold text-2xl lg:text-4xl pl-3  cursor-default ">About Me...</h1>
            <div className=' w-full h-60 p-10 flex items-center justify-between text-sm text-zinc-700 font-serif font-extralight  lg:text-2xl cursor-default'>
                {{
                    1:
                        <div className='w-full min-w-[88vw] max-w-[88vw]  text-center '>
                            <span className='w-full  '>
                                {textAnimation.previous === 1 ?
                                    <span className='tracking-wide About_me text-2xl'> < Wave className='' text="I'm a Passionate developer , I build things for the web." iterations={1} effect="fadeOut" speed={100} effectChange={1.0} /></span>
                                    :
                                    <span className='tracking-wide About_me text-2xl'>I'm a Passionate developer, I build things for the web.</span>
                                }
                            </span>
                        </div>,
                    2:
                        <span className='w-full min-w-[88vw] max-w-[88vw] text-justify '>
                            <span className='font-serif  '>
                                {textAnimation.previous === 2 ?
                                    <span className='tracking-wide About_me text-2xl'>< Wave className='' text=" Skilled at writing well-designed, testable and efficient code using current best practices in Web development." iterations={1} effect="fadeOut" speed={400} effectChange={1.0} /></span>
                                    :
                                    <span className='tracking-wide About_me text-2xl'>Skilled at writing well-designed, testable and efficient code using current best practices in Web development.</span>
                                }


                            </span>
                        </span>,
                    3:
                        <span className='w-full min-w-[88vw] max-w-[88vw] text-justify '>
                            <span>
                                {textAnimation.previous === 3 ?
                                    <span className='tracking-wide About_me text-2xl'>< Wave text="  I am a JavaScript developer who is proficient in both front-end and back-end frameworks. My passion lies in learning about the latest technologies." iterations={1} effect="fadeOut" speed={500} effectChange={1.0} /></span>
                                    :
                                    <span className='tracking-wide About_me text-2xl'>I am a JavaScript developer who is proficient in both front-end and back-end frameworks. My passion lies in learning about the latest technologies.</span>
                                }


                            </span>
                        </span>,
                    4:
                        <span className=' w-full min-w-[88vw] max-w-[88vw] text-justify '>
                            {textAnimation.previous === 4 ?
                                <span className=' tracking-wide About_me text-2xl'>< Wave text="I like building awesome software. I've built websites and corporate softwares. I also enjoy turning complex problems into simple, beautiful and intuitive designs.
                                        When I'm not pushing code, you'll find me cooking, gardening or playing badminton." iterations={1} effect="fadeOut" speed={600} effectChange={1.0} />
                                </span> :
                                <span className=" tracking-wide About_me text-2xl">
                                    <span>I like building awesome software. I've built websites and corporate softwares. I also enjoy turning complex problems into simple, beautiful and intuitive designs.
                                        When I'm not pushing code, you'll find me cooking, gardening or playing badminton.</span>
                                </span>
                            }

                        </span>,
                    5:
                        <span className='w-full min-w-[88vw] max-w-[88vw] text-justify '>
                            {textAnimation.previous === 5 ?
                                <span className='tracking-wide About_me text-2xl'> < Wave text=" Hello! I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing  — turns out building todo list taught me a lot about JS , HTML & CSS!
                                     Here are a few technologies I've been working with recently:
                                        JavaScript (ES6+) ,React & Node.js
                                    " iterations={1} effect="fadeOut" speed={700} effectChange={1.0} /></span>
                                :
                                <span className='tracking-wide About_me text-2xl'>  <span> Hello! I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I decided to try editing  — turns out building todo list taught me a lot about JS , HTML & CSS!
                                    Here are a few technologies I've been working with recently:
                                    <span className='text-red-900'> JavaScript (ES6+) , </span>
                                    <span className='text-red-900'> React</span> {'&'}
                                    <span className='text-red-900'> Node.js</span>
                                </span>
                                </span>
                            }
                        </span>,
                }[bioLength]
                }
            </div>
            <div className='w-full justify-center items-center text-center'>
                <h2 className='font-serif font-extralight cursor-default' >Adjust Bio length:</h2>
                <div className='w-full mt-4 h-15 px-5 grid justify-center items-center '>
                    <div className='flex px-2 justify-between w-64 '>
                        <span className=' cursor-pointer' onClick={() => { animateText(1) }}> {bioLength === 1 ? <FaCircle /> : <FaRegCircle />}<span className=' -ml-6 absolute font-serif text-gray-700' >Shortest</span></span>
                        <span className=' cursor-pointer' onClick={() => { animateText(2) }}> {bioLength === 2 ? <FaCircle /> : <FaRegCircle />}</span>
                        <span className=' cursor-pointer' onClick={() => { animateText(3) }}> {bioLength === 3 ? <FaCircle /> : <FaRegCircle />}</span>
                        <span className=' cursor-pointer' onClick={() => { animateText(4) }}> {bioLength === 4 ? <FaCircle /> : <FaRegCircle />}</span>
                        <span className=' cursor-pointer' onClick={() => { animateText(5) }}> {bioLength === 5 ? <FaCircle /> : <FaRegCircle />}<span className='-ml-6 absolute font-serif text-gray-700' >Longest</span></span>
                    </div>
                </div>
            </div>
            <div className='hidden lg:grid px-5 py-2'>
                <h1 className="font-serif italic font-semibold text-2xl lg:text-3xl py-10 cursor-default">I Prioritise</h1>
                <div className='h-64 sm:flex  items-center justify-between '>

                    {/* 1st block */}
                    <div className=' border-4  border-slate-100 bg-small layer mr-1 text-center p-5 w-72 shadow-md transition-transform hover:-translate-y-5'>
                        <div className='flex justify-center '>
                            <span className='h-16 w-16 m-4 transform rotate-45  bg-zinc-200 flex justify-center items-center '>
                                <FaMobileAlt className='transform -rotate-45 h-8 w-8' />
                            </span>
                        </div>
                        <div >
                            <span className='block font-serif font-semibold py-2 cursor-default'>  Responsive</span>
                            <span className='font-serif cursor-default'>My layouts will work on any device, big or small.</span>
                        </div>
                    </div>

                    {/* 2st block */}
                    <div className='border-4  border-slate-100 bg-small mx-1 text-center p-5 w-72 shadow-md transition-transform hover:-translate-y-5'>
                        <div className='flex justify-center '>
                            <span className='h-16 w-16 m-4 transform rotate-45 bg-zinc-200 flex justify-center items-center'>
                                <FaReact className='transform -rotate-90 h-8 w-8 App-logo' />
                            </span>
                        </div>
                        <div>
                            <span className='block font-serif font-semibold py-2 cursor-default'> Dynamic</span>
                            <span className='font-serif cursor-default'>Websites don't have to be static, I love making pages come to life.</span>
                        </div>
                    </div>

                    {/* 3st block */}
                    <div className=' border-4  border-slate-100 bg-small mx-1 text-center p-5 w-72 shadow-md transition-transform hover:-translate-y-5'>
                        <div className='flex justify-center '>
                            <span className='h-16 w-16 m-4 transform rotate-45 bg-zinc-200 flex justify-center items-center'>
                                <FaRocket className='transform -rotate-90 h-8 w-8' />
                            </span>
                        </div>
                        <div>
                            <span className='block font-serif font-semibold py-2 cursor-default'> Fast</span>
                            <span className='font-serif cursor-default'>Fast load times and lag free interaction, my highest priority</span>
                        </div>
                    </div>

                    {/* 4st block */}
                    <div className='border-4  border-slate-100  bg-small ml-1 text-center p-5 w-72 shadow-md transition-transform hover:-translate-y-5 '>
                        <div className='flex justify-center '>
                            <span className='h-16 w-16 m-4 transform rotate-45 bg-zinc-200 flex justify-center items-center'>
                                <FaBrain className='transform -rotate-45 h-8 w-8' />
                            </span>
                        </div>
                        <div >
                            <span className='block font-serif font-semibold py-2 cursor-default'>Intuitive</span>
                            <span className='font-serif cursor-default'>Strong preference for easy to use, intuitive UX/UI.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutMe
