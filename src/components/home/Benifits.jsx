import React from "react";

const Benifits = () => {
    return (
        <div id="benefits" className="mt-20 bg-primary">
            <div className="flex flex-col gap-8 items-center py-20">
                <div className="pt-8">
                    <h1 className="text-pure text-3xl font-semibold">
                        Benefits Of SIP
                    </h1>
                </div>
                <div className="bg-pure w-full container mx-auto flex items-center justify-center py-8 rounded-md lg:hidden">
                    <img
                        src="https://fir-course-989a4.web.app/static/media/benefits.63a87b56382c971b8e13.png"
                        alt=""
                    />
                </div>
                <div className="bg-pure rounded-md lg:flex items-center justify-center container mx-auto relative py-20 hidden ">
                    <div className="rounded-full bg-pure shadow-lg shadow-primary px-16 py-8 ">
                        <img
                            src="https://fir-course-989a4.web.app/static/media/mainLogo.e9d30cf4123073eaec4e.png"
                            alt=""
                            className=" object-cover"
                        />
                        <div className="absolute top-[30%] left-[10%]">
                            <p className="text-secondary font-bold text-xl leading-loose">
                                High Returns
                            </p>
                            <div className="bg-primary w-[470px] h-[2px] relative">
                                <span className="absolute  right-0 top-[50%] w-2 h-2 translate-y-[-50%] rounded-full bg-primary"></span>
                            </div>
                            <p className="text-lg text-gray">
                                SIP offers investment packages that yield <br />
                                competitive and consistent returns
                            </p>
                        </div>
                        <div className="absolute bottom-[12%] left-[15%]">
                            <p className="text-secondary font-bold text-xl leading-loose">
                                User-friendly
                            </p>
                            <div className="bg-primary w-[450px] h-[2px] relative">
                                <span className="absolute  right-0 top-[50%] w-2 h-2 translate-y-[-50%] rounded-full bg-primary"></span>
                            </div>
                            <p className="text-lg text-gray">
                                SIP offers investment packages that yield <br />
                                competitive and consistent returns
                            </p>
                        </div>
                        <div className="absolute top-[40%] left-[65%]">
                            <p className="text-secondary font-bold text-xl leading-loose">
                                Security & Trust
                            </p>
                            <div className="bg-primary w-[450px] h-[2px] relative">
                                <span className="absolute  left-0 top-[50%] w-2 h-2 translate-y-[-50%] rounded-full bg-primary"></span>
                            </div>
                            <p className="text-lg text-gray">
                                SIP offers investment packages that yield <br />
                                competitive and consistent returns
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benifits;
