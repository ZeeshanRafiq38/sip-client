import NotFound from "components/global/NotFound";
import Pagination from "components/global/pagination/index";

import React from "react";
import { useSelector } from "react-redux";
import { setPage } from "store/teamSlice";

const TeamMembersTable = () => {
    const { docs, page, pages } = useSelector((state) => state.team);
    return (
        <div className="shadow-lg overflow-x-auto my-12 rounded-lg">
            <table className="w-full table-auto overflow-x-auto rounded-lg">
                <thead className=" text-sm">
                    <tr className="bg-primary text-pure text-lg">
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Full Name
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Phone no
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Level
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Joined
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Total Deposit
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {docs?.docs?.length > 0 ? (
                        docs?.docs.map((item, i) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b border-slate-200 transition duration-300 ease-in-out text-lg"
                            >
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    level 3
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    12121212
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    1
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    13 Nov 2023 03:50 PM
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    50000
                                </td>
                            </tr>
                        ))
                    ) : (
                        <NotFound text={"Team Not Found"} />
                    )}
                </tbody>
            </table>
            {docs?.docs?.length > 0 && (
                <Pagination currentPage={page} pageCount={pages} setPage={setPage} />
            )}
        </div>
    );
};

export default TeamMembersTable;
