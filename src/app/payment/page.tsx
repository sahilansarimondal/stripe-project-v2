"use client";
import axios from "axios";
import React from "react";
import PricingCard from "../components/PricingCard";

const PaymentPage = () => {
  const [prices, setPrices] = React.useState([]);

  React.useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get("/api/products");
    setPrices(data);
    console.log(data);
  };

  return (
    <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1280px] md:px-12 md:max-w-[1080px] mt-12 min-h-[550px]  md:mx-auto">
      <div className=" button flex justify-between pt-6">
        <section className=" py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-orange-500 sm:text-5xl">
                Pricing Plans
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Simple, transparent pricing for your
                business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {prices &&
                prices.map((price) => (
                  <PricingCard price={price} />
                ))}
            </div>
          </div>
        </section>

        {/* <div>
          <button
            name="Back"
            type="button"
            className=" bg-white border-2 hover:bg-slate-100 border-green-400 hover:border-green-500 py-[2px] px-5"
          >
            Back
          </button>
        </div> */}

        {/* <button
          type="submit"
          className=" bg-green-400 border-2 hover:bg-green-500 border-green-400 hover:border-green-500 py-[2px] px-5"
        >
          {" "}
          Pay
        </button> */}
      </div>
    </div>
  );
};

export default PaymentPage;
