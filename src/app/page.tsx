import { Hero } from "@/components/sections/Hero";
import { When } from "@/components/sections/When";
import { Where } from "@/components/sections/Where";
import { ThemeFood } from "@/components/sections/ThemeFood";
import { Gallery } from "@/components/sections/Gallery";
import { Message } from "@/components/sections/Message";
import { GiftRegistry } from "@/components/sections/GiftRegistry";
import { RSVP } from "@/components/sections/RSVP";
import { StickyNav } from "@/components/StickyNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <When />
      <Where />
      <ThemeFood />
      <Gallery />
      <Message />
      <GiftRegistry />
      <RSVP />
      <StickyNav />
    </main>
  );
}
