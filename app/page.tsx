import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="jobs" className="scroll-mt-20" aria-hidden="true" />
        <Services />
        <AboutUs />
        <Industries />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
