import Hero from "@/components/Home/Hero/Hero";
import Galleries from "@/components/Home/Galleries/Galleries";
import OurBrand from "@/components/Home/OurBrand/OurBrand";
import AnimatedCounter from "@/components/Home/counter/AnimatedCounter";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import FloatingHelpButton from "@/components/shared/FloatingHelpButton/FloatingHelpButton";

export default function HomePageFragment() {
  return (
    <>
      <Hero />
      <Galleries />
      <OurBrand />
      <AnimatedCounter />
      <Testimonials />
      <FloatingHelpButton/>
    </>
  );
}
