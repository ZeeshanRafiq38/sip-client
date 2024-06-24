import React from "react";
import FaysalBank from "./FaysalBank";
import MeezanBank from "./MeezanBank";
import UblBank from "./UblBank";
import AlliedBank from "./AlliedBank";
import { useSelector } from "react-redux";
const PackagesMain = () => {
    const { docs } = useSelector((state) => state.package);

    return (
        <div className="grid grid-cols-2 gap-8 pb-8">
            {docs?.map((item) => (
                <div key={item?._id}>
                    <UblBank item={item} />
                </div>
            ))}
        </div>
    );
};

export default PackagesMain;
{
    /* <FaysalBank />
            <MeezanBank /> */
}
{
    /* <AlliedBank /> */
}
