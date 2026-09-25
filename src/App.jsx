import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CouncilSection from "./components/CouncilSection";
import ProjectEarthSection from "./components/ProjectEarthSection";
import SevenTestsSection from "./components/SevenTestsSection";
import AuthorSection from "./components/AuthorSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-space-navy text-star-white">
      <Navbar />
      <main>
        <HeroSection />
        <CouncilSection />
        <ProjectEarthSection />
        <SevenTestsSection />
        <AuthorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
