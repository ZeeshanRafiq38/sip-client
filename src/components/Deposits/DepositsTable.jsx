import React from "react";
import RequestStatus from "components/global/RequestStatus";
import { useSelector } from "react-redux";
import { setPage } from "store/depositSlice";
import moment from "moment/moment";
import NotFound from "components/global/NotFound";
import Pagination from "components/global/pagination/index";


const DepositsTable = () => {
    const { docs, page, pages } = useSelector((state) => state.deposit);

    return (
        <div className="shadow-lg overflow-x-auto my-12 rounded-lg">
            <table className="w-full table-auto overflow-x-auto rounded-lg">
                <thead className=" text-sm">
                    <tr className="bg-primary text-pure text-lg">
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Deposit Amount
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            From Bank Name
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            To Bank Name
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className=" font-medium px-6 py-4 text-center"
                        >
                            Purchase Date
                        </th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {docs?.length > 0 ? (
                        docs?.map((item, i) => (
                            <tr
                                key={item?._id}
                                className="bg-white border-b border-slate-200 transition duration-300 ease-in-out text-lg"
                            >
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.username}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.amount}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.bankName}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {item?.depositBank?.bankName}
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    <RequestStatus status={item?.status} />
                                </td>
                                <td className=" text-gray-900  px-6 py-4 whitespace-nowrap text-center">
                                    {moment(item?.createdAt).format(
                                        "DD MMM YYYY"
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <NotFound text="Deposits Not Found" />
                    )}
                </tbody>
            </table>
            {docs.length > 0 && (
                <Pagination
                    currentPage={page}
                    pageCount={pages}
                    setPage={setPage}
                />
            )}
        </div>
    );
};

export default DepositsTable;
