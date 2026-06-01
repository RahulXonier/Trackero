import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const barsData = [
    { day: "Mon", height: "45%" },
    { day: "Tue", height: "62%" },
    { day: "Wed", height: "50%" },
    { day: "Thu", height: "78%" },
    { day: "Fri", height: "90%" },
    { day: "Sat", height: "70%" },
];




const Performance = () => {
    const rightRef = useRef(null)
    const leftRef = useRef(null)

    useEffect(() => {

        gsap.fromTo(
            '.leftVisual',
            {
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power4.out',

                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );

        gsap.fromTo(
            '.rightVisual',
            {
                x: 80,
                opacity: 0,
                scale: 0.9,
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: 'power4.out',

                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                }
            }
        );

    }, []);
    return (
        <>
            <div
                className="sec"
                style={{ paddingTop: 0 }}
            >
                <div className="wrap">
                    <div className="track ">
                        {/* LEFT CONTENT */}
                        <div className="track-copy leftVisual"
                            ref={leftRef}>
                            <span className="eyebrow">
                                Performance, measured
                            </span>

                            <h2>
                                Every task tells you{" "}
                                <span className="grad-text">
                                    who, what & how well.
                                </span>
                            </h2>

                            <p className="lead">
                                Trakeroo turns daily work into clear
                                performance signals — so managers see
                                contribution at a glance and teams stay
                                accountable without micromanagement.
                            </p>

                            <div className="track-list">
                                {/* ITEM 1 */}
                                <div className="track-item">
                                    <span className="track-num">1</span>

                                    <div>
                                        <h4>
                                            Work gets logged automatically
                                        </h4>

                                        <p>
                                            Every task, deal, and ticket is
                                            attributed to an owner the moment
                                            it's created.
                                        </p>
                                    </div>
                                </div>

                                {/* ITEM 2 */}
                                <div className="track-item">
                                    <span className="track-num">2</span>

                                    <div>
                                        <h4>
                                            Progress is measured in real time
                                        </h4>

                                        <p>
                                            Velocity, response times, and
                                            close rates update live across
                                            every team.
                                        </p>
                                    </div>
                                </div>

                                {/* ITEM 3 */}
                                <div className="track-item">
                                    <span className="track-num">3</span>

                                    <div>
                                        <h4>
                                            Performance becomes visible
                                        </h4>

                                        <p>
                                            Individual and team dashboards
                                            show output, trends, and
                                            bottlenecks instantly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="track-visual rightVisual"
                            ref={rightRef}>
                            <div className="tv-head">
                                <h5>Team Performance</h5>

                                <span className="tg">
                                    ▲ 38% this month
                                </span>
                            </div>

                            {/* BARS */}
                            {/* <div className="bars">
                                <div className="bar">
                                    <i style={{ height: "45%" }}></i>
                                    <span>Mon</span>
                                </div>

                                <div className="bar">
                                    <i style={{ height: "62%" }}></i>
                                    <span>Tue</span>
                                </div>

                                <div className="bar">
                                    <i style={{ height: "50%" }}></i>
                                    <span>Wed</span>
                                </div>

                                <div className="bar">
                                    <i style={{ height: "78%" }}></i>
                                    <span>Thu</span>
                                </div>

                                <div className="bar">
                                    <i style={{ height: "90%" }}></i>
                                    <span>Fri</span>
                                </div>

                                <div className="bar">
                                    <i style={{ height: "70%" }}></i>
                                    <span>Sat</span>
                                </div>
                            </div> */}


                            <div className="bars">
                                {barsData.map((item, index) => (
                                    <div className="bar " key={index}>
                                        <i style={{ height: item.height }}></i>
                                        <span>{item.day}</span>
                                    </div>
                                ))}
                            </div>

                            {/* STATS */}
                            <div className="tv-stats">
                                <div className="tv-stat">
                                    <div className="n">142</div>
                                    <div className="l">Tasks done</div>
                                </div>

                                <div className="tv-stat">
                                    <div className="n">96%</div>
                                    <div className="l">On-time SLA</div>
                                </div>

                                <div className="tv-stat">
                                    <div className="n">$84k</div>
                                    <div className="l">Closed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Performance;