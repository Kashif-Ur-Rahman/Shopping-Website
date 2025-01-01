import Hero from "../screens/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/testimonials/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <Testimonial />
    </main>
  );
}
