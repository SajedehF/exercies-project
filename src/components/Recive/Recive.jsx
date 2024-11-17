import icon from "../../image/Ellipse 132.png";
import award from "../../image/Award.png";
import photo from "../../image/Frame 5.png";
const Recive = () => {
  return (
    <div className="recive-wrapper overflow-hidden   ">
      <div className="mx-auto container w-full  ">
        <div className="recive flex xl:flex-row lg:flex-row flex-col w-full items-center px-20">
          <div className="right w-full xl:block md:w-full xl:w-[80%] xl:text-start md:text-center  md:flex md:flex-col md:justify-center md:items-center ">
            <div className="flex flex-col gap-5">
              <h2 className=" right-recive font-bold text-[35px] xl:w-[65%] ">
                هر آنچه برای رسیدن به اندام ایده آل نیاز دارید
              </h2>
              <h4 className="text-[#6F4EFDA3] xl:w-[60%] xl:mt-5">
                تخصصی ترین وبسایت بدنسازی درایران با مجوز رسمی
              </h4>
              <div className="box xl:w-[65%] lg:w-[65%] rounded-[10px] p-10 ">
                <p className="text-white leading-7">
                  با بیش از ۲۵ سال تجربه در ورزش بدنسازی و تناسب اندام تصمیم
                  گرفتیم دانش و تجربه خود را در اختیار همه علاقه‌مندان به این
                  رشته ورزشی جذاب قرار دهیم.
                </p>
                <div className=""></div>
              </div>
              <div className="text-main flex gap-2 xl:gap-14 lg:gap-14 text-nowrap w-full justify-center lg:justify-start xl:justify-start  ">
                <div className="text">
                  <span className="font-bold text-white text-[25px]">
                    2000+
                  </span>
                  <p className="text-[#8F82CA]">کاربر فعال</p>
                </div>
                <div className="text">
                  <span className="font-bold text-white text-[25px]">
                    2500+
                  </span>
                  <p className="text-[#8F82CA]">مکمل بدنسازی</p>
                </div>
                <div className="text">
                  <span className="font-bold text-white text-[25px]">
                    1000+
                  </span>
                  <p className="text-[#8F82CA]">رژیم غذایی آنلاین</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-full py-10 ">
        <div className="w-full bg-[#684CEB] text-white  xl:-rotate-[1deg] py-5   ">
          <p className="font-bold text-[30px]  text-center ">
            همه می خواهند بدنساز باشند اما کسی نمی خواهد وزنه های سنگین بلند
            کند!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recive;
