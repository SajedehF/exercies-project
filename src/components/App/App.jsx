import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
