import RequestStatus from "components/global/RequestStatus";
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { setPage } from "store/InvestSlice";
import Pagination from "components/global/pagination/index";
import NotFound from "components/global/NotFound";

const InvestmentHistoryTable = () => {
    const { docs, page, pages } = useSelector((state) => state.invest);
    return (
        <div className="shadow-lg overflow-x-auto my-12 rounded-lg">
            <table className="w-full table-auto overflow-x-auto rounded-lg">
                <thead className=" text-sm">
                    <tr className="bg-primary text-pure text-lg">
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Package Name
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Invest Amount
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Daily Income
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Total Income
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Duration
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Purchase Date
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {docs?.length > 0 ? (
                        docs?.map((item, i) => (
                            <tr
                                key={item._id}
                                className="bg-white border-b border-slate-200 transition duration-300 ease-in-out"
                            >
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.packageName}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.investAmount}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.dailyProfitAmount}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.totalReturnAmount}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.package?.timePeriod}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {moment(item?.createdAt).format(
                                        "DD MMM YYYY"
                                    )}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center flex justify-center">
                                    <RequestStatus status={item?.status} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <NotFound text={"Invests Not Found"} />
                    )}
                </tbody>
            </table>
            {docs?.length > 0 && (
                <Pagination
                    currentPage={page}
                    pageCount={pages}
                    setPage={setPage}
                />
            )}
        </div>
    );
};

export default InvestmentHistoryTable;
