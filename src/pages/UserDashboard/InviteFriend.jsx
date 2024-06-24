import CopyReferralCode from "components/global/CopyReferralCode";
import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import React from "react";
import inviteFriend from "assets/images/invite-friend.jpg";
const InviteFriend = () => {
    return (
        <Layout>
            <div>
                <div>
                    <DashboardHeader text="Invite Friend" />
                </div>
                <div className="bg-pure p-4">
                    <div className="flex flex-col items-center gap-12">
                        <img src={inviteFriend} alt="" className=" w-[800px]" />
                        <div>
                            <h3 className="text-center text-xl font-bold">
                                Invite Your Friends
                            </h3>
                            <p className="text-gray text-lg">
                                Invite friend with your invitation code and earn
                            </p>
                        </div>
                    </div>
                    <div>
                        <CopyReferralCode referralHeading="Referral Code" />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default InviteFriend;
