import { LandingHeader } from '@/components/landing/LandingHeader';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesCarousel } from '@/components/landing/FeaturesCarousel';
import { StatisticsSection } from '@/components/landing/StatisticsSection';
import { Testimonials } from '@/components/landing/Testimonials';
import { LandingFooter } from '@/components/landing/LandingFooter';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesCarousel />
        <StatisticsSection />
        <Testimonials />
      </main>
      <LandingFooter />
    </div>
  );
}
