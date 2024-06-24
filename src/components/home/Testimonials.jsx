import React from "react";
import Slider from "../slider/Slider";

const Testimonials = () => {
    return (
        <div id="testimonials" className="pt-10">
            <div className="text-center text-primary text-3xl font-semibold border-primary border-b-4 pb-6">
                <h1>Testimonials</h1>
            </div>
            <div >
                <Slider />
            </div>
        </div>
    );
};

export default Testimonials;
