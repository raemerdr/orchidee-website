import Hero from "@/components/Hero";
import { CareerTeaser, Costs, Faq, ForWhom, Services, Steps, Why } from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ForWhom />
      <Services />
      <Steps />
      <Why />
      <Costs />
      <Faq />
      <CareerTeaser />
      <EnquiryForm />
    </>
  );
}
