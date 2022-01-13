import React from 'react'

import BarChar from './BarChar'


import { Wave, Random } from 'react-animated-text';

/*{ 
 i will use -

    https://www.npmjs.com/package/react-animated-text

}*/

function TechnicalSkills() {



    return (
        // <div className='grid w-full h-screen bg-green-100 justify-center items-center'>
        //     <p>
        //         I've worked on Front end as well as on back end.
        //         For web applications I use Javascript.
        //         Whenever I need the most performance possible I obviously go with Next Js
        //         and finally when I am building prototypes or working on my hobby projects I fall back on React
        //     </p>
        //     <div className='flex justify-between w-full items-center px-20'>
        //         <span>
        //             Javascript
        //         </span>
        //         <span>
        //             Node.Js
        //         </span>
        //         <span>
        //             Nosql Databases
        //         </span>
        //         <span>
        //             Data Structures and Algorithms
        //         </span>
        //         <span>
        //             SDLC
        //         </span>
        //     </div>
        //     <h1 className='flex justify-center items-center'>
        //         MOST FREQUENTLY USED TOOLS
        //     </h1>
        //     <div className='grid grid-cols-2 w-full justify-center items-center '>


        //         <div className='grid  justify-center items-center'>
        //             <h1>
        //                 FRAMEWORKS AND ENGINES (LIBRARY)
        //             </h1>
        //             <span className='flex justify-center items-center'>
        //                 Next Js
        //             </span>
        //             <span className='flex justify-center items-center'>
        //                 React
        //             </span>
        //             <span className='flex justify-center items-center'>
        //                 Strapi
        //             </span>
        //             <span className='flex justify-center items-center'>
        //                 ...
        //             </span>

        //         </div>
        //         <div className='grid justify-center items-center'>
        //             <h1>
        //                 DATABASES
        //             </h1>
        //             {/* <div className='grid justify-center items-center'> */}
        //             <span className='flex justify-center items-center'>
        //                 <h5> Postgres sql</h5>
        //             </span>
        //             <span className='grid justify-center items-center'>
        //                 Mongo Db
        //             </span>
        //             <span className='grid justify-center items-center'>
        //                 ...
        //             </span>
        //             {/* </div> */}
        //         </div>

        //     </div>


        // </div >




        <div className='grid w-full h-screen  justify-center items-center px-9'>
            <BarChar />

            <Wave text="EXAMPLE TEXT"
                text="grid w-full h-screen  justify-center items-center"
                effect="verticalFadeIn"
                effectChange={10.0}
                effectDirection='up'
                iterations={1}
            />
            <Random
                text={'grid w-full h-screen  justify-center items-center'}
                //   paused={this.state.paused}
                iterations={1}
                effect="verticalFadeIn"
                effectChange={5}
                effectDirection="up"
            />



        </div>
    )
}

export default TechnicalSkills

// may be in graph
// https://www.adhamdannaway.com/about