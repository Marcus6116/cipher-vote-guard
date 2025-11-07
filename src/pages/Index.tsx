import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProposalList from "@/components/ProposalList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-16">
          <ProposalList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
