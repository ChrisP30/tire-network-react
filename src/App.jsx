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
          <Route exact path="/tire-network-react/" element={<Home />} />
          <Route path="/tire-network-react/careers" element={<Careers />} />
          <Route path="/tire-network-react/contact-us" element={<ContactUs />} />
          <Route path="/tire-network-react/repairs" element={<RepairServices />} />
          <Route path="/tire-network-react/location" element={<Location />} />
          <Route path="/tire-network-react/customer" element={<CustomerService />} />
          <Route path="/tire-network-react/tires" element={<Tires />} />
          <Route path="/tire-network-react/guarantees" element={<Guarantees />} />
          <Route path="/tire-network-react/team" element={<Team />} />
          <Route path="/tire-network-react/story" element={<Story />} />
          <Route path="/tire-network-react/faq-page" element={<Faq />} />
          <Route path="/tire-network-react/owner" element={<Owner />} />
          <Route path="/tire-network-react/shop" element={<OurShop />} />
          <Route path="/tire-network-react/appointments" element={<Appointments/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
