import React from "react";

const PaymentPage = () => {
  return (
    <div className=" relative bg-white border border-black rounded-lg p-8 m-4 flex flex-col gap-3 justify-center items-center max-w-[1080px] md:px-12 md:max-w-[700px] mt-12 min-h-[550px]  md:mx-auto">
      This is Payment page
      <div className=" button flex justify-between pt-6">
        <div>
          <button
            name="Back"
            type="button"
            className=" bg-white border-2 hover:bg-slate-100 border-green-400 hover:border-green-500 py-[2px] px-5"
          >
            Back
          </button>
        </div>

        <button
          type="submit"
          className=" bg-green-400 border-2 hover:bg-green-500 border-green-400 hover:border-green-500 py-[2px] px-5"
        >
          {" "}
          Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
