import Home from '@/components/LandingPage/Home';
import Navbar from '@/components/Shared/Navbar';

import Footer from '../Footer';

import Contact from './Contact';
import Education from './Education';
import Experiences from './Experiences';
import Projects from './Projects';
import Skills from './Skills';

const LandingPage = () => (
  <div>
    <Navbar />
    <Home id="Home" />
    <Skills id="Skills" />
    <Experiences id="Experiences" />
    <Education id="Education" />
    <Projects id="Projects" />
    <Contact id="Contact" />
    <Footer />
  </div>
);

export default LandingPage;
