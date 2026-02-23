import ServicesHero from "../../components/services/ServicesHero";
 import ServicesList from "../../components/services/ServicesList";
 import ServicesBridge from "../../components/services/ServicesBridge";
 import MagazineServiceSection from "../../components/services/MagazineServiceSection";
export default function ServicesPage() {
  return (
    <>
      
       <div className="bg-[#d8d8d8] text-black">
       <ServicesHero />
        <MagazineServiceSection />
       <ServicesList />
      < ServicesBridge/>
     
       </div>
    </>
  );
}
