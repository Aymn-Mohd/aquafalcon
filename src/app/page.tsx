import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact, Goal, Market, Problem, Systems, Traction } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed top-3 left-3 z-[60] bg-paper px-4 py-3 font-mono text-sm text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Problem />
        <Goal />
        <Systems />
        <Traction />
        <Market />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
