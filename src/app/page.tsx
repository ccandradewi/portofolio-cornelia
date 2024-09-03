import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProjectsSection from "./components/MyProject";
import Footer from "./components/Footer";
import CertificatesSection from "./components/Certificate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <Footer />
    </main>
  );
}
