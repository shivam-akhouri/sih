import HomePage from "./Pages/HomePage";
import Options from "./Pages/OptionPage";
import QrPage from "./Pages/QrPage";
import Doctor from "./Pages/Register/Doctor";
import Manufacturer from "./Pages/Register/Manufacturer";
import Retailer from "./Pages/Register/Retailer";
import DocSignIn from "./Pages/SignIn/DocSignIn.jsx";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DocPass from "./Pages/Password/DocPass";
import SupplierPass from "./Pages/Password/SupplierPass";
import RetailerPass from "./Pages/Password/RetailerPass";
import RetSignIn from "./Pages/SignIn/RetSignIn";
import SupSignIn from "./Pages/SignIn/SupSignIn";

function App() {
  return (
    <>
    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'center',width:'100%',backgroundColor:'teal',position:'fixed'}}>
      <Navbar/>
     </div>
    <BrowserRouter>
    <Routes>
  
      <Route path="/" element={<HomePage/>} />
      <Route path="Retailer" element={<Retailer/>}/> 
      <Route path="Doctor" element={<Doctor/> }/>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Manufacturer" element={<Manufacturer />} />
      <Route path="Options" element={<Options />} />
      <Route path="/DocSignIn" element={<DocSignIn/>} />
      <Route path="/RetSignIn" element={<RetSignIn/>} />
      <Route path="/SupSignIn" element={<SupSignIn/>} />
      <Route path="Qr"    element={<QrPage/>}/>

      <Route path="/Retailer/RetailerPass" element={<RetailerPass/>} />
      <Route path="/Doctor/DocPass" element={<DocPass/>} />
      <Route path="/Manufacturer/SupplierPass" element={<SupplierPass/>} />
   
      
    </Routes>
    

   
    
      
    </BrowserRouter>
   
    
    </>);
}

export default App;