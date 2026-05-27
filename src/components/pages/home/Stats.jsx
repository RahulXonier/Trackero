import React from "react";
import Counter from "../../common/Counter";

const Stats = () => {
    return (
        <section className="sec">
            <div className="wrap">
                <div className="statband">
                    {/* STAT 1 */}
                    <div className="stat">
                        <div
                            className="num"

                        >
                            <Counter end={1000} />

                        </div>

                        <div className="lab">
                            Happy customers
                        </div>

                        <span className="stat-div"></span>
                    </div>

                    {/* STAT 2 */}
                    <div className="stat">
                        <div
                            className="num"
                        >
                            <Counter end={5000} />

                        </div>

                        <div className="lab">
                            Tasks tracked daily
                        </div>

                        <span className="stat-div"></span>
                    </div>

                    {/* STAT 3 */}
                    <div className="stat">
                        <div
                            className="num"

                        >
                            <Counter end={99.9} /> %


                        </div>

                        <div className="lab">
                            System uptime
                        </div>

                        <span className="stat-div"></span>
                    </div>

                    {/* STAT 4 */}
                    <div className="stat">
                        <div
                            className="num"
                        >
                            <Counter end={120} />

                        </div>

                        <div className="lab">
                            Countries served
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;