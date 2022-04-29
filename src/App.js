import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllServices from "./Components/Pages/AllServices/AllServices";
import Banner from "./Components/Pages/Banner/Banner";
import Home from "./Components/Pages/Home/Home";
import ProductReview from "./Components/Pages/ProductReview/ProductReview";
import Testimonial from "./Components/Pages/Testimonial/Testimonial";
import Footer from "./Components/SharePage/Footer/Footer";
import Header from "./Components/SharePage/Header/Header";
import { ToastContainer } from "react-toastify"; //toast
import Blogs from "./Components/Pages/Blogs/Blogs";
import Login from "./Components/Pages/Login/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import AddItem from "./Components/Pages/AddItem/AddItem";
import MyItems from "./Components/Pages/MyItems/MyItems";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* home page components start   */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/productreview" element={<ProductReview />}></Route>
        <Route path="/allservices" element={<AllServices />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        {/* home page components end   */}
        {/* login & register start  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* login & register end  */}
        {/* if user exist route start*/}
        <Route path="/manageitems" element={<ManageItems />}></Route>
        <Route path="/additem" element={<AddItem />}></Route>
        <Route path="/myitems" element={<MyItems />}></Route>
        {/* if user exist route end */}
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
