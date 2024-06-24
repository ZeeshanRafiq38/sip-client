import React, { useRef } from "react";
import googlePlay from "assets/images/google-play.png";
import AppStore from "assets/images/app-store.png";
const Footer = () => {
    const footerRef = useRef(null);
    const handleScroll = (targetElementId) => {
        const element = document.getElementById(targetElementId);
        const navbarHeight =
            // window.scrollY > 500
            //     ? footerRef.current.clientHeight
            footerRef.current.clientHeight -
            (footerRef.current.clientHeight - 112);
        if (element) {
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };
    return (
        <div ref={footerRef} className="bg-secondary p-12">
            <div className="flex items-center justify-around border-pure border-b-[1px] py-8">
                <div className="flex flex-col gap-4">
                    <img
                        className="w-[150px]"
                        src="https://fir-course-989a4.web.app/static/media/whiteLogo.2edf299f21754afc9b096ebf9f6f8322.svg"
                        alt=""
                    />
                    <p className="text-pure">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting <br /> industry. printing and typesetting.
                        Lorem Ipsum is simply dummy <br /> text of the printing
                        and typesetting industry.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-primary underline">Quick Links</p>
                    <div className="text-pure flex flex-col gap-2 footer-links">
                        <li
                            onClick={() => handleScroll("home")}
                            className="list-none"
                        >
                            Home
                        </li>
                        <li
                            onClick={() => handleScroll("about")}
                            className="list-none"
                        >
                            About Us
                        </li>
                        <li
                            onClick={() => handleScroll("benefits")}
                            className="list-none"
                        >
                            Benifits
                        </li>
                        <li
                            onClick={() => handleScroll("testimonials")}
                            className="list-none"
                        >
                            Testimonials
                        </li>
                        <li
                            onClick={() => handleScroll("faqs")}
                            className="list-none"
                        >
                            FAQs
                        </li>
                        <li
                            onClick={() => handleScroll("contact")}
                            className="list-none"
                        >
                            Contact Us
                        </li>
                    </div>
                </div>
                <div className="flex flex-col gap-4 ">
                    <p className="text-primary underline">Get Our App</p>
                    <img src={googlePlay} alt="" />
                    <img src={AppStore} alt="" />
                    <div className="flex items-center justify-center gap-2">
                        <div className="bg-pure rounded-full h-10 w-10 flex items-center justify-center">
                            <i className="uil uil-whatsapp-alt text-xl "></i>
                        </div>
                        <div className="bg-pure rounded-full h-10 w-10 flex items-center justify-center">
                            <i className="uil uil-facebook text-xl "></i>
                        </div>
                        <div className="bg-pure rounded-full h-10 w-10 flex items-center justify-center">
                            <i className="uil uil-youtube text-xl "></i>
                        </div>
                        <div className="bg-pure rounded-full h-10 w-10 flex items-center justify-center">
                            <i className="uil uil-twitter text-xl "></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-pure pt-6">
                <p>
                    Copyright ©20213 Small investors of Pakistan ! All Rights
                    Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
