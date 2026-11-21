import Hero from "@/components/Hero";
import { CareerTeaser, Costs, Faq, ForWhom, Services, Steps, Why } from "@/components/Sections";
import EnquiryForm from "@/components/EnquiryForm";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Order follows the visitor's questions: what, for whom, cost, how it starts. */}
      <Services />
      <ForWhom />
      <Costs />
      <Steps />
      <Why />
      <Faq short />
      <CareerTeaser />
      <EnquiryForm />
    </>
  );
}
