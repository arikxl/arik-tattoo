
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Section from "@/components/Section";
import StickyHeader from "@/components/StickyHeader";
import HomeMeSection from "@/components/HomeMeSection";


export default function Home() {
  return (
    <div className="">
      <main className="">

        <div className="block md:hidden fixed top-0 left-0 z-50 text-slate-700 bg-white shadow-md animate-fade-down w-full">
          <Header />
        </div>
        <Hero />
          <div className=" hidden md:block">

            <StickyHeader />
          </div>

        <Section color=''>
          <HomeMeSection />
        </Section>
        <Section color='lime' >
          <p>sasd</p>
        </Section>
        <Section color='brown' >
          <p>sdasd</p>
        </Section>

        {/* <Home /> */}

      </main>
    </div>
  );
}
