import { useEffect, useState } from "react";
import Accordion from "react-accordion-comp";
import TeamStatsItem from "./TeamStatsItem";
import { useSelector } from "react-redux";

const TeamStats = () => {
    const { docs } = useSelector((state) => state.team);
    const { user } = useSelector((state) => state.user);
    const { levelOne, levelTwo, levelThree, total } =
        user?.wallet?.referralCommission;

    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <div className="bg-pure rounded-lg p-4 shadow-lg my-4">
            <div className="flex items-center justify-between border-pure border-b-[1px]">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">Team Stats</p>
                </div>
                <i
                    onClick={toggleMenu}
                    className="uil uil-angle-down text-2xl cursor-pointer"
                ></i>
            </div>
            <Accordion isOpen={show}>
                <div className="grid grid-cols-3 gap-4 items-center ">
                    <TeamStatsItem
                        title="Total Team Deposit"
                        value={docs?.stats?.totalTeamDeposit}
                    />
                    <TeamStatsItem
                        title="Total Team Commission"
                        value={total}
                    />
                    <TeamStatsItem
                        title="Total Team Members"
                        value={docs?.docsCount}
                    />
                    <TeamStatsItem
                        title="Level One Commission"
                        value={levelOne}
                        percentage={docs?.settings?.referralCommission?.level1}
                    />
                    <TeamStatsItem
                        title="Level two Commission"
                        value={levelTwo}
                        percentage={docs?.settings?.referralCommission?.level2}
                    />
                    <TeamStatsItem
                        title="Level three Commission"
                        value={levelThree}
                        percentage={docs?.settings?.referralCommission?.level3}
                    />
                </div>
            </Accordion>
        </div>
    );
};

export default TeamStats;
