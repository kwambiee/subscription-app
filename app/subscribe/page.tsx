import { PaymentLeft } from "@/components/PaymentLeft";
import { PaymentRight } from "@/components/PaymentRight";
import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: "basic" | "premium" | "custom" };
}) => {
  const plan = searchParams.plan;
  return (
    <main
      className={`${poppins.className} flex px-[5%] flex-col md:flex-row md:h-screen`}
    >
      <PaymentLeft plan={plan} />
      <PaymentRight plan={plan} />
    </main>
  );
};

export default Page;
