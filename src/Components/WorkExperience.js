import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function WorkExperience() {
    return (
        <div className='bg-gray-100 h-screen border-4 overflow-hidden flex justify-center items-center px-9'>
            {/* <TailwindTime /> */}
            <TimeLine />

        </div>
    )

}


function TimeLine() {
    return (
        <div className=' mx-14 mt-10 w-full text-center'>
            Work Experience
            <div className="container mx-auto w-full h-full  ">

                <div className="relative wrap p-10 h-full  no-scrollbar overflow-y-scroll scroll-p-40">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700  h-5/6 border" style={{ left: "50%" }}></div>

                    {/* <!-- left timeline --> */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl p-1 w-8 h-8 rounded-full overflow-hidden">
                            {/* <h1 className="mx-auto text-white font-semibold text-lg">2</h1> */}
                            <img className='rounded-full border-2' src='./azilen-technologies.jpg'></img>
                        </div>
                        <div className="order-1 bg-blue-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-1 font-bold text-gray-800 text-xl">Azilen Technologies Pvt. Ltd.</h3>
                            <h4 className='mb-1 ' >Associate Software Developer</h4>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">  july 2021 - present</p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12 text-right"> </div>
                        <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl p-1 w-8 h-8 rounded-full overflow-hidden">
                            {/* <h1 className="mx-auto font-semibold text-lg text-white">1</h1> */}
                            <img className=' rounded-full ' src='./Tmdc.jpeg'></img>
                        </div>
                        <div className="order-1 bg-gray-300 rounded-lg shadow-xl w-5/12 px-6 py-4">

                            <h3 className="mb-1 font-bold text-gray-800 text-xl">The Modern Data Company</h3>
                            <h4 className='mb-1 ' >Internship</h4>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">  March 2021 - june 2021</p>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}



function TailwindTime() {
    //  https://www.npmjs.com/package/react-vertical-timeline-component
    return (
        <div className='mx-20'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}


export default WorkExperience
