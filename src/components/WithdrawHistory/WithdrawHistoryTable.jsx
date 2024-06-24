import Pagination from "components/global/pagination/index";

import RequestStatus from "components/global/RequestStatus";
import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { setPage } from "store/withdrawSlice";

const WithdrawHistoryTable = () => {
    const { docs, page, pages } = useSelector((state) => state.withdraw);
    return (
        <div className="shadow-lg overflow-x-auto my-12 rounded-lg">
            <table className="w-full table-auto overflow-x-auto rounded-lg">
                <thead className=" text-sm">
                    <tr className="bg-primary text-pure text-lg">
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Bank Name
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Account Holder
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Account No
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Withdraw Amount
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Service Charges
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Recieve Amount
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Date
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
                    {docs?.map((item, i) => (
                        <tr
                            key={item._id}
                            className="bg-white border-b border-slate-200 transition duration-300 ease-in-out text-lg"
                        >
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.withdrawBank?.bankName}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.withdrawBank?.accountHolder}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.withdrawBank?.accountNo}
                            </td>

                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.withdrawAmount}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {Math.floor(item?.withdrawFee)}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {Math.round(item?.receivedAmount)}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {moment(item?.createdAt).format("DD MMM YYYY")}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                <RequestStatus status={item?.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                <Pagination
                    currentPage={page}
                    pageCount={pages}
                    setPage={setPage}
                />
            }
        </div>
    );
};

export default WithdrawHistoryTable;
