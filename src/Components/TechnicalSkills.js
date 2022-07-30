import React, { useEffect, useRef } from 'react'
import BarChar from './BarChar'
import { Wave, Random } from 'react-animated-text';


// i will use -
//      https://www.npmjs.com/package/react-animated-text
// may be in graph
// https://www.adhamdannaway.com/about


function TechnicalSkills({ AddComponentHeight }) {

    const ref = useRef(null);

    useEffect(() => {
        AddComponentHeight('TechnicalSkills', ref.current?.clientHeight)
    }, [])

    return (

        <div ref={ref} className='justify-center bg-zinc-100 items-center w-full h-full p-9'>
            <h1 className="font-serif italic text-neutral-900 font-semibold text-2xl lg:text-4xl    cursor-default ">Technical Skills </h1>
            <div className='w-full h-full  flex  justify-center items-center py-16'>
                <BarChar />
            </div>
        </div>
    )
}

export default TechnicalSkills
