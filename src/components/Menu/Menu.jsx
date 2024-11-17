import { useEffect, useState } from "react";
import svg from "../../image/icons8-menu-50.png";
import useSWR from "swr";
const Menu = () => {
  const [menu, setMenu] = useState(false);
  const { data, error } = useSWR("https://sajedehf.github.io/db.json-exercies/db.json");
  if (error)
    return <h2 className="text-center text-[35px]">{error.message}</h2>;
  const clickHandler = () => {
    setMenu(!menu);
  };
  console.log(menu);

  return (
    <div className=" m-5 xl:px-20 lg:px-20">
      <div className="container mx-auto ">
        <div className="menu w-full">
          <nav className="flex w-full items-center">
            <button
              className="hamburger lg:hidden xl:hidden flex flex-wrap flex-col gap-2 md:px-2 px-5 cursor-pointer"
              onClick={clickHandler}
            >
              <img src={svg} alt="" />
            </button>
            <ul className="text-white flex w-full h-20 items-center gap-5">
              <li>
                <a href="#" className="font-bold text-[25px]">
                  x.power
                </a>
              </li>
              <div className="hidden xl:flex xl:justify-between gap-10 lg:flex ">
                {data?.menu?.map((item)=>{
                  return(
                    <li key={item.id}>
                    <a
                      href="#"
                      className="hover:text-[#6F4EFD] transition-all ease-linear"
                    >
                       {item.title}
                    </a>
                  </li>
                  )
                })}
              
                
              </div>
            </ul>

            <div>
              <a
                href="#"
                className="px-4 py-2 bg-[#6F4EFD] text-white rounded-[10px] text-nowrap hover:bg-[#5f51a0] transition-all ease-linear"
              >
                ورود ثبت نام
              </a>
            </div>
          </nav>
          {/* { {mobile menu} */}
          {menu ? (
            <ul className="text-white w-full h-48  lg:hidden  bg-gray-100/5 ">
              <div className="  gap-2  flex flex-col justify-center items-center p-5 w-full">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#6F4EFD] transition-all ease-linear"
                  >
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#6F4EFD] transition-all ease-linear"
                  >
                    فروشگاه
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#6F4EFD] transition-all ease-linear"
                  >
                    خدمات
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#6F4EFD] transition-all ease-linear"
                  >
                    بلاگ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#6F4EFD] transition-all ease-linear"
                  >
                    درباره ما
                  </a>
                </li>
              </div>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Menu;
