import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import Pagination from "components/global/pagination/index";
import Notification from "components/notification/Notification";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDocs, setPage, setPages } from "store/notificationSlice";

const notificationUrl = "/api/notification";
const Notifications = () => {
    const dispatch = useDispatch();
    const { docs, page, pages } = useSelector((state) => state.notification);
    const { isLoading, data: data } = useQuery({
        queryKey: ["getNotifications", page],
        queryFn: () => Fetcher(`${notificationUrl}?page=${page}`),
    });
    console.log(data);
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { docs, page, pages },
                },
            } = data;
            dispatch(setDocs(docs));
            dispatch(setPage(page));
            dispatch(setPages(pages));
        }
    }, [data]);
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Notifications" />
                </div>
                <div className="flex flex-col gap-4">
                    {docs?.map((item) => (
                        <Notification item={item} />
                    ))}

                    <div className="border-slate-200 border rounded-lg shadow-md">
                        <Pagination
                            currentPage={page}
                            pageCount={pages}
                            setPage={setPage}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Notifications;
