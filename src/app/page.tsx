import About from "@/components/landing/about";
import Footer from "@/components/layer/footer";
import Hero from "@/components/landing/hero";
import MagnetLinks from "@/components/landing/magnetLinks";
import Recommendation from "@/components/landing/recommendation";
import Service from "@/components/landing/service";
import Testimonial from "@/components/landing/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Recommendation />
      <Service />
      <Testimonial />
      <MagnetLinks />
      <Footer />
    </main>
  );
}
