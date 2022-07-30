import React, { useState, useEffect, useRef } from 'react'
import search from '../Image/facts/plant.gif'
import Tea from '../Image/facts/espresso.gif'
import Movie from '../Image/facts/video.gif'
import Gardening from '../Image/facts/plant.gif'
import Cooking from '../Image/facts/saucepan.gif'
import Clean from '../Image/facts/search.gif'
import Social from '../Image/facts/social-media.gif'
import Yoda from '../Image/facts/yoda.png'


function RandomFactsOfMe({ AddComponentHeight }) {
    const [gifNumber, setGifNumber] = useState(0)

    const ref = useRef(null);

    useEffect(() => {
        AddComponentHeight('RandomFactsOfMe', ref.current?.clientHeight)
        setFactGif(0);
    }, [])

    function setFactGif(number) {
        setGifNumber(number);
    }

    return (
        <div ref={ref} className='bg-white justify-center items-center w-full h-full p-9'>
            <h1 className="font-serif italic text-neutral-900 font-semibold text-2xl lg:text-4xl  cursor-default  ">Random Facts </h1>
            <div className='grid grid-cols-2 w-full h-screen  justify-between'>
                <div className='flex justify-center items-center p-40 '>

                    {{
                        0:
                            <img className='' src={Tea} alt="loading..." />,
                        1:
                            <img className='' src={Movie} alt="loading..." />,
                        2:
                            <img className='' src={Gardening} alt="loading..." />,
                        3:
                            <img className='' src={Cooking} alt="loading..." />,
                        4:
                            <img className='' src={Clean} alt="loading..." />,
                        5:
                            <img className='' src={Social} alt="loading..." />,
                        6:
                            <img className='' src={Yoda} alt="loading..." />,

                    }[gifNumber]
                    }


                </div>
                <div className='grid justify-center items-center py-10  cursor-default'>

                    <span onMouseOver={() => { setFactGif(0) }} className={`transition-transform hover:-translate-y-1 duration-500 block font-serif ml-16 text-center font-semibold p-5 shadow-md bg-gradient-to-r from-zinc-200 to-transparent ${gifNumber === 0 ? ' shadow-zinc-600' : ''}`} >
                        I drink a lot of tea
                    </span>
                    <span onMouseOver={() => { setFactGif(1); }} className={`transition-transform hover:-translate-y-1 block font-serif mr-16 text-center font-semibold p-5  bg-gradient-to-l from-zinc-200 to-transparent ${gifNumber === 1 ? 'shadow-md shadow-zinc-600' : 'shadow-lg'}`} >
                        I'm huge admirer of  <span className='underline'>MCU</span>
                    </span>
                    <span onMouseOver={() => { setFactGif(2); }} className={`transition-transform hover:-translate-y-1 block font-serif ml-16 text-center font-semibold p-5 shadow-md bg-gradient-to-r from-zinc-200 to-transparent ${gifNumber === 2 ? 'shadow-zinc-600' : ''}`}>
                        Gardening is my zen time
                    </span>
                    <span onMouseOver={() => { setFactGif(3); }} className={`transition-transform hover:-translate-y-1 block font-serif mr-16 text-center font-semibold p-5  bg-gradient-to-l from-zinc-200 to-transparent ${gifNumber === 3 ? 'shadow-md shadow-zinc-600' : 'shadow-lg'}`}>
                        I love to cook (and eat)
                    </span>
                    <span onMouseOver={() => { setFactGif(4); }} className={`transition-transform hover:-translate-y-1 block font-serif  ml-16 text-center font-semibold p-5 shadow-md bg-gradient-to-r from-zinc-200 to-transparent ${gifNumber === 4 ? 'shadow-zinc-600' : ''}`}>
                        I'm a bit of a clean freak
                    </span>
                    <span onMouseOver={() => { setFactGif(5); }} className={`transition-transform hover:-translate-y-1 block font-serif mr-16 text-center font-semibold p-5  bg-gradient-to-l from-zinc-200 to-transparent ${gifNumber === 5 ? 'shadow-md shadow-zinc-600' : 'shadow-lg'}`}>
                        I'm slightly addicted to Twitter and instagram
                    </span>
                    <span onMouseOver={() => { setGifNumber(6); }} className={`transition-transform hover:-translate-y-1 block font-serif ml-16 text-center font-semibold p-5 shadow-md bg-gradient-to-r from-zinc-200 to-transparent ${gifNumber === 6 ? 'shadow-zinc-400' : ''}`}>
                        Yoda is my mentor
                    </span>
                </div>
            </div>
        </div >
    )
}

export default RandomFactsOfMe
