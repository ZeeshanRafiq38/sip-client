import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-pure container mx-auto">
            <img
                src="https://fir-course-989a4.web.app/static/media/contact.627bacbca06bd46d0880.png"
                alt="contact-us"
            />
            <div className="py-8 flex flex-col gap-4 items-center">
                <p className=" text-lg text-center text-secondary font-semibold">
                    To get our latest updates <br /> join ourwhatsapp community
                    group.
                </p>
                <div className="flex items-center gap-8">
                    <button className="btn-secondary flex items-center gap-2">
                        <i className="uil uil-whatsapp text-xl"></i>
                        <span>Join SIP Community Group</span>
                    </button>
                    <button className="btn-primary">Chat With Us</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
