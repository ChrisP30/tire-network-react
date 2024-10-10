import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';
import RepairServices from './components/RepairServices';
import Location from './components/Location';
import CustomerService from './components/CustomerService';
import Tires from './components/Tires';
import Guarantees from './components/Guarantee';
import Team from './components/Team';
import Story from './components/Story';
import Faq from './components/Faq';
import Owner from './components/Owner';
import OurShop from './components/OurShop';
import './styles/App.css'
import Appointments from './components/Appointments';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/repairs" element={<RepairServices />} />
          <Route path="/location" element={<Location />} />
          <Route path="/customer" element={<CustomerService />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/team" element={<Team />} />
          <Route path="/story" element={<Story />} />
          <Route path="/faq-page" element={<Faq />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/shop" element={<OurShop />} />
          <Route path="/appointments" element={<Appointments/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
