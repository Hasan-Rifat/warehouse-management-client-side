import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllCars from "./Components/Pages/AllCars/AllCars";
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
import NotFound from "./Components/Pages/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Social from "./Components/Pages/Login/Social/Social";
import RequireAuth from "./Components/Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        {/* home page components start   */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/productreview" element={<ProductReview />}></Route>
        <Route path="/AllCars" element={<AllCars />}></Route>
        <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        {/* home page components end   */}
        {/* login & register start  */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/social" element={<Social />}></Route>
        {/* login & register end  */}

        {/* if user exist route start*/}
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* if user exist route end */}
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
