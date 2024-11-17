import icon1 from "../../image/icon1.png";
import icon2 from "../../image/icon2.png";
import icon3 from "../../image/icon3.png";
import icon4 from "../../image/icon4.png";
import footer1 from "../../image/footer1.png";
import footer2 from "../../image/footer2.png";
import footer from "../../image/ENAMADpng.parspng 1.png";
const Footer = () => {
  return (
    <div className="footer-wrapper w-full">
      <div className=" ">
        <div className="footer">
          <div className="xl:px-48 lg:px-48 w-[100%] pt-32">
            <div className="top footer-top rounded-[15px] lg:w-[90%] xl:w-[90%] h-32 flex flex-col items-center xl:flex-row lg:flex-row justify-between px-5 container mx-auto">
              <div className="text-white w-full items-center flex justify-center">
                <p>۰۲۱ ۳۴۵۶ ۲۲۴۵: شماره تماس</p>
              </div>
              <div className="text-white flex flex-col xl:flex-row lg:flex-row justify-end w-full items-center h-full gap-2">
                <p>ما را در شبکه های اجتماعی دنبال کنید</p>
                <div className="flex   justify-center gap-2">
                  <div className="icon p-3 rounded-[5px]">
                    <a href="#">
                      <img src={icon1} alt="" />
                    </a>
                  </div>
                  <div className="icon p-3 rounded-[5px]">
                    <a href="#">
                      <img src={icon2} alt="" />
                    </a>
                  </div>
                  <div className="icon p-3 rounded-[5px]">
                    <a href="#">
                      <img src={icon3} alt="" />
                    </a>
                  </div>
                  <div className="icon p-3 rounded-[5px]">
                    <a href="#">
                      <img src={icon4} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#6F4EFD] p-10 px-20">
            <div className="flex flex-col items-center gap-10 xl:flex-row lg:flex-row container mx-auto">
            <nav className="flex flex-col items-center xl:flex-row lg:flex-row w-[75%] gap-20">
              <ul className="text-white flex flex-col gap-5">
                <li>
                  <a href="" className="font-bold text-[20px]">
                    راهنمای مشتریان
                  </a>
                </li>
                <li>
                  <a href=""> پاسخ به پرسش های متداول</a>
                </li>
                <li>
                  <a href=""> روش های ارسال کالا</a>
                </li>
                <li>
                  <a href=""> روش های پرداخت</a>
                </li>
                <li>
                  <a href="">قوانین و مقررات</a>
                </li>
              </ul>
              <ul className="text-white flex flex-col gap-5">
                <li>
                  <a href="" className="font-bold text-[20px]">
                    راهنمای مشتریان
                  </a>
                </li>
                <li>
                  <a href=""> پاسخ به پرسش های متداول</a>
                </li>
                <li>
                  <a href=""> روش های ارسال کالا</a>
                </li>
                <li>
                  <a href=""> روش های پرداخت</a>
                </li>
                <li>
                  <a href="">قوانین و مقررات</a>
                </li>
              </ul>
            </nav>
            <div className="w-[25%] flex flex-col xl:flex-row lg:flex-row gap-5 items-center">
              <a href="#">
                <img src={footer1} alt="" />
              </a>
              <a href="#" className="p-4 bg-white rounded-[10px] ">
                <img src={footer} alt="" />
              </a>
            </div>
            </div>
            <div className="last text-white p-5 text-center mt-10 rounded-[10px]">
            <p>کلیه حقوق متعلق به این وبسایت می باشد.</p>
          </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
