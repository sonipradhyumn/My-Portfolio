import React from 'react'

function RandomFactsOfMe() {
    return (
        <div className=' justify-center items-center w-full h-screen px-9'>

            <div className='grid grid-cols-2 w-full h-screen border-2 justify-between'>
                <div className='flex justify-center items-center '>
                    <img className='  w-30 h-32' src='./fun-fact.png'></img>
                </div>
                <div className='grid justify-center items-center '>
                    <span>
                        I drink a lot of tea
                    </span>

                    <span>
                        I'm huge admirer of  MCU
                    </span>
                    <span>
                        Gardening is my zen time
                    </span>
                    <span>
                        I love to cook (and eat)
                    </span>
                    <span>
                        I'm a bit of a clean freak
                    </span>
                    <span>
                        {/* I want to live on Pandora */}

                        I'm slightly addicted to Twitter and instagram
                    </span>
                    <span>
                        Yoda is my mentor
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RandomFactsOfMe
