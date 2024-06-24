import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper container "
        >
            <SwiperSlide className="pl-[100px] ">
                <div className="text-left leading-loose border-l-4 border-primary pl-6">
                    <h2 className="text-primary  font-bold text-4xl">SIP</h2>
                    <p className="text-secondary">
                        has made investing so simple and profitable. The
                        security measures put my mind at ease, and I can easily
                        <br />
                        track my earnings. I'm excited about the financial
                        future SIP is helping me build.
                    </p>
                </div>
                <div className="text-primary font-medium flex items-center gap-4 justify-center">
                    <span className="text-primary pt-3">___</span>
                    <span className="pt-8">Ahmad Malik</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pl-[100px]">
                <div className="text-left leading-loose border-l-4 border-primary pl-6">
                    <h2 className="text-primary  font-bold text-4xl">SIP</h2>
                    <p className="text-secondary">
                        has made investing so simple and profitable. The
                        security measures put my mind at ease, and I can easily
                        <br />
                        track my earnings. I'm excited about the financial
                        future SIP is helping me build.
                    </p>
                </div>
                <div className="text-primary font-medium flex items-center gap-4 justify-center">
                    <span className="text-primary pt-3">___</span>
                    <span className="pt-8">Ayesha Malik</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="pl-[100px]">
                <div className="text-left leading-loose border-l-4 border-primary pl-6">
                    <h2 className="text-primary  font-bold text-4xl">I've</h2>
                    <p className="text-secondary">
                        has made investing so simple and profitable. The
                        security measures put my mind at ease, and I can easily
                        <br />
                        track my earnings. I'm excited about the financial
                        future SIP is helping me build.
                    </p>
                </div>
                <div className="text-primary font-medium flex items-center gap-4 justify-center">
                    <span className="text-primary pt-3">___</span>
                    <span className="pt-8">Imran Khan</span>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;
