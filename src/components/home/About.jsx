import React from "react";

const About = () => {
    return (
        <div id="about" className="mt-20">
            <div className="flex items-center container mx-auto">
                <div className=" flex-1">
                    <img
                        src="https://fir-course-989a4.web.app/static/media/about.3cfcbd4a8b2fe1e2456e.png"
                        alt="img"
                    />
                </div>
                <div className=" flex-1">
                    <h2 className="text-3xl text-secondary font-bold">ABOUT</h2>
                    <h6 className="text-2xl text-primary font-semibold leading-loose">
                        SIP - SMALL INVESTORS OF PAKSITAN.
                    </h6>
                    <p className="mt-8 text-gray text-xl leading-loose">
                        At SIP, we're passionate about helping small investors
                        in Pakistan achieve their financial aspirations. Our
                        platform is built on trust, transparency, and
                        innovation. With a team of dedicated professionals, we
                        are committed to providing accessible and secure
                        investment opportunities that empower individuals to
                        grow their savings. Whether you're a seasoned investor
                        or just starting on your financial journey, SIP is here
                        to support and guide you. Join us today and discover a
                        world of potential for your investments
                    </p>
                    <button
                        className="btn-primary mt-8"
                        style={{ padding: "0.75rem 3rem" }}
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
