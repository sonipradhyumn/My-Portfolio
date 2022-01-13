import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import AboutMe from './Components/AboutMe'
import RandomFactsOfMe from './Components/RandomFactsOfMe'
import TechinicalSkills from './Components/TechnicalSkills'
import WorkExperience from './Components/WorkExperience'
import MyStory from './Components/MyStory'
import Education from './Components/Education'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe1'
import Footer from './Components/Footer'
// import from './Components/ '

// 
// import { FaCarSide } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


function Home() {
    let info = window.navigator

    const [header, setHeader] = useState(false);
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
            setScroll(window.scrollY / 100)
            if (window.scrollY >= 555) {
                setHeader(true);

            } else {
                setHeader(false)
            }


        });
    }, []);

    return (
        <div>
            <Introduction />
            <Header />
            <AboutMe />
            {/* <MyStory /> */}
            <RandomFactsOfMe />
            <TechinicalSkills />
            <WorkExperience />
            <Projects />
            <Education />
            <ContactMe />
            <Footer />

        </div>)







    // return (
    //     <div>
    //         <div className='fixed z-10 right-0 flex bg-blue-900 text-white w-full h-1 overflow-hidden'>
    //             <div className={`h-1  bg-white `} style={{ width: `${scroll * 100}px` }}>

    //             </div>
    //             {/* < FaCarSide /> */}
    //         </div>
    //         <div>
    //             <Introduction />
    //             {/* {!header &&
    //                 <Header css=' w-full flex justify-between bg-yellow-400 h-14 overflow-hidden pl-2 pr-10 justify-center items-center' />
    //             } */}
    //             {/* <Header /> */}
    //             <div className='mt-1 sticky z-10 top-4 w-full flex justify-between bg-yellow-400 h-14 overflow-hidden pl-2 pr-10 justify-center items-center' >
    //                 <div className='-mt-2 border-2 '>
    //                     <img className='  w-30 h-20' src='./pradhyumn.png'></img>
    //                 </div>
    //                 <div className=' hidden sm:flex justify-between items-center w-screen max-w-lg	 border-2 '>
    //                     <div>
    //                         ABOUT
    //                     </div>
    //                     <div>
    //                         menu2
    //                     </div>
    //                     <div className=''>
    //                         menu3
    //                     </div>
    //                     <div>
    //                         menu4
    //                     </div>
    //                 </div>
    //                 <div className='flex justify-between w-40 border-2'>
    //                     <FaFacebookF />
    //                     <FaInstagram />
    //                     <FaTwitter />
    //                     <FaLinkedinIn />


    //                 </div>
    //             </div >
    //         </div>
    //         <div>
    //             {/* {header &&
    //                 <Header css='mt-1 fixed z-10 top-0 w-full flex justify-between bg-yellow-400 h-14 overflow-hidden pl-2 pr-10 justify-center items-center' />
    //             } */}

    //             <AboutMe />
    //             <RandomFactsOfMe />
    //         </div>

    //     </div>
    // )
}

export default Home
