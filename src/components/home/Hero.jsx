import React from "react";

const Hero = () => {
    return (
        <div id="home" className="bg-primary relative h-full py-10">
            <img
                src="https://fir-course-989a4.web.app/static/media/heroLines.f37966f8fad5df3aff1e.png"
                alt="img"
                className="absolute pt-20"
            />
            <div className="relative container mx-auto text-pure flex flex-col gap-4">
                <p className="lg:text-[120px] text-[60px] leading-tight font-bold">
                    WELCOME TO SIP
                </p>
                <div className="flex">
                    <div className="flex-1 flex flex-col gap-8">
                        <p className="text-[80px] font-semibold h-fit leading-tight">
                            SMALL INVESTORS OF <br /> PAKISTAN.
                        </p>
                        <p>
                            Empower your savings with SIP: Pakistan's trusted
                            platform for secure, high-yield investments. <br />
                            Start small, dream big – SIP makes your financial
                            goals achievable
                        </p>
                        <div className="bg-pure w-fit px-12 py-3 rounded-md ">
                            <button className="btn-primary">Get Started</button>
                        </div>
                    </div>

                    <img
                        src="https://fir-course-989a4.web.app/static/media/hero.76386f23d50806faa83f.png"
                        alt=""
                        className="lg:w-[500px] w-[200px] md:flex hidden object-cover"
                    />
                </div>
            </div>
            <div className="bg-pure absolute -bottom-16 left-[50%] -translate-x-[50%] h-28 w-28 rounded-full flex justify-center items-center">
                <div className="bg-primary w-20 h-20 rounded-full flex items-center p-6">
                    <svg
                        className="hero-arrow-down-svg"
                        viewBox="0 0 52 69"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.4273 0.910669H29.5727L29.5727 54.5765L46.2704 37.8788L51.338 42.9464L26 68.2844L0.662009 42.9464L5.72961 37.8788L22.4273 54.5765L22.4273 0.910669Z"
                            fill="white"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Hero;
