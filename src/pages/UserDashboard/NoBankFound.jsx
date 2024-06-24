import Layout from "components/global/Layout";
import React from "react";
import { Link } from "react-router-dom";

const NoBankFound = () => {
    return (
        <Layout>
            <div className="h-screen">
                <div className="bg-primary rounded-md flex flex-col items-center justify-center p-10">
                    <p className="text-lg text-pure font-medium">
                        First you should add bank details then you can withdraw
                        amount
                    </p>
                    <Link
                        to="/add-withdraw-details"
                        className="mt-6 border border-pure text-pure px-6 py-2 rounded-full  hover:bg-pure hover:text-black hover:border-black transition-all"
                    >
                        Add Bank details
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default NoBankFound;
