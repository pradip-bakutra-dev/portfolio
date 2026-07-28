import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Origin from "../components/Origin.jsx";
import Journey from "../components/Journey.jsx";
import Toolkit from "../components/Toolkit.jsx";
import Work from "../components/Work.jsx";
import Beyond from "../components/Beyond.jsx";
import Invite from "../components/Invite.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <Hero />
      <Origin />
      <Journey />
      <Toolkit />
      <Work />
      <Beyond />
      <Invite />
      <Footer />
    </div>
  );
};

export default Index;
