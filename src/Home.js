import React, { useState, useEffect } from 'react'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import AboutMe from './Components/AboutMe'
import RandomFactsOfMe from './Components/RandomFactsOfMe'
import TechnicalSkills from './Components/TechnicalSkills'
import WorkExperience from './Components/WorkExperience'
// import Loading from './Components/Loading'
// import MyStory from './Components/MyStory'
// import Education from './Components/Education'
// import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe1'
import Footer from './Components/Footer'
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCarSide } from 'react-icons/fa';

function Home() {

    console.log(`Website is opened on "${window.navigator.userAgentData.platform}" device`)

    const [scroll, setScroll] = useState(0)
    // const [siteAlert, setSiteAlert] = useState(true)
    const [componentsHeights, setComponentsHeights] = useState({
        Introduction: 586,
        AboutMe: 788,
        TechnicalSkills: 701,
        RandomFactsOfMe: 0,
        WorkExperience: 586,
        Projects: 0,
        ContactMe: 584
    })

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        });

        if (window.navigator.userAgentData.mobile) {
            alert("I recommend you to open this site in desktop. Mobile version is Under Development")
        }

    }, []);


    function AddComponentHeight(CName, height) {
        setComponentsHeights(prevState => ({
            ...prevState, [CName]: height
        }))
    }

    return (<div>
        <Introduction AddComponentHeight={AddComponentHeight} />
        <Header scroll={scroll} componentsHeights={componentsHeights} />
        <AboutMe AddComponentHeight={AddComponentHeight} />
        {/* <MyStory /> */}
        <RandomFactsOfMe AddComponentHeight={AddComponentHeight} />
        <TechnicalSkills AddComponentHeight={AddComponentHeight} />
        <WorkExperience AddComponentHeight={AddComponentHeight} />
        <ContactMe AddComponentHeight={AddComponentHeight} />
        <Footer />
    </div>)
}

export default Home
