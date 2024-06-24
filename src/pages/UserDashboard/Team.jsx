import TeamMembersTable from "components/Team/TeamMembersTable";
import TeamStats from "components/Team/TeamStats";
import UplinerDetails from "components/Team/UplinerDetails";
import DashboardHeader from "components/global/DashboardHeader";
import Date from "components/global/Date";
import Layout from "components/global/Layout";
import Search from "components/global/Search";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDocs, setPage, setPages } from "store/teamSlice";

const teamUrl = "/api/user/team";
const Team = () => {
    const [filterData, setFilterData] = useState({
        level: "",
        from: "",
        to: "",
    });
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { page } = useSelector((state) => state.team);
    const { isLoading, data: teamData } = useQuery({
        queryKey: ["getTeam", filterData?.level],
        queryFn: () =>
            Fetcher(
                `${teamUrl}/${user?._id}?page=${page}&level=${filterData?.level}&from=${filterData?.from}&to=${filterData.to}`,
                user
            ),
    });
    useEffect(() => {
        if (teamData) {
            const {
                data: { data, page, pages },
            } = teamData;
            dispatch(setDocs(data));
            dispatch(setPage(page));
            dispatch(setPages(pages));
        }
    }, [teamData]);
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Team Details" />
                </div>
                <div>
                    <UplinerDetails />
                </div>
                <div>
                    <TeamStats />
                </div>
                <div className="py-6">
                    <h2 className="text-primary font-semibold text-lg">
                        Apply Filters
                    </h2>
                </div>
                <div className=" bg-pure p-4 flex flex-col gap-4 shadow-lg rounded-md">
                    <div className="rounded-lg grid grid-cols-2 gap-8">
                        <Search label={"Status"} />
                        <div>
                            <p className="text-gray font-bold text-lg">
                                All Levels
                            </p>
                            <select
                                name="cars"
                                id="cars"
                                className="border-slate-200 border w-full rounded-md p-4 outline-none focus:border-red-600"
                            >
                                <option value="volvo">All</option>
                                <option value="saab">Level 1</option>
                                <option value="mercedes">Level 2</option>
                                <option value="audi">Level 3</option>
                            </select>
                        </div>
                        <Date
                            label={"From"}
                            type={"date"}
                            name="from"
                            data={filterData}
                            setData={setFilterData}
                        />
                        <Date
                            label={"To"}
                            type={"date"}
                            name="to"
                            data={filterData}
                            setData={setFilterData}
                        />
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <button className="btn-primary">Search</button>
                    </div>
                </div>
                <div>
                    <TeamMembersTable />
                </div>
            </div>
        </Layout>
    );
};

export default Team;
