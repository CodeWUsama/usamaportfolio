import Home from '@/components/LandingPage/Home';
import Navbar from '@/components/Shared/Navbar';

import Skills from './Skills';

const LandingPage = () => (
  <div>
    <Navbar />
    <Home id="Home" />
    <Skills id="Skills" />
  </div>
);

export default LandingPage;
