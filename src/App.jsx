import { Routes, Route } from "react-router-dom";

import NavbarComponents from "./components/NavbarComponent"

import FooterComponents from "./components/FooterComponent"



import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import FaqPage from "./pages/FaqPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"
import Testimonial from "./pages/Testimonial"
import JoinWithUs from "./pages/JoinWithUs";
import SignUp from "./pages/SignUp";



function App() {
 
  return <div>
    <NavbarComponents/>
    
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/kelas" Component={KelasPage}/>
      <Route path="/testimonial" Component={Testimonial}/>
      <Route path="/faq" Component={FaqPage}/>
      <Route path="/syaratketen" Component={SyaratKetenPage}/>
      <Route path="/joinwithus" Component={JoinWithUs}/>
      <Route path="/signup" Component={SignUp}/>
    </Routes>

    <FooterComponents/>
  </div>
}

export default App;
