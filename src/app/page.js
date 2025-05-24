import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Service from "@/components/pages/Service";
import Team from "@/components/pages/Team";
import Client from "@/components/pages/Client";
import Quotes from "@/components/pages/Quotes";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Service/>
      <Team/>
      <Client/>
      <Quotes/>
    </>
  );
}
