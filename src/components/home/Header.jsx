import Logo from "assets/svgs/Logo";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [stickyclassName, setStickyclassName] = useState("");
    const navbarRef = useRef(null);
    function stickNavbar() {
        let windowHeight = window.scrollY;
        // console.log(windowHeight);
        if (windowHeight > 500) {
            setStickyclassName("sticky-nav");
        } else {
            setStickyclassName("");
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

    const handleScroll = (targetElementId) => {
        const element = document.getElementById(targetElementId);
        const navbarHeight =
            window.scrollY < 500
                ? navbarRef.current.clientHeight * 2
                : navbarRef.current.clientHeight;
        if (element) {
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            ref={navbarRef}
            className={`w-full relative ${stickyclassName} bg-pure`}
        >
            <nav
                className={` h-28 container mx-auto flex items-center w-full justify-between bg-pure`}
            >
                <div>
                    <Logo />
                </div>
                <div className="md:flex hidden items-center gap-4 list-none text-primary text-lg font-cutom font-semibold navbar">
                    <li onClick={() => handleScroll("home")}>Home</li>
                    <li onClick={() => handleScroll("about")}>About Us</li>
                    <li onClick={() => handleScroll("benefits")}>benifits</li>
                    <li onClick={() => handleScroll("faqs")}>FaQs</li>
                    <li onClick={() => handleScroll("contact")}>Contact Us</li>
                </div>
                <div className="flex items-center gap-2">
                    <Link to="/login">
                        <button className="btn-secondary">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn-primary">Register</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
