import Questions from "data/QuestionsData";
import SingleQuestion from "./SingleQuestion";
import ContactUs from "./ContactUs";

const FAQ = () => {
    return (
        <section id="faqs" className="bg-primary py-8">
            <div className="text-center py-8">
                <h1 className="text-3xl text-pure font-semibold">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className=" flex flex-col gap-4 items-center">
                {/* first */}
                <div className="flex flex-col gap-4 w-[700px] pt-8 pb-4">
                    {Questions.map((question, index) => (
                        <>
                            <SingleQuestion question={question} key={index} />
                        </>
                    ))}
                </div>
                {/* 2nd */}
            </div>
            <div id="contact">
                <h1 className="text-center py-16 text-3xl text-pure font-semibold">
                    Contact Us
                </h1>
                <ContactUs />
            </div>
        </section>
    );
};

export default FAQ;
