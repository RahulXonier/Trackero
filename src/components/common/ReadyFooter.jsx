
import { BsStars } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ReadyFooter = () => {
    return (
        <div
            className='w-full min-h-[50vh] py-20 px-4 md:px-0'>
            <div className='max-w-7xl h-full flex justify-between items-center   mx-auto border border-cyan-300 py-10 px-8 rounded-2xl '>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='text-5xl w-20 h-20 rounded-2xl flex justify-center items-center border text-cyan-500 border-cyan-200 bg-cyan-50'><BsStars /></div>
                    <div>
                        <h3 className='text-[30px] font-[700] '>Ready to take control of your data?</h3>
                        <p className='max-w-150  text-[17px] text-sm mt-[14px] text-[var(--ink-500)] '>Join thousand of businesses using trackeroo to make smarter decisions every day.</p>
                    </div>
                </div>
                <div>
                    <Link to='/PayPal' className="btn btn-primary">Get Started
                        <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ReadyFooter