import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ContactPageSections from "@/components/sections/ContactPageSections";
import PageHero from "@/components/sections/PageHero";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Get In Touch"
          description="Whether you're hiring or job hunting, we'd love to hear from you."
          breadcrumb="Contact"
        />
        <ContactPageSections />
      </main>
      <Footer />
    </>
  );
}
