import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { WhatsApp } from "@/components/WhatsApp";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Hobbies />
        <WhatsApp />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
