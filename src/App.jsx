import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/SignUp';
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import Pistol1 from './pages/Pistol1';
import Pistol2 from './pages/Pistol2';
import Pistol3 from './pages/Pistol3';
import Pistol4 from './pages/Pistol4';
import Pistol5 from './pages/Pistol5';
import Rifle1 from './pages/Rifle1';
import Rifle2 from './pages/Rifle2';
import Rifle3 from './pages/Rifle3';
import Rifle4 from './pages/Rifle4';
import Rifle5 from './pages/Rifle5';
import Shotgun1 from './pages/Shotgun1';
import Shotgun2 from './pages/Shotgun2';
import Shotgun3 from './pages/Shotgun3';
import Shotgun4 from './pages/Shotgun4';
import Shotgun5 from './pages/Shotgun5';
import Magazine1 from './pages/Magazine1';
import Magazine2 from './pages/Magazine2';
import Magazine3 from './pages/Magazine3';
import Optics1 from './pages/Optics1';
import Optics2 from './pages/Optics2';
import Optics3 from './pages/Optics3';
import Knives1 from './pages/Knives1';
import Knives2 from './pages/Knives2';
import Knives3 from './pages/Knives3';
import Ammunition1 from './pages/Ammunition1';


function App(){
  

  return(
    <>
      <Router>
        <Routes>
        <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Product/m&p bodyguard 380" element={<Pistol1/>}/>
          <Route path="/Product/micro amethyst" element={<Pistol2/>}/>
          <Route path="/Product/sr1911" element={<Pistol3/>}/>
          <Route path="/Product/sr9" element={<Pistol4/>}/>
          <Route path="/Product/supermatchii" element={<Pistol5/>}/>
          <Route path="/Product/rx22" element={<Rifle1/>}/>
          <Route path="/Product/mk3" element={<Rifle2/>}/>
          <Route path="/Product/rock island m16" element={<Rifle3/>}/>
          <Route path="/Product/522" element={<Rifle4/>}/>
          <Route path="/Product/mpx" element={<Rifle5/>}/>
          <Route path="/Product/ghost-ring" element={<Shotgun1/>}/>
          <Route path="/Product/fabarm" element={<Shotgun2/>}/>
          <Route path="/Product/m500" element={<Shotgun3/>}/>
          <Route path="/Product/m930" element={<Shotgun4/>}/>
          <Route path="/Product/field-silver" element={<Shotgun5/>}/>
          <Route path="/Product/mag1" element={<Magazine1/>}/>
          <Route path="/Product/mag2" element={<Magazine2/>}/>
          <Route path="/Product/mag3" element={<Magazine3/>}/>
          <Route path="/Product/acog3" element={<Optics1/>}/>
          <Route path="/Product/romeo1" element={<Optics2/>}/>
          <Route path="/Product/bravo4" element={<Optics3/>}/>
          <Route path="/Product/baton1" element={<Knives1/>}/>
          <Route path="/Product/baton2" element={<Knives2/>}/>
          <Route path="/Product/flash2" element={<Knives3/>}/>
          <Route path="/Product/ammu1" element={<Ammunition1/>}/>
          

          

        </Routes>
      </Router>
    
      
  
      
    </>
  );
}

export default App
