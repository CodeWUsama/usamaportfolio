import Home from '@/components/LandingPage/Home';
import Navbar from '@/components/Shared/Navbar';

import Footer from '../Footer';

import Experiences from './Experiences';
import Skills from './Skills';

const LandingPage = () => (
  <div>
    <Navbar />
    <Home id="Home" />
    <Skills id="Skills" />
    <Experiences id="Experiences" />
    <Footer />
  </div>
);

export default LandingPage;
