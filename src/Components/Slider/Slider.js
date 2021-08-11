
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);




export default function App() {


    return (
        <>
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                navigation={false}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
                    <div style={{ position: 'relative' }}>
                        <p style={{ position: 'absolute' }}>T-shirts</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80"></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}