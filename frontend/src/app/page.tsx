import { MOCK_ARTICLES } from "@/lib/mock-data";
import {
  HeroSection,
  TopicsSection,
  LatestInsightsSection,
  FeaturesSection,
  WhySection,
  LatestArticlesSection,
  SponsorSection,
  CtaSection,
} from "@/components/home";

export default function HomePage() {
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Kategori Populer */}
      <TopicsSection />

      {/* 3. Latest Insights */}
      <LatestInsightsSection />

      {/* 4. Topik Pembelajaran */}
      <FeaturesSection />

      {/* 5. Mengapa Hidropedia */}
      <WhySection />

      {/* 6. Featured Article */}
      <LatestArticlesSection articles={featuredArticles} />

      {/* 7. Sponsor — sebelum CTA */}
      <SponsorSection />

      {/* 8. CTA */}
      <CtaSection />
    </>
  );
}
