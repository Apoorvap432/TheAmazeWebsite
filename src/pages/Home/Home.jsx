import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/sections/Hero";
import TrustedCompanies from "../../components/sections/TrustedCompanies";
import Solutions from "../../components/sections/Solutions";
import Features from "../../components/sections/Features";
import Dashboard from "../../components/sections/Dashboard";
import Modules from "../../components/sections/Modules";
import Benefits from "../../components/sections/Benefits";
import Testimonials from "../../components/sections/Testimonials";
import FAQ from "../../components/sections/FAQ";
import CTA from "../../components/sections/CTA";
import Footer from "../../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Solutions />
      <Features />
      <Dashboard />
      <Modules />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;