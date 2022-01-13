import React from 'react'

function Projects() {
    let Projects = ['a', 'b', 'c', 'd', 'e']
    return (
        <div className='grid w-full h-screen border justify-center items-center px-9'>

            <h1> SOME OF MY FAVORITE PROJECTS</h1>
            <div className='flex justify-betweens items-center'>
                {Projects.map(

                    (project) => {
                        return (
                            <div className='h-32 w-32 m-10 bg-green-100 flex items-center justify-center rounded-full'>
                                {project}
                            </div>
                        )
                    }
                )
                }
            </div>
        </div>
    )
}

export default Projects
