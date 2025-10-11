import { HeroHeader } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/footer-section";

export default function TermsPage() {
  return (
    <>
    <HeroHeader />
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-foreground text-4xl md:text-5xl font-semibold">Terms of Service</h1>
        <p className="text-muted-foreground mt-3">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="space-y-10">
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Agreement</h2>
          <p className="text-muted-foreground mt-3">
            By accessing or using Safenexo services, you agree to these terms. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Projects & Deliverables</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-3 space-y-2">
            <li>Scope, timelines, and pricing are defined in project proposals</li>
            <li>Ownership of deliverables transfers upon full payment, excluding third‑party licenses</li>
            <li>Feedback cycles and revisions are specified per project</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Payments</h2>
          <p className="text-muted-foreground mt-3">
            Invoices are due upon receipt unless otherwise specified. Late payments may pause work.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Confidentiality</h2>
          <p className="text-muted-foreground mt-3">
            Both parties agree to keep confidential information secure and use it solely for the project.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-muted-foreground mt-3">
            Questions? Email <a className="text-primary hover:underline" href="mailto:contact.safenexo@gmail.com">contact.safenexo@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
