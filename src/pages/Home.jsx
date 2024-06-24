import React from "react";
import Header from "components/home/Header";
import Hero from "components/home/Hero";
import About from "components/home/About";
import Benifits from "components/home/Benifits";
import Testimonials from "components/home/Testimonials";
import FAQ from "components/home/FAQ";
import Footer from "components/home/Footer";
const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Benifits />
            <Testimonials />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;
