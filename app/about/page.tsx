import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutPageSections from "@/components/sections/AboutPageSections";
import PageHero from "@/components/sections/PageHero";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About URI Tech"
          description="We connect talent with opportunity and have been doing it for over 15 years."
          breadcrumb="About Us"
        />
        <AboutPageSections />
      </main>
      <Footer />
    </>
  );
}
