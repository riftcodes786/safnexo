import { HeroHeader } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/footer-section";

export default function PrivacyPage() {
  return (
    <>
    <HeroHeader />
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-16 md:pt-36 md:pb-24">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-foreground text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
        <p className="text-muted-foreground mt-3">Last updated: {new Date().toLocaleDateString()}</p>
      </header>

      <div className="space-y-10">
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="text-muted-foreground mt-3">
            Safenexo respects your privacy. This policy explains what information we collect, how we use it, and your rights.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-3 space-y-2">
            <li>Contact details (name, email, company) when you reach out</li>
            <li>Analytics data to improve our website and services</li>
            <li>Project information you voluntarily provide</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">How We Use Information</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-3 space-y-2">
            <li>To respond to inquiries and provide proposals</li>
            <li>To deliver and improve our services</li>
            <li>To communicate important updates</li>
          </ul>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Data Sharing</h2>
          <p className="text-muted-foreground mt-3">
            We do not sell your data. We may share it with trusted providers solely to operate our services, under strict confidentiality.
          </p>
        </section>

        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Your Rights</h2>
          <p className="text-muted-foreground mt-3">
            You can request access, correction, or deletion of your personal information by emailing
            <a className="text-primary ml-1 hover:underline" href="mailto:contact.safenexo@gmail.com">contact.safenexo@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
