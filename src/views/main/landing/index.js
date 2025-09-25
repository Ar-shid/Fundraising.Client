import UserHeader from "../common/UserHeader";
import Hero from "./section/Hero";
import Trusted from "./section/Trusted";
import HowItWorksSection from "./section/HowItWorks";
import Partner from "./section/Partner";
import ActiveCampaign from "./section/ActiveCampaign";
import JoinGroup from "./section/JoinGroup";
import Footer from "../common/Footer";
const Landing = () => {
  return (
    <>
      <UserHeader />
      <Hero />
      <Trusted />
      <HowItWorksSection />
      <Partner />
      <ActiveCampaign />
      <JoinGroup />
      <Footer />
    </>
  );
};
export default Landing;
