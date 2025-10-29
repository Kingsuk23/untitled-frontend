import About from "@/components/about";
import Hero from "@/components/hero";
import Recommendation from "@/components/recommendation";
import Service from "@/components/service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Recommendation />
      <Service />
    </main>
  );
}
