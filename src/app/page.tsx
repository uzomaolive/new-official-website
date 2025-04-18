import type { Metadata } from 'next';
import Header from './components/Header'; //  Import Header
import Footer from './components/Footer';  // Import Footer
import Hero from './components/Hero'; // Import Hero
import About from './components/About'; // Import About
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import BouncingArrow from './components/BouncingArrowProps';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <div>
      <Header /> 
      <Hero />
      <BouncingArrow />
      <About />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}


