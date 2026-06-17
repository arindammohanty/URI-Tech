import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import JobsPageSections from "@/components/sections/JobsPageSections";
import PageHero from "@/components/sections/PageHero";

export default function JobsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Find Your Next Opportunity"
          description="Browse hundreds of live IT and tech roles across India's top companies."
          breadcrumb="Jobs"
        />
        <JobsPageSections />
      </main>
      <Footer />
    </>
  );
}
