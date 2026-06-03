import React, { useEffect, useRef } from 'react'

import { BsBarChartFill } from "react-icons/bs";
import { IoIosFunnel } from 'react-icons/io';
import { LuCircleDollarSign } from "react-icons/lu";
import { FaCalendarDays, FaUsers } from 'react-icons/fa6';
import { PiFileTextFill } from "react-icons/pi";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)




const data =

    [
        {
            "id": 1,
            "title": "At-a-Glance Overview",
            "description": "Monitor key metrics and KPIs in real-time. Get a snapshot of what matters most.",
            "icon": <BsBarChartFill />,
            "iconBg": "#EFF6FF",
            "iconBorder": "#93C5FD",
            "iconColor": "#2563EB",
            "cardBorder": "#BFDBFE",
            "cardGradient": "from-blue-50 to-transparent"
        },
        {
            "id": 2,
            "title": "Lead & Sales Pipeline",
            "description": "Track every lead and deal across the pipeline. Know exactly where you stand.",
            "icon": <IoIosFunnel />,
            "iconBg": "#ECFDF5",
            "iconBorder": "#86EFAC",
            "iconColor": "#16A34A",
            "cardBorder": "#BBF7D0",
            "cardGradient": "from-green-50 to-transparent"
        },
        {
            "id": 3,
            "title": "Revenue Tracking",
            "description": "Monitor earnings, conversions, and financial performance in real-time.",
            "icon": <LuCircleDollarSign />,
            "iconBg": "#FFF7ED",
            "iconBorder": "#FDBA74",
            "iconColor": "#EA580C",
            "cardBorder": "#FED7AA",
            "cardGradient": "from-orange-50 to-transparent"
        },
        {
            "id": 4,
            "title": "Team Performance",
            "description": "Manage users, teams, and activities effortlessly. Boost productivity together.",
            "icon": <FaUsers />,
            "iconBg": "#F5F3FF",
            "iconBorder": "#C4B5FD",
            "iconColor": "#7C3AED",
            "cardBorder": "#DDD6FE",
            "cardGradient": "from-violet-50 to-transparent"
        },
        {
            "id": 5,
            "title": "Activity Calendar",
            "description": "Stay on top of important tasks, meetings, and follow-ups.",
            "icon": <FaCalendarDays />,
            "iconBg": "#FDF2F8",
            "iconBorder": "#F9A8D4",
            "iconColor": "#DB2777",
            "cardBorder": "#FBCFE8",
            "cardGradient": "from-pink-50 to-transparent"
        },
        {
            "id": 6,
            "title": "Custom Reports",
            "description": "Create custom reports and download insights in just a few clicks.",
            "icon": <PiFileTextFill />,
            "iconBg": "#ECFEFF",
            "iconBorder": "#67E8F9",
            "iconColor": "#0891B2",
            "cardBorder": "#A5F3FC",
            "cardGradient": "from-cyan-50 to-transparent"
        }
    ]



const DahFeature = () => {

    const dashRef = useRef(null)
    const boxRef = useRef(null)

    useEffect(() => {
        gsap.from('.boxs', {
            x: 50,
            opacity: 0,
            scrub: true,
            stagger: 0.25,
            duration: 2,
            scrollTrigger: {
                trigger: boxRef.current,
                start: 'top 80%',
                scroller: 'body',

            }
        });
        gsap.from('.mainHead', {
            y: 50,
            opacity: 0,
            scrub: true,
            stagger: 0.25,
            duration: 2,
            scrollTrigger: {
                trigger: dashRef.current,
                start: 'top 80%',
                scroller: 'body',

            }
        })


    }, [])
    return (
        <div className='w-full min-h-[80vh] pb-20 bg-green '>
            <div className='max-w-7xl h-full mx-auto grid gap-12 px-4 '>
                <div
                    ref={dashRef}
                    className='flex flex-col justify-center items-center '>
                    <span className=" flex  items-center gap-2 px-4 py-1.5 bg-white border border-[#e3ebf2] rounded-full text-[13.5px] font-semibold text-[#0fb8c4] shadow-sm mb-[18px] w-fit  mainHead">
                        <span className="w-2 h-2 rounded-full bg-[#16c2cf] animate-pulse  "></span>
                        DASHBOARD FEATURES
                    </span>

                    <h2 className='text-[40px] font-[700] text-center  mainHead'>
                        Everything you need at a{' '}
                        <span className="bg-gradient-to-r from-[#16c2cf] to-[#0fb8a5] bg-clip-text text-transparent">
                            glance</span>
                    </h2>
                    <p className='max-w-150 text-center text-[17px] text-sm mt-[14px] text-[var(--ink-500)]  mainHead '>Our dashboard gives you a complete overview of your operations with powerful insights and intuitive visuals.</p>
                </div>

                <div
                    ref={boxRef}
                    className='grid md:grid-col-2 lg:grid-cols-3 gap-10'>
                    {
                        data.map((i) => {
                            return (
                                <div key={i.id} className='border relative h-[200px] overflow-hidden group  rounded-2xl justify-center items-center p-4 flex flex-col gap-6 boxs' style={{ borderColor: i.cardBorder }}>
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${i.cardGradient}`}
                                    />
                                    <div className='w-12 h-12 flex border rounded-xl
                                    transition-all duration-700  z-2 translate-y-4 group-hover:translate-y-0 group-hover:scale-105 justify-center items-center text-2xl'
                                        style={{
                                            backgroundColor: i.iconBg,
                                            borderColor: i.iconBorder,
                                            color: i.iconColor
                                        }}
                                    >

                                        {i.icon}
                                    </div>
                                    <div className='flex flex-col items-center '>
                                        <h3 className='text-[21px] mb-[10px] z-2 
                                        transition-all duration-700 
                                         translate-y-4
                                         group-hover:translate-y-0'>{i.title}</h3>
                                        <p className='text-[14.5px] text-center  opacity-0
                                            translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700  text-[var(--ink-500)]'>{i.description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default DahFeature