import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyDigital from "@/components/WhyDigital";
import Packages from "@/components/Packages";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyDigital />
      <Packages />
      <Stats />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
