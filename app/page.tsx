import Hero from "@/components/Hero";
import { CareerTeaser, Costs, Faq, ForWhom, Services, Steps, Why } from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Desktop order. On phones CSS reorders these to: Leistungen, Für wen, Kosten, Ablauf, Fragen. */}
      <ForWhom />
      <Services />
      <Steps />
      <Why />
      <Costs />
      <Faq short />
      <CareerTeaser />
      <EnquiryForm />
    </>
  );
}
