import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HistoriaGuaz from "@/components/HistoriaGuaz";
import ProductCatalog from "@/components/ProductCatalog";
import DistributionProcess from "@/components/DistributionProcess";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <HistoriaGuaz />
      <ValueProposition />
      <ProductCatalog />
      <DistributionProcess />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
