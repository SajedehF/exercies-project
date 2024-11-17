import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import products1 from "../../image/products1.png";
import products2 from "../../image/products2.png";
import products3 from "../../image/products3.png";
import { Pagination } from "swiper/modules";
import useSWR from "swr";
const Products = () => {
  const { data, error } = useSWR("https://sajedehf.github.io/db.json-exercies/db.json");
  if (error)
    return <h2 className="text-center text-[30px]">{error.message}</h2>;
  return (
    <div className="products-wrapper w-full  py-10 px-20">
      <div className="container mx-auto">
        <div className="products">
          <div className="title flex flex-col items-center gap-5 justify-center">
            <p className="text-[#6F4EFD]">محصولات</p>
            <h3 className="text-[25px] text-white">جدیدترین محصولات</h3>
          </div>
          <div className="slider mt-14 relative gradient1  ">
            <div className=" gradient">
              <>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper !h-[430px]"
                >
                  {data?.products?.map((item) => {
                    return (
                      <SwiperSlide className="">
                        <div className="box relative bg-gray-100/5 h-[20rem] w-[260px] rounded-lg text-white overflow-visible group hover:bg-purple-700 ">
                          <div className="img w-[200px] h-[15rem] bg-gray-100/10 rounded-lg relative -translate-y-14  mx-auto group-hover:bg-gray-50 transition-colors flex items-center justify-center ease-linear ">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="box-body px-4 -mt-10 text-center">
                            <h2 className="font-bold text-lg text-balance line-clamp-2 overflow-hidden">
                              {item.title}{" "}
                            </h2>
                            <p className="flex items-center justify-between mt-4">
                              <span>{item.price}</span>
                              <span className="font-semibold">
                                {" "}
                                {item.rate}
                              </span>
                            </p>
                          </div>
                          <button className="absolute h-10  min-w-10 max-w-fit overflow-hidden p-4 bg-purple-700 text-white -bottom-5 rounded-md left-1/2 -translate-x-1/2 flex items-center justify-center transition group group-hover:opacity-0 z-10 group-hover:-z-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"
                              ></path>
                            </svg>
                          </button>

                          <button className="absolute h-10 opacity-0 scale-0 -z-10 min-w-10 max-w-fit overflow-hidden p-4 bg-purple-700 text-white -bottom-5 rounded-md left-1/2 -translate-x-1/2 flex items-center justify-center transition group group-hover:z-10 group-hover:opacity-100 text-nowrap group-hover:bg-gray-50 group-hover:text-purple-700 origin-center group-hover:scale-100 ">
                            افزودن به سبد خرید
                          </button>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
