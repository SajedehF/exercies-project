import axios from "axios";
import { SWRConfig } from "swr";
import Menu from "../../components/Menu/Menu";
import Recive from "../../components/Recive/Recive";
import Services from "../../components/Services/Services";
import Products from "../../components/Products/Products";
import Program from "../../components/Program/Program";
import Learning from "../../components/Learning/Learning";
import Reading from "../../components/Reading/Reading";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          refreshInterval: 10000,
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <Menu />
        <Recive />
        <Services />
        <Products />
        <Program />
        <Learning />
        <Reading />
        <Footer />
      </SWRConfig>
    </>
  );
};

export default Home;
