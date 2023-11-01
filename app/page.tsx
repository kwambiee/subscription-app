import Body from "@/components/Body/Body";
import Navbar from "@/components/Navbar/Navbar";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { user_id: string };
}) {
  const userId = searchParams.user_id;
  return (
    <main className="flex min-h-screen flex-col items-center px-[5%] py-[5%]">
      <Navbar userId={userId} />
      <Body />
    </main>
  );
}
