import { FaUsers } from "react-icons/fa6"
import { LuCircleDollarSign, LuTarget } from "react-icons/lu"
import lead from '../../../assets/LeadPipeline.png'
import team from '../../../assets/TeamOverview.png'
import rev from '../../../assets/Revenue.png'


const insights = [
    {
        "id": 1,
        "title": "Team Overview",
        "description": "Get a clear view of user distribution, activity status, and team engagement across your organization.",
        "icon": <FaUsers />,
        "iconBg": "#F5F3FF",
        "iconBorder": "#C4B5FD",
        "iconColor": "#7C3AED",
        "cardBorder": "#DDD6FE",
        "image": team,

    },
    {
        "id": 2,
        "title": "Lead Pipeline",
        "description": "Visualize lead movement through every stage and identify opportunities to improve conversions.",
        "icon": <LuTarget />,
        "iconBg": "#ECFEFF",
        "iconBorder": "#67E8F9",
        "iconColor": "#0891B2",
        "cardBorder": "#A5F3FC",
        "image": lead,

    },
    {
        "id": 3,
        "title": "Revenue & Conversion",
        "description": "Track revenue performance, deal values, close rates, and conversion metrics in real-time.",
        "icon": <LuCircleDollarSign />,
        "iconBg": "#FFF7ED",
        "iconBorder": "#FDBA74",
        "iconColor": "#EA580C",
        "cardBorder": "#FED7AA",
        "image": rev,

    }
]


const Insight = () => {
    return (
        <div className='w-full min-h-[80vh] py-20 overflow-auto bg-slate-100'>
            <div className="max-w-7xl h-full mx-auto px-4">
                <div className='flex flex-col justify-center items-center'>
                    <span className=" flex  items-center gap-2 px-4 py-1.5 bg-white border border-[#e3ebf2] rounded-full text-[13.5px] font-semibold text-[#0fb8c4] shadow-sm mb-6 w-fit">
                        <span className="w-2 h-2 rounded-full bg-[#16c2cf] animate-pulse "></span>
                        Detailed Insights
                    </span>

                    <h2 className='text-[40px] font-[700] text-center'>
                        Deep Insight For{' '}
                        <span className="bg-gradient-to-r from-[#16c2cf] to-[#0fb8a5] bg-clip-text text-transparent">

                            Better Decision</span>
                    </h2>
                    <p className='max-w-150 text-center text-[17px] text-sm mt-[14px] text-[var(--ink-500)] '>Dive deeper nto your data and uncover insight that help you grow .</p>
                </div>

                <div className="grid gap-4 mt-13">
                    {
                        insights.map((i) => {
                            return (
                                <div key={i.id} className="grid  lg:grid-cols-2 gap-4 px-4 ">
                                    <div className="border border-slate-100 rounded-2xl bg-white/60 hover:bg-white">
                                        <div className="flex items-center  flex-col md:flex-row gap-4 p-8">
                                            <div className="flex justify-center border border-slate-100  items-center h-12 w-[48px]  rounded-xl text-xl"
                                                style={{
                                                    backgroundColor: i.iconBg,
                                                    color: i.iconColor,
                                                    borderColor: i.iconBorder
                                                }}
                                            >{i.icon}
                                            </div>
                                            <div className="max-w-[80%] h-full flex flex-col justify-center ">
                                                <h3 className="text-[21px] mb-[10px]">{i.title}</h3>
                                                <p className="text-[14.5px] text-[var(--ink-500)]">{i.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className=" rounded-2xl w-full h-full border border-slate-200 ">
                                        <img src={i.image} alt="image" className="w-full h-full rounded-2xl object-fill" />
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

export default Insight