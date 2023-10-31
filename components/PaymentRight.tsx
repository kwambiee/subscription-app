"use client";

import { fetchCountries } from "@/fetchers/fetchFunctions";
import { Country } from "@/types/globaltypes";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mpesa from "../public/mpesa.png";

export const PaymentRight = ({
  plan,
}: {
  plan: "basic" | "premium" | "custom";
}) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa">("card");

  useEffect(() => {
    fetchCountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form
      className="py-[5%] px-[5%] md:w-1/2 shadow"
      onSubmit={(e) => {
        e.preventDefault();
        //call backend
      }}
    >
      <p className="font-semibold">Please input your information</p>
      <div className="w-full">
        <p className="text-gray-500 text-sm mt-5">Email</p>
        <input
          type="email"
          className="w-full py-2 px-3 rounded-md border shadow mt-1"
        />
      </div>
      <div className="w-full">
        <p className="text-gray-500 text-sm mt-5">Country</p>
        <select className="w-full py-2 px-3 rounded-md border shadow mt-1">
          {countries?.map((country) => (
            <option value={country.name.official}>{country.name.common}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="font-semibold my-5">Payment method</p>
        <div className="flex gap-x-4">
          <div
            className="p-5 rounded border border-black w-1/3 cursor-pointer hover:bg-gray-100 transition-all"
            onClick={() => setPaymentMethod("card")}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <p className="font-semibold">Card</p>
          </div>
          <div
            className="p-5 rounded border border-black w-1/3 cursor-pointer hover:bg-gray-100 transition-all"
            onClick={() => setPaymentMethod("mpesa")}
          >
            <Image src={mpesa} className="h-5 w-5" alt={"M-pesa"} />
            <p className="font-semibold">M-pesa</p>
          </div>
        </div>
        {paymentMethod === "card" ? (
          <div>
            <p className="text-gray-500 text-sm mb-1 mt-3">Card Information</p>
            <input
              type="number"
              className="w-full p-2 border-gray-300 rounded-t border placeholder:text-sm"
              placeholder="1234 1234 1234 1234"
              required
            />
            <div className="flex">
              <input
                type="text"
                className="border-gray-300 border-b border-l p-2 w-1/2 rounded-bl placeholder:text-sm"
                placeholder="MM / YY"
                required
              />
              <input
                type="number"
                className="border-gray-300 border-b border-l border-r p-2 w-1/2 rounded-br placeholder:text-sm"
                placeholder="CVC"
                required
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-500 text-sm mb-1 mt-3">
              Input your phone number
            </p>
            <input
              type="number"
              className="w-full p-2 border-gray-300 rounded-t border placeholder:text-sm"
              placeholder="254719428019"
              required
            />
          </div>
        )}
        <div className="flex gap-x-2 items-center mt-5">
          <input type="checkbox" defaultChecked className="h-5 w-5" />
          <p className="text-sm">You agree to the terms of service</p>
        </div>
        <button
          type="submit"
          className="mt-5 text-center text-white bg-blue-400 text-sm w-full rounded py-3 hover:bg-opacity-70 transition-all"
        >
          Subscribe
        </button>
      </div>

      <p className="text-gray-500 mt-10 md:hidden">
        Powered by <span className="font-semibold">D&S payments</span> | Terms
        Privacy
      </p>
    </form>
  );
};
