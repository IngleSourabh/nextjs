import CpBanner from "@/components/cp-banner/CpBanner";
import CpCard from "@/components/cp-cards/CpCards";
import CpFooter from "@/components/cp-footer/CpFooter";
import CpNavbar from "@/components/cp-navbar/CpNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <CpNavbar />
      <CpBanner />

      <CpCard />

      <CpFooter />
    </main>
  );
}
