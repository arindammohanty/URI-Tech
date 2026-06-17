import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageHero from "@/components/sections/PageHero";
import ServicesPageSections from "@/components/sections/ServicesPageSections";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="What We Offer"
          description="End-to-end staffing and HR solutions built for modern, fast-moving businesses."
          breadcrumb="Services"
        />
        <ServicesPageSections />
      </main>
      <Footer />
    </>
  );
}
