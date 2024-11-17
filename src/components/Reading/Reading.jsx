import reading1 from "../../image/reading1.png";
import reading2 from "../../image/reading2.png";
import reading3 from "../../image/reading3.png";
import arrow from "../../image/Arrow---Left-Square.png";
import useSWR from "swr";
const Reading = () => {
  const { data, error } = useSWR("http://localhost:3000/reading");
  if (error)
    return <h2 className="text-center text-[30px]">{error.message}</h2>;
  return (
    <div className="reading-wrapper w-full">
      <div className="container mx-auto">
        <div className="reading">
          <div className="title">
            <h2 className="text-white text-[25px] text-center font-bold">
              جدیدترین مقالات
            </h2>
          </div>
          <div className="main pt-10 flex flex-col lg:justify-center xl:justify-center gap-10 lg:flex-row xl:flex-row items-center ">
            {data?.map((item)=>{
              return(
                <div className="part text-white lg:w-[25%] reading-part rounded-[10px] group relative h-fit">
              <div className="img w-full cursor-pointer">
                <img src={item.image} className="w-full" alt="" />
              </div>
              <div className="title p-10 flex flex-col gap-5 hover:bg-[#6F4EFD] cursor-pointer">
                <h2 className="font-bold text-[15px]">
                   {item.title}
                </h2>
                <div className="w-[88%]">
                <p className="">
                  {item.description}
                </p>
                </div>
                
              </div>
              <div className="arrow absolute right-[38%] bottom-[-6%]">
                <img src={arrow} alt="" />
              </div>
            </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;
