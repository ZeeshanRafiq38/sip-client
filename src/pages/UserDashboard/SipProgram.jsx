import Card from "components/SipProgram/Card";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import Fetcher from "components/utils/Fetcher";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDocs } from "store/sipProgramSlice";

const prizeUrl = "/api/prize/active";
const SipProgram = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { docs } = useSelector((state) => state.sipProgram);
    const { isLoading, data: data } = useQuery({
        queryKey: ["getprize"],
        queryFn: () => Fetcher(prizeUrl, user),
    });
    useEffect(() => {
        if (data) {
            const {
                data: {
                    data: { docs },
                },
            } = data;
            dispatch(setDocs(docs));
        }
    }, [data]);
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="SIP Programs" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {docs?.map((item) => (
                        <div key={item?.id}>
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default SipProgram;
