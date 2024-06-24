import DashboardHeader from "components/global/DashboardHeader";
import Layout from "components/global/Layout";
import React from "react";
import YouTube from "react-youtube";

const HowToWithdraw = () => {
    const opts = {
        height: "700",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };
    const videoId = "gaTLF4bOa-U";
    return (
        <Layout>
            <div>
                <DashboardHeader text="How To Withdraw" />
                <YouTube videoId={videoId} opts={opts} />
            </div>
        </Layout>
    );
};

export default HowToWithdraw;
