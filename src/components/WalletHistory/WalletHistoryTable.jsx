import Pagination from "components/global/pagination/index";
import moment from "moment/moment";

import React from "react";
import { useSelector } from "react-redux";
import { setPage } from "store/walletSlice";

const WalletHistoryTable = () => {
    const { docs, page, pages } = useSelector((state) => state.wallet);

    return (
        <div className="shadow-lg overflow-x-auto my-12 rounded-lg">
            <table className="w-full table-auto overflow-x-auto rounded-lg">
                <thead className=" text-sm">
                    <tr className="bg-primary text-pure text-lg">
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Amount
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Action
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
                            Description
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
                                {item?.amount}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.action}
                            </td>
                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {moment(item?.createdAt).format("DD MMM YYYY")}
                            </td>

                            <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                {item?.description}
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

export default WalletHistoryTable;
