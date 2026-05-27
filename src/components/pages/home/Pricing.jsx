import React from "react";

const Pricing = () => {
    return (
        <section
            className="sec"
            id="pricing"
            style={{
                background: "var(--bg-soft)",
            }}
        >
            <div className="wrap">
                {/* SECTION HEAD */}
                <div className="sec-head ">
                    <span className="eyebrow">
                        Simple, transparent pricing
                    </span>

                    <h2>
                        Plans that scale{" "}
                        <span className="grad-text">
                            with your team.
                        </span>
                    </h2>

                    <p>
                        Start free. Upgrade when you're ready.
                        No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* PRICING GRID */}
                <div className="pgrid">
                    {/* STARTER */}
                    <div className="pcard ">
                        <h4>Starter</h4>

                        <p className="pdesc">
                            For small teams getting organized.
                        </p>

                        <div className="price">$0</div>

                        <div className="per">
                            free forever · up to 5 users
                        </div>

                        <ul>
                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Task boards & sprints
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Basic CRM pipeline
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                100 support tickets/mo
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Community support
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="btn btn-ghost"
                        >
                            Get started
                        </a>
                    </div>

                    {/* GROWTH */}
                    <div className="pcard feat ">
                        <span className="pbadge">
                            Most popular
                        </span>

                        <h4>Growth</h4>

                        <p className="pdesc">
                            For growing teams that need it all.
                        </p>

                        <div className="price">
                            $12 <small>/user</small>
                        </div>

                        <div className="per">
                            per month, billed annually
                        </div>

                        <ul>
                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Everything in Starter
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Unlimited tickets & deals
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Performance dashboards
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Automations & integrations
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Priority support
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="btn btn-primary"
                        >
                            Start free trial
                        </a>
                    </div>

                    {/* ENTERPRISE */}
                    <div className="pcard ">
                        <h4>Enterprise</h4>

                        <p className="pdesc">
                            For organizations at scale.
                        </p>

                        <div className="price">Custom</div>

                        <div className="per">
                            let's talk about your needs
                        </div>

                        <ul>
                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Everything in Growth
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                SSO & advanced security
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                Dedicated success manager
                            </li>

                            <li>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                99.99% uptime SLA
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="btn btn-ghost"
                        >
                            Contact sales
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;