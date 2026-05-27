import React from "react";

const Testimonials = () => {
    return (
        <section
            className="sec"
            style={{ paddingTop: "20px" }}
        >
            <div className="wrap">
                {/* SECTION HEAD */}
                <div className="sec-head ">
                    <span className="eyebrow">
                        Loved by teams everywhere
                    </span>

                    <h2>
                        Don't just take{" "}
                        <span className="grad-text">
                            our word for it.
                        </span>
                    </h2>
                </div>

                {/* TESTIMONIAL GRID */}
                <div className="tgrid">
                    {/* CARD 1 */}
                    <div className="tcard ">
                        <div className="qmark">"</div>

                        <div className="stars">
                            ★★★★★
                        </div>

                        <p className="quote">
                            We killed three separate subscriptions
                            after switching. Now sales, support,
                            and dev all work in the same place —
                            and I can finally see what everyone's
                            shipping.
                        </p>

                        <div className="who">
                            <div
                                className="pf"
                                style={{
                                    backgroundImage:
                                        "url('https://i.pravatar.cc/90?img=15')",
                                }}
                            ></div>

                            <div>
                                <div className="nm">
                                    Rahul Khanna
                                </div>

                                <div className="rl">
                                    COO, Nimbus Labs
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="tcard ">
                        <div className="qmark">"</div>

                        <div className="stars">
                            ★★★★★
                        </div>

                        <p className="quote">
                            The performance dashboards changed how
                            we run standups. No more guessing
                            who's blocked — Trakeroo just shows
                            it. Adoption was effortless.
                        </p>

                        <div className="who">
                            <div
                                className="pf"
                                style={{
                                    backgroundImage:
                                        "url('https://i.pravatar.cc/90?img=23')",
                                }}
                            ></div>

                            <div>
                                <div className="nm">
                                    Sara Mendez
                                </div>

                                <div className="rl">
                                    Eng Manager, Vertex
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="tcard ">
                        <div className="qmark">"</div>

                        <div className="stars">
                            ★★★★★
                        </div>

                        <p className="quote">
                            Converting a support ticket into a dev
                            task in one click is genius. Our
                            resolution time dropped 40% in the
                            first quarter alone.
                        </p>

                        <div className="who">
                            <div
                                className="pf"
                                style={{
                                    backgroundImage:
                                        "url('https://i.pravatar.cc/90?img=33')",
                                }}
                            ></div>

                            <div>
                                <div className="nm">
                                    Daniel Osei
                                </div>

                                <div className="rl">
                                    Head of CX, Lumio
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;