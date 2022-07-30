import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import logo from '../Image/Pradhyumn-soni-14.png'

function Header({ scroll, componentsHeights }) {

    let heightTillAboutMe = componentsHeights?.Introduction + 4,
        heightTillRandomFactsOfMe = heightTillAboutMe + componentsHeights?.AboutMe,
        heightTillTechnicalSkills = heightTillRandomFactsOfMe + componentsHeights?.RandomFactsOfMe,
        heightTillWorkExperience = heightTillTechnicalSkills + componentsHeights?.TechnicalSkills,
        heightTillProjects = heightTillWorkExperience + componentsHeights?.WorkExperience,
        heightTillContactMe = heightTillProjects + componentsHeights?.Projects;

    return (
        <div className='text-white sticky z-30 top-0 w-full flex justify-between bg-zinc-900 shadow-lg h-14 overflow-hidden pl-3 pr-10 items-center' >

            <div className='pl-5 cursor-default'>
                <img className='h-24' src={logo}></img>
            </div>

            <div className=' hidden px-5 sm:flex space-x-6 items-center  max-w-2xl'>
                <div onClick={(e) => { window.scrollTo(0, heightTillAboutMe) }} className={` cursor-pointer font-sans font-medium ${scroll >= heightTillAboutMe - 60 && scroll <= heightTillTechnicalSkills - 60 ? 'text-red-400' : ''} `} >
                    ABOUT ME
                </div>
                <div onClick={(e) => { window.scrollTo(0, heightTillTechnicalSkills) }} className={`cursor-pointer font-sans font-medium ${scroll >= heightTillTechnicalSkills - 60 && scroll <= heightTillWorkExperience - 60 ? 'text-red-400' : ''} `} >
                    TECHNICAL SKILLS
                </div>
                <div onClick={(e) => { window.scrollTo(0, heightTillWorkExperience) }} className={`cursor-pointer font-sans font-medium ${scroll >= heightTillWorkExperience - 60 && scroll <= heightTillContactMe - 60 ? 'text-red-400' : ''}`}>
                    WORK EXPERIENCE
                </div>
                {/* <div  onClick={(e)=> {window.scrollTo(0, heightTillProjects)}} className={`cursor-not-allowed font-sans font-medium text-gray-500  line-through ${scroll >= heightTillProjects - 60 && scroll <= heightTillContactMe - 60 ? 'text-red-400' : ''}`} >
                    PROJECTS
                </div> */}
                {/* <div className={` font-serif`} >
                    RANDOM FACTS OF ME
                </div>
                <div className={` font-serif`} >
                    EDUCATION
                </div> */}
                <div onClick={(e) => { window.scrollTo(0, heightTillContactMe) }} className={` cursor-pointer font-sans font-medium ${scroll >= heightTillContactMe -60 ? 'text-red-400' : ''}`} >
                    CONTACT
                </div>
            </div>

            <div className='flex justify-between w-40 '>
                <a className='hover:text-sky-400' href="https://www.linkedin.com/in/pradhyumn-soni-210131174" target="_blank"> <FaLinkedinIn /></a>
                <a className='hover:text-slate-300' href="https://github.com/sonipradhyumn" target="_blank"><FaGithub /> </a>
                <a className='hover:text-red-300' href="https://instagram.com/pradhyumn_soni?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram /></a>
                <a className='hover:text-sky-400' href="https://twitter.com/soni_pradhyumn" target="_blank"><FaTwitter /> </a>
                <a className='hover:text-sky-400' href="https://www.facebook.com/pradhyumn.soni.7" target="_blank"><FaFacebookF /> </a>
            </div>
        </div >
    )
}

export default Header
