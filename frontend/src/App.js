import HomePage from "./Pages/HomePage";
import Options from "./Pages/OptionPage";
import QrPage from "./Pages/QrPage";
import Doctor from "./Pages/Register/Doctor";
import Manufacturer from "./Pages/Register/Manufacturer";
import Retailer from "./Pages/Register/Retailer";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="Retailer" element={<Retailer/>}/> 
      <Route path="Doctor" element={<Doctor/> }/>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Manufacturer" element={<Manufacturer />} />
      <Route path="Options" element={<Options />} />
      <Route path="SignIn" element={<SignIn/>} />
      <Route path="Qr"    element={<QrPage/>}/>
      
    </Routes>
    

   
     
      
    </BrowserRouter>
  );
}

export default App;