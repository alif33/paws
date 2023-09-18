import AboutUs from "@/components/home/AboutUs";
import Contact from "@/components/home/Contact";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-[1440px] mx-auto overflow-x-hidden">
      <Hero />
      <Services />
      <Testimonial />
      <Gallery />
      <AboutUs />
      <Contact />
    </main>
  );
}
