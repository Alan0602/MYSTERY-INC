import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import LoginInput from "./components/LoginInput";
type Props = {};

export const Login = (_props: Props) => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate("/dashboard");
    };
    return (
        <div className={styles.Wrapper}>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                    // additional configurations
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className={styles.swiperSection}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>{" "}
                <div className="signup">
                    <h1>Sign In</h1>
                    <LoginInput />
                </div>
            </Swiper>
            <div className={styles.submitButton}>
                <p>
                    Not have an account?&nbsp;<a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};
