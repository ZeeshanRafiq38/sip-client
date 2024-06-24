import ContactUsSvg from "assets/svgs/Dashboard/ContactUsSvg";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import React from "react";

const ContactUs = () => {
    return (
        <Layout>
            <div className="pb-12">
                <div>
                    <DashboardHeader text="Contact Us" />
                </div>
                <div className="bg-pure p-4 flex flex-col items-center justify-center gap-6 rounded-lg pb-12 shadow-lg ">
                    <ContactUsSvg />
                    <p className="text-lg font-semibold">
                        To get our latest updates join our whatsapp community
                        group.
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="btn-secondary">
                            Join SIP Community Group
                        </button>
                        <button className="btn-primary flex items-center gap-1">
                            <i className="uil uil-whatsapp text-xl"></i>
                            Chat With Us
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;
