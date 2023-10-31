import Image from "next/image";
import Modal from "react-modal";

export default function Home() {
  if (typeof window !== "undefined") {
    Modal.setAppElement("#__next");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
