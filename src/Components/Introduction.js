import React, { useEffect, useRef } from 'react'
// import coding from './../Image/coding.mp4'

function Introduction({ AddComponentHeight }) {
    return (
        <>
            <Image AddComponentHeight={AddComponentHeight} />
            {/* <Video /> */}
        </>
    )
}

function Image({ AddComponentHeight }) {
    const ref = useRef(null);
    useEffect(() => {
        AddComponentHeight('Introduction', ref.current?.clientHeight)
    }, [])
    return (
        <div ref={ref} className={' back-img h-screen  bg-cover bg-center  '}>
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

                    <div className=" hidden absolute lg:flex justify-end items-center right-20 h-52 w-36 box  ">
                        <span className='px-2 mr-5 pb-1 hide  bg-gray-800 font-serif font-semibold'>My Resume</span>
                        
                        <div className="arrow"></div>
                    </div>

                    <div className=" absolute bottom-8   flex justify-center  items-end  h-32 w-36 box  ">

                        <div className="resumeArrow  ">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
               
            </div >
        </div >)
}


// function Video() {
//     return (
//         <div className=' baa h-full  bg-cover bg-center  '>
//             <div className='absolute h-full w-full text-white text-3xl flex justify-center items-center px-9 border-2'>
//                 <div className='  border-2 border-red-400 justify-center items-center'>
//                     <h1>
//                         Hello, my name is Pradhyumn Soni
//                     </h1>
//                     <div className='bg-white h-1 mx-10 '></div>
//                     <h2>

//                         SOFTWARE ENGINEER
//                     </h2>
//                     <h3>
//                         Remotely available IST−10 to IST−20. sonipradhyumn@gmail.com
//                     </h3>
//                 </div>

//             </div>
//             <video className='' autoPlay muted loop id="myVideo" src={coding} type="video/mp4" ></video>

//         </div>
//     )
// }

export default Introduction
