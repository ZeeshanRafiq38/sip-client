import { useState } from "react";
import Accordion from "react-accordion-comp";

const SingleQuestion = ({ question, index }) => {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    };
    return (
        <div className="border-pure border-b-[1px]">
            <div
                key={index}
                className="flex items-center justify-between  pb-2 "
            >
                <p className="text-left text-pure text-xl">
                    {question.Question}
                </p>
                <i
                    className={`uil ${
                        show ? "uil-angle-up" : "uil-angle-down"
                    } text-2xl text-pure cursor-pointer`}
                    onClick={toggleMenu}
                ></i>
            </div>
            <Accordion isOpen={show}>
                <p className="text-pure text-lg py-3">{question.Detail}</p>
            </Accordion>
        </div>
    );
};

export default SingleQuestion;
