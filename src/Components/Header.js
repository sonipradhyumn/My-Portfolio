import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';


function Header(props) {
    //     <AboutMe />
    // {/* <MyStory /> */}
    // <RandomFactsOfMe />
    // <TechinicalSkills />
    // <WorkExperience />
    // <Projects />
    // <Education />
    // <ContactMe />
    // console.log(prop.area)
    return (
        <div className='mt-1 sticky z-30 top-0 w-full flex justify-between bg-yellow-300 shadow-lg h-14 overflow-hidden pl-3 pr-10  items-center  ' >
            <div className='-mt-2 border-2 '>
                <img className='  w-42 h-20' src='./pradhyumn.png'></img>
            </div>

            <div className=' hidden sm:flex justify-between items-center w-screen max-w-xl 	 border-2 '>
                <div>

                    ABOUT ME
                </div>
                <div>
                    TECHNICAL SKILLS
                </div>
                <div className=''>
                    WORK EXPERIENCE
                </div>
                <div>
                    PROJECTS
                </div>
                {/* <div>
                    RANDOM FACTS OF ME
                </div>
                <div>
                    EDUCATION
                </div> */}
                <div>
                    CONTACT
                </div>

            </div>

            <div className='flex justify-between w-40 border-2'>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
                <FaGithub />


            </div>
        </div >
    )
}

export default Header
