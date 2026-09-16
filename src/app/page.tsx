import LandingHero from "@/features/landing/hero/hero";
import LandingHeader from "@/features/landing/layouts/header";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="flex flex-col w-full h-screen overflow-hidden bg-linear-to-b from-slate-950 to-gray-950
      max-lg:pt-36 max-lg:h-auto">
        <LandingHero />
      </main>
    </>
  );
}
