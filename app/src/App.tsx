import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Policy from '@/pages/Policy';
import Park from '@/pages/Park';
import Service from '@/pages/Service';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Register from '@/pages/Register';
import ParkApply from '@/pages/ParkApply';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/park" element={<Park />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/park-apply" element={<ParkApply />} />
    </Routes>
  );
}

export default App;
