import useSWR from "swr";
import service1 from "../../image/service1.png";
import service2 from "../../image/service2.png";
import service3 from "../../image/service3.png";
import service4 from "../../image/service4.png";
const Services = () => {
  const { data, error } = useSWR("http://localhost:3000/services");
  if (error)
    return <h2 className="text-center text-[30px]">{error.message}</h2>;
  return (
    <div className="services-wrapper w-full p-5 py-10">
      <div className="container mx-auto">
        <div className="service">
          <div className="top text-center">
            <h5 className="text-[#6F4EFD]">خدمات ما</h5>
            <h2 className="text-white text-[30px] font-bold">
              ما در ایکس پاور چه خدماتی ارائه میکنیم؟{" "}
            </h2>
          </div>
          <div className="bottom flex flex-col xl:flex-row lg:flex-row xl:justify-center items-center gap-10 w-full mt-10">
            {data?.map((item) => {
              return (
                <div className="cards xl:w-[20%] lg:w-[20%] p-5 flex flex-col items-center gap-10 py-10 rounded-[15px] hover:bg-[#6F4EFD] transition-all ease-linear cursor-pointer ">
                  <img src={item.image} alt="" />
                  <h3 className="text-white font-bold text-[15px]">
                     {item.title}
                  </h3>
                  <p className="text-white">
                    {item.description}
                  </p>
                  <a href="#" className="text-white">
                    ادامه مطالب
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
