import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "../css/Testimonal.css";
import icons from "../theme";
const Testimonial = () => {
  return (
    <>
      <div className="render_personal_carosuel">
        <div className="rendrr_personal_carosuel_section">
          <h1>
            MILLION REASONS TO CHOOSE F<spa style={{ color: "blue" }}>X</spa>
            MASTER
          </h1>
          <p>
            Hundreds of happy customers and loads of features to make your money
            transfer experience the best in the world.
          </p>
        </div>
        <div className="swipper_Container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            watchSlidesVisibility={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate:1,
              stretch: 0,
              depth:100,
              
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="swiper-card-item" >
                <img src={icons.man1} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  doloremque ullam eaque cum officiis voluptate, tenetur, in
                  quaerat, labore corporis nesciunt expedita fuga perferendis
                  tempore magnam inventore! Temporibus, rem vero?
                </p>
                <span>&mdash; john dae</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card-item">
                <img src={icons.man2} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  doloremque ullam eaque cum officiis voluptate, tenetur, in
                  quaerat, labore corporis nesciunt expedita fuga perferendis
                  tempore magnam inventore! Temporibus, rem vero?
                </p>
                <span>&mdash; john dae</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-card-item">
                <img src={icons.man3} alt="" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  doloremque ullam eaque cum officiis voluptate, tenetur, in
                  quaerat, labore corporis nesciunt expedita fuga perferendis
                  tempore magnam inventore! Temporibus, rem vero?
                </p>
                <span>&mdash; john dae</span>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
