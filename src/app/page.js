import CallToAction from "@/components/CTA/CallToAction";
import FeaturedDestinations from "@/components/FeaturedDestinations/FeaturedDestinations";
import HeroSection from "@/components/Hero/HeroSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
