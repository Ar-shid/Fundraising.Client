import UserHeader from "../common/UserHeader";
import Hero from "./section/Hero";
import Trusted from "../landing/section/Trusted";
import HowItWorksSection from "../landing/section/HowItWorks";
import FAQ from "./section/FAQ";
import Footer from "../common/Footer";
const HowItWork = () => {
  return (
    <>
      <UserHeader />
      <Hero />
      <Trusted />
      <HowItWorksSection />
      <FAQ />
      <Footer />
    </>
  );
};
export default HowItWork;
