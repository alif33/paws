import AboutUs from "@/components/home/AboutUs";
import Calender from "@/components/home/Calender";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Hero />
      <Services />
      <Gallery />
      <AboutUs />
      <Calender />
    </main>
  );
}
