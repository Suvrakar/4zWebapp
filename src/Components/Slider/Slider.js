
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);





export default function App() {


    return (
        <>
            <Swiper pagination={true} autoplay= {true} delay={2000}  className="mySwiper">
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"></img>
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