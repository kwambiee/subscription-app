"use client";

import React, { useState } from "react";
import Logo from "../public/Davis.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  basicFeatures,
  basicPrice,
  premiumFeatures,
  premiumPrice,
} from "@/utils/utils";

export const PaymentLeft = ({
  plan,
}: {
  plan: "basic" | "premium" | "custom";
}) => {
  const [features, setFeatures] = useState<null | string[]>(
    plan === "basic"
      ? basicFeatures
      : plan === "premium"
      ? premiumFeatures
      : null
  );
  return (
    <div className="py-[5%] md:w-1/2 relative flex flex-col justify-between">
      <div>
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Davis and ShirtLiff logo"
            className="w-10 h-10 mr-5"
          />
          <p className="font-semibold">Davis & ShirtLiff</p>
        </div>
        <div className="mt-5">
          <p className="text-gray-600 font-semibold capitalize">{plan}</p>
          <p className="text-4xl font-semibold">
            $
            {plan === "basic"
              ? basicPrice
              : plan === "premium"
              ? premiumPrice
              : ""}
            .00
          </p>
        </div>
      </div>
      <div className="mt-10">
        <p>Subscribe to the Davis and ShirtLiff Premium Subscription!</p>
        <p>The premium subscription comes with the following features</p>
      </div>
      <div className="w-3/4 ml-auto mt-5">
        <p>Features</p>
        {features?.map((feature, i) => (
          <div className="flex items-center mt-3" key={i}>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="w-5 h-5 mr-10 text-green-400"
            />
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-500 mt-auto hidden md:block">
        Powered by <span className="font-semibold">D&S payments</span> | Terms
        Privacy
      </p>
    </div>
  );
};
