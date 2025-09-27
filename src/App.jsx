import Navbar from "./assets/Navbar.jsx";
import Overview from "./assets/Overview.jsx";
import Timeline from "./assets/Timeline.jsx";
import Registration from "./assets/Registration.jsx";
import Sponsors from "./assets/Sponsors.jsx";
import Contact from "./assets/Contact.jsx";
import Footer from "./assets/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Overview />
        <Timeline />
        <Registration />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
