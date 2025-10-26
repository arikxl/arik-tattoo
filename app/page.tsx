import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import StickyHeader from "@/components/StickyHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">

        {/* <Link href={'/'}>
          LINK TO home
        </Link> */}
        <div className="block md:hidden fixed top-0 left-0 z-50 text-slate-700 bg-white shadow-md animate-fade-down w-full">

          <Header />
        </div>
        <Hero />
        <div className=" hidden md:block">

          <StickyHeader />
        </div>

        <Section color='pink' />
        <Section color='lime' />
        <Section color='brown' />

        {/* <Home /> */}

      </main>
    </div>
  );
}
