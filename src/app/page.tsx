import About from "@/components/about";
import Hero from "@/components/hero";
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
    </main>
  );
}
