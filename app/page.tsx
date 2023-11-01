import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-[5%] py-[5%]">
      <Navbar />
      <Body />
    </main>
  );
}
