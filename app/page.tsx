
import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";
import Modal from "react-modal";
import Image from "next/image";

export default function Home() {
  if (typeof window !== "undefined") {
    Modal.setAppElement("#__next");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Body />
    </main>
  );
}
