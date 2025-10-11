import { HeroHeader } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/footer-section";

export default function UIUXDesignPage() {
  return (
    <>
      <HeroHeader />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">UI/UX Design</h1>
          <p className="text-xl text-muted-foreground">
            Content coming soon...
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
