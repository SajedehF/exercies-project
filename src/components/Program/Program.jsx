import program from "../../image/program.png";
import time from "../../image/time.png";
import medal from "../../image/medal.png";
const Program = () => {
  return (
    <div className="program-wrapper w-full">
      <div className="container mx-auto px-10 lg:px-20 py-10">
        <div className="program flex flex-col gap-10 lg:flex-row">
          <div className="right lg:w-[55%]">
            <div className="lg:w-[60%]">
              <h2 className="text-[#BDADFF] font-bold text-[35px]">
                برنامه تمرینی کاملا اختصاصی برای شما...
              </h2>
              <p className="praghrap leading-8">
                هر کسی با یه هدفی ورزش میکنه، کاهش وزن ،افزایش وزن، بدنسازی، حفظ
                تناسب اندامش ، آسیب جسمانی خیلیا هم نمیذاره بعضی از حرکات رو
                انجام بدن ، با ایکس پاور یه برنامه ورزشی کاملا مختص به شرایط
                خودتون دریافت خواهید کرد.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row xl:flex-row h-32 w-[30%] lg:w-[25%] gap-10 mt-10">
              <div className="">
                <a
                  href="#"
                  className="text-white text-nowrap px-4 py-2 bg-[#6F4EFD] rounded-[10px]"
                >
                  دریافت برنامه تمرینی
                </a>
              </div>

              <p className="text-white text-nowrap">مشاهده نظر کاربران</p>
            </div>
          </div>
          <div className="left relative shadow">
            <div className="img ">
              <img src={program} className="rounded-[10px]" alt="" />
            </div>
            <div className="time w-[30%] px-5  bg-black/65 rounded-[10px] absolute top-[40%] h-[9rem] left-[76%] md:left-[82%] lg:left-[85%]">
              <img src={time} className="-mt-10" alt="" />
              <p className="text-white">برنامه تمرینی کاملا ختصاصی</p>
            </div>
            <div className="medal w-[30%] px-5  bg-black/55 rounded-[10px] absolute p-2 top-[90%] right-[60%] h-[9rem] ">
              <img src={medal} className="-mt-10" alt="" />
              <p className="text-white"> زیر نظر بهترین مربی ها</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
