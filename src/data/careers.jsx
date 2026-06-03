import { FaCode, FaGift, FaHeart, FaPen, FaUsers } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { BiSolidZap } from "react-icons/bi";
import { FaFaceSmile } from "react-icons/fa6";
import { RiNodejsLine } from "react-icons/ri"; import { ImBriefcase } from "react-icons/im";
import { TfiHeadphoneAlt } from "react-icons/tfi";








export const careersPageData = {
    hero: {
        badge: "Careers",
        title: "Build the Future of ",
        title2: 'Work With Us',
        desc: "At Trackeroo, we're on a mission to simplify how teams manage work. Join a team of builders, thinkers, and innovators creating tools that help businesses grow faster.",
        primaryBtn: "View Open Positions",
        secondaryBtn: "Life at Trackeroo",
        image: "/images/careers-hero.webp"
    },

    stats: [
        {
            number: "50+",
            label: "Team Members"
        },
        {
            number: "12",
            label: "Countries"
        },
        {
            number: "95%",
            label: "Employee Satisfaction"
        },
        {
            number: "100%",
            label: "Remote Friendly"
        }
    ],

    values: [
        {
            id: 1,
            title: "People First",
            desc: "We prioritize people and foster a supportive workplace culture.",
            icon: <FaUsers />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",
            bgColor: "#E8F8FC"
        },
        {
            id: 2,

            title: "Growth Mindset",
            desc: "Continuous learning and improvement are at our core.",
            icon: <BsFillRocketTakeoffFill />,
            color: "text-[#33bf8b] border-[#33bf8b] bg-[#EAFBF5]",

        },
        {
            id: 3,
            title: "Make Impact",
            desc: "Every contribution directly influences our product and customers.",
            icon: <BiSolidZap />,
            color: "text-[#ff6b6b] border-[#ff6b6b] bg-[#FFF0F0]",

        },
        {
            id: 4,
            title: "Work-Life Balance",
            desc: "Flexible schedules help you thrive personally and professionally.",
            icon: <FaHeart />,
            color: "text-[#ff7eb3] border-[#ff7eb3] bg-[#FFF2F8]",

        },
        {
            id: 5,
            title: "Great Benefits",
            desc: "Competitive compensation, healthcare, and growth opportunities.",
            icon: <FaGift />,
            color: "text-[#f59e0b] border-[#f59e0b] bg-[#FFF8E7]",

        },
        {
            id: 6,
            title: "Open Culture",
            desc: "Transparency, trust, and collaboration guide everything we do.",
            icon: <FaFaceSmile />,
            color: "text-[#14b8a6] border-[#14b8a6] bg-[#ECFEFF]",

        }
    ],

    benefits: [
        {
            title: "Remote-First Environment",
            desc: "Work from anywhere while staying connected with your team.",
            icon: "Globe"
        },
        {
            title: "Competitive Salary",
            desc: "Market-leading compensation packages.",
            icon: "BadgeDollarSign"
        },
        {
            title: "Health Coverage",
            desc: "Comprehensive health and wellness support.",
            icon: "ShieldPlus"
        },
        {
            title: "Paid Time Off",
            desc: "Take time when you need it and recharge.",
            icon: "CalendarHeart"
        },
        {
            title: "Learning Budget",
            desc: "Annual budget for courses, books, and certifications.",
            icon: "GraduationCap"
        },
        {
            title: "Team Retreats",
            desc: "Meet teammates in person through annual company events.",
            icon: "Plane"
        }
    ],

    departments: [
        "All",
        "Engineering",
        "Product",
        "Design",
        "Marketing",
        "Customer Success",
        "Operations"
    ],

    openings: [
        {
            id: 1,
            title: "Frontend Developer (React)",
            department: "Engineering",
            location: "Remote",
            type: "Full-Time",
            experience: "1-3 Years",
            salary: "₹5L - ₹9L",
            icon: <FaCode />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",


        },
        {
            id: 2,
            title: "Backend Developer (Node.js)",
            department: "Engineering",
            location: "Remote",
            type: "Full-Time",
            experience: "2-4 Years",
            salary: "₹6L - ₹12L",
            icon: <RiNodejsLine />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",


        },
        {
            id: 3,
            title: "Product Manager",
            department: "Product",
            location: "Remote",
            type: "Full-Time",
            experience: "3-5 Years",
            salary: "₹12L - ₹18L",
            icon: <ImBriefcase />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",

        },
        {
            id: 4,
            title: "UI/UX Designer",
            department: "Design",
            location: "Remote",
            type: "Full-Time",
            experience: "2-4 Years",
            salary: "₹5L - ₹10L",
            icon: <FaPen />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",


        },
        {
            id: 5,
            title: "Customer Success Manager",
            department: "Customer Success",
            location: "Remote",
            type: "Full-Time",
            experience: "2-4 Years",
            salary: "₹6L - ₹10L",
            icon: <TfiHeadphoneAlt />,
            color: "text-[#1ba2c3] border-[#1ba2c3] bg-[#E8F8FC]",


        }
    ],

    lifeAtTrackeroo: {
        title: "More Than Just a Job",
        desc: "We offer a place where talented people can learn, grow, and make a meaningful impact.",
        points: [
            "Flexible remote work",
            "Health & wellness benefits",
            "Learning & development budget",
            "Paid vacation and holidays",
            "Parental leave",
            "Performance bonuses",
            "Latest equipment",
            "Annual team retreats"
        ],
        image: "/images/team-culture.webp"
    },

    hiringProcess: [
        {
            step: "01",
            title: "Application",
            desc: "Submit your application online."
        },
        {
            step: "02",
            title: "Initial Screening",
            desc: "Quick conversation with our team."
        },
        {
            step: "03",
            title: "Technical Assessment",
            desc: "Showcase your skills through practical tasks."
        },
        {
            step: "04",
            title: "Final Interview",
            desc: "Meet team members and leadership."
        },
        {
            step: "05",
            title: "Offer & Onboarding",
            desc: "Join the Trackeroo family."
        }
    ],

    testimonials: [
        {
            name: "Sarah Johnson",
            role: "Product Designer",
            quote:
                "Trackeroo provides the freedom, support, and opportunities to do the best work of my career.",
            image: "/images/team-1.webp"
        },
        {
            name: "David Wilson",
            role: "Frontend Engineer",
            quote:
                "The culture is collaborative, transparent, and focused on growth.",
            image: "/images/team-2.webp"
        }
    ],

    faq: [
        {
            question: "Do you offer remote positions?",
            answer:
                "Yes, most of our roles are fully remote with flexible working hours."
        },
        {
            question: "What is the hiring process like?",
            answer:
                "Application → Screening → Assessment → Interview → Offer."
        },
        {
            question: "Do you hire fresh graduates?",
            answer:
                "Yes, we regularly hire interns and entry-level professionals."
        },
        {
            question: "Can I apply for multiple roles?",
            answer:
                "Absolutely. Apply for any role that matches your skills and interests."
        }
    ],

    cta: {
        title: "Don't See the Right Role?",
        desc: "We're always looking for talented people. Send us your resume and let's stay connected.",
        button: "Send Your Resume"
    }
};