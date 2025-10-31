import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MagnetLinks from "@/components/magnetLinks";
import Recommendation from "@/components/recommendation";
import Service from "@/components/service";
import Testimonial from "@/components/testimonial";

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
