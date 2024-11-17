import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import video1 from "../../image/video1.png";
import video2 from "../../image/video2.png";
const Learning = () => {
  const videos = [
    {
      id: 1,
      title: "آموزش جلو بازو ایستاده",
      description:
        "هیچ وقت دو تا از حرکات جلو بازو را با هم یکی نپیچید. شما باید بین حرکات جلو بازو یک منظوم و ترکیب تعادل داشته باشید. از آنجایی که عضلات جلو بازو نماد قدرت مرد شناخته می شود، حرکات جلو بازو باید کاملاً به دقت و صحیح اجرا شوند.",
      videoUrl: "../../image/video1.png",
    },
    {
      id: 2,
      title: "آموزش حرکت دیگر",
      description: "توضیحات مربوط به حرکت دوم.",
      videoUrl: "../../image/video1.png",
    },
    {
      id: 3,
      title: "آموزش حرکت دیگر",
      description: "توضیحات مربوط به حرکت دوم.",
      videoUrl: "../../image/video2.png",
    },
  ];
  return (
    <div className=" p-6 flex justify-center items-center min-h-screen">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        modules={[Pagination]}
        className="w-full max-w-6xl"
      >
        <SwiperSlide>
          <div className="md:w-[75%]">
            <div className="relative w-full h-full">
              <img
                src={video1}
                alt=""
                className="w-full h-64 object-cover md:h-full"
              />
              {/* Video Controls (for decoration) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ⏪
                </button>
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ▶️
                </button>
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ⏩
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center bg-[#6F4EFD] rounded-lg overflow-hidden  w-full">
            {/* Text Content */}
            <div className="lg:p-20 xl:p-20 py-2 px-2 md:w-[90%] text-start">
              <h2 className="text-purple-300 text-2xl font-semibold mb-4">
                🎥 ویدیو آموزشی
              </h2>
              <h3 className="text-white text-xl font-bold mb-2">
                آموزش جلو بازو ایستاده
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">
                هیچ وقت دو تا از حرکات جلو بازو با هم یکی نیستند.شما باید مابین
                حرکات جلو بازو تک منظوره و ترکیبی تعادل داشته باشید. از آنجایی
                که عضلات جلو بازو نماد قدرت هر شخص شناخته می شود، حرکات جلو بازو
                باید کاملا به دقت و صحیح اجرا شوند.
              </p>
            </div>

            {/* Video/Image Preview */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:w-[75%]">
            <div className="relative w-full h-full">
              <img
                src={video1}
                alt=""
                className="w-full h-40 object-cover md:h-full"
              />
              {/* Video Controls (for decoration) */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ⏪
                </button>
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ▶️
                </button>
                <button className="w-8 h-8  rounded-full text-white flex items-center justify-center">
                  ⏩
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Learning;
