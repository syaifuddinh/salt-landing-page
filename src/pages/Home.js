import Navbar from "../components/dashboard/Navbar";
import Header from "../components/dashboard/Header";
import AboutUs from "../components/dashboard/AboutUs";
import CoreValues from "../components/dashboard/CoreValues";
import Speciality from "../components/dashboard/Speciality";
import Footer from "../components/dashboard/Footer";

function Home() {
  return (
    <div className="">
        <Navbar />
        <Header />
        <AboutUs />
        <CoreValues />
        <Speciality />
        <Footer />
    </div>
  );
}

export default Home;
