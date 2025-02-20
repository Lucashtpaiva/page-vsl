import HeroSection from '@/components/sections/1.heroSection/heroSection';
import Player from '@/components/sections/2.playerVideo/player';
import Products from '@/components/sections/3.products/products';
import Testimonials from '@/components/sections/4.testimonials/testimonials';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Player />
      <Products />
      <Testimonials />
    </main>
  );
}
