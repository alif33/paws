import AboutUs from "@/components/home/AboutUs";
import Calender from "@/components/home/Calender";
import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Clients />
      <AboutUs />
      <Calender />
    </main>
  );
}
