import React from 'react'

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="wrap">
                    <div className="hero-inner">
                        {/* LEFT CONTENT */}
                        <div className="hero-copy">
                            <span className="pill">
                                <span className="dot"></span>
                                Tasks · CRM · Support — in one workspace
                            </span>

                            <h1>
                                If your team is doing it,{" "}
                                <span className="grad-text">
                                    Trakeroo is tracking it.
                                </span>
                            </h1>

                            <p className="sub">
                                One platform for engineering tasks, sales pipelines, and support
                                tickets — so every piece of work is visible, owned, and
                                measured. No more juggling five tools.
                            </p>

                            <div className="hero-cta">
                                <a href="#" className="btn btn-primary">
                                    Start free trial
                                </a>

                                <a href="#" className="btn btn-ghost">
                                    Watch 2-min demo
                                </a>
                            </div>

                            <div className="hero-trust">
                                <div className="avatars">
                                    <span
                                        style={{
                                            backgroundImage:
                                                "url('https://i.pravatar.cc/80?img=12')",
                                        }}
                                    ></span>

                                    <span
                                        style={{
                                            backgroundImage:
                                                "url('https://i.pravatar.cc/80?img=32')",
                                        }}
                                    ></span>

                                    <span
                                        style={{
                                            backgroundImage:
                                                "url('https://i.pravatar.cc/80?img=45')",
                                        }}
                                    ></span>

                                    <span
                                        style={{
                                            backgroundImage:
                                                "url('https://i.pravatar.cc/80?img=5')",
                                        }}
                                    ></span>
                                </div>

                                <div>
                                    <span className="stars">★★★★★</span>
                                    <br />
                                    Trusted by 10,000+ teams worldwide
                                </div>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="hero-visual">
                            <div className="mock">
                                <div className="mock-bar">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>

                                <div className="mock-tabs">
                                    <span className="mock-tab on">Board</span>
                                    <span className="mock-tab">Pipeline</span>
                                    <span className="mock-tab">Tickets</span>
                                    <span className="mock-tab">Insights</span>
                                </div>

                                <div className="mock-body">
                                    <div className="kanban">
                                        {/* COLUMN 1 */}
                                        <div className="kcol">
                                            <h5>To do</h5>

                                            <div className="kcard">
                                                <span className="tag tag-dev">DEV</span>

                                                <div className="ttl">
                                                    API rate-limit fix
                                                </div>

                                                <div className="meta">
                                                    <span className="av"></span>
                                                </div>
                                            </div>

                                            <div className="kcard">
                                                <span className="tag tag-crm">SALES</span>

                                                <div className="ttl">
                                                    Follow up: Acme Corp
                                                </div>

                                                <div className="meta">
                                                    <span
                                                        className="av"
                                                        style={{
                                                            background:
                                                                "linear-gradient(135deg,#e87f3e,#ffb988)",
                                                        }}
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* COLUMN 2 */}
                                        <div className="kcol">
                                            <h5>In progress</h5>

                                            <div className="kcard">
                                                <span className="tag tag-sup">
                                                    SUPPORT
                                                </span>

                                                <div className="ttl">
                                                    Ticket #4821 — login bug
                                                </div>

                                                <div className="prog">
                                                    <i style={{ width: "60%" }}></i>
                                                </div>
                                            </div>

                                            <div className="kcard">
                                                <span className="tag tag-dev">DEV</span>

                                                <div className="ttl">
                                                    Dashboard redesign
                                                </div>

                                                <div className="prog">
                                                    <i style={{ width: "40%" }}></i>
                                                </div>
                                            </div>
                                        </div>

                                        {/* COLUMN 3 */}
                                        <div className="kcol">
                                            <h5>Done</h5>

                                            <div className="kcard">
                                                <span className="tag tag-crm">SALES</span>

                                                <div className="ttl">
                                                    Closed: Nova deal 🎉
                                                </div>

                                                <div className="meta">
                                                    <span
                                                        className="av"
                                                        style={{
                                                            background:
                                                                "linear-gradient(135deg,#7c5cff,#b3a4ff)",
                                                        }}
                                                    ></span>
                                                </div>
                                            </div>

                                            <div className="kcard">
                                                <span className="tag tag-sup">
                                                    SUPPORT
                                                </span>

                                                <div className="ttl">
                                                    Ticket #4799 resolved
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FLOAT CARD 1 */}
                            <div className="float-card float-1">
                                <span
                                    className="float-ic"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#0e9aa7,#34d6e0)",
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 17l5-5 4 4 8-9"
                                            stroke="#fff"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                <div>
                                    <div className="lbl">Team velocity</div>
                                    <div className="val">+38% ↑</div>
                                </div>
                            </div>

                            {/* FLOAT CARD 2 */}
                            <div className="float-card float-2">
                                <span
                                    className="float-ic"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,#7c5cff,#b3a4ff)",
                                    }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5 13l4 4L19 7"
                                            stroke="#fff"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                <div>
                                    <div className="lbl">
                                        Tickets resolved
                                    </div>

                                    <div className="val">1,204</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero