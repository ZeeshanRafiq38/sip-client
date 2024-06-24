import Username from "assets/svgs/Username";
import CopyReferralCode from "components/global/CopyReferralCode";
import NotFound from "components/global/NotFound";
import { useState } from "react";
import Accordion from "react-accordion-comp";
import { useSelector } from "react-redux";

const UplinerDetails = () => {
    const { docs } = useSelector((state) => state.team);
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    };
    return (
        <div className="bg-pure rounded-lg p-4 shadow-lg">
            <div className="flex items-center justify-between border-pure border-b-[1px]">
                <div className="flex items-center gap-2">
                    <Username />
                    <p className="text-lg font-semibold">Upliner Details</p>
                </div>
                <i
                    onClick={toggleMenu}
                    className="uil uil-angle-down text-2xl cursor-pointer"
                ></i>
            </div>
            <Accordion isOpen={show}>
                {docs?.upliner ? (
                    <div>
                        <div className="py-8 flex items-center gap-4">
                            <img
                                src="http://66.29.144.68:4646/users/1699880103925-927383349.jpg"
                                alt="upliner-details"
                                className="w-28"
                            />
                            <div className="flex flex-col leading-tight">
                                <p className="text-primary font-semibold text-lg">
                                    Level1
                                </p>
                                <span className="text-gray text-sm">
                                    03160680394
                                </span>
                            </div>
                        </div>
                        <div>
                            <CopyReferralCode value="http://66.29.144.68:3000/register?ref_code=SIP-4okl46-_lliGZ_2ksnutJ" />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <NotFound text="Upliner Not Found" />
                    </div>
                )}
            </Accordion>
        </div>
    );
};

export default UplinerDetails;
