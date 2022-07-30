import React, { useEffect, useRef } from 'react'
import 'react-vertical-timeline-component/style.min.css';
import Azilen from '../Image/workExperience/Azilen.jpeg'
import Tmdc from '../Image/workExperience/Tmdc.jpeg'

function WorkExperience({ AddComponentHeight }) {

    const ref = useRef(null);
    useEffect(() => {
        AddComponentHeight('WorkExperience', ref.current?.clientHeight)
    }, [])

    return (
        <div ref={ref} className=' h-full w-full overflow-hidden  justify-center items-center p-9'>
            <h1 className="font-serif italic text-neutral-900 font-semibold text-2xl lg:text-4xl  py-5  cursor-default ">Work Experience </h1>
            <TimeLine />
        </div>
    )
}

function TimeLine() {
    return (
        <div className=' flex justify-center items-center '>
            <div className=" w-full h-full text-center ">
                <div className="relative wrap p-10 h-full  no-scrollbar overflow-y-scroll scroll-p-40">
                    <div className=" absolute border-opacity-20 border-gray-700  h-5/6 border" style={{ left: "50%" }}></div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl p-1 w-8 h-8 rounded-full overflow-hidden">
                            {/* <h1 className="mx-auto text-white font-semibold text-lg">2</h1> */}
                            <a href="https://www.azilen.com/" target="_blank">  <img onClick={() => { }} className='rounded-full border-2' src={Azilen}></img></a>
                        </div>
                        <div className="order-1 bg-blue-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <a href="https://www.azilen.com/" target="_blank">  <h3 className="mb-1 font-bold font-serif text-gray-800 text-2xl">Azilen Technologies Pvt. Ltd.</h3></a>
                            <h4 className='mb-1 font-serif text-lg  cursor-default' >Associate Software Developer</h4>
                            <p className=" font-serif text-md leading-snug tracking-wide text-gray-900 text-opacity-100  cursor-default">  july 2021 - <u> present</u></p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 text-right"> </div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl p-1 w-8 h-8 rounded-full overflow-hidden">
                            {/* <h1 className="mx-auto font-semibold text-lg text-white">1</h1> */}
                            <a href="https://themoderndatacompany.com/" target="_blank"><img className=' rounded-full ' src={Tmdc}></img></a>
                        </div>
                        <div className="order-1 bg-gray-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <a href="https://themoderndatacompany.com/" target="_blank"> <h3 className="mb-1 font-bold font-serif text-gray-800 text-xl">The Modern Data Company</h3></a>
                            <h4 className='mb-1 font-serif text-lg  cursor-default' >Internship</h4>
                            <p className="text-md font-serif leading-snug tracking-wide text-gray-900 text-opacity-100  cursor-default">  March 2021 - june 2021</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default WorkExperience
