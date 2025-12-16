import React from "react";
import LinkTable from "./common/LinkTable";

const Banner = () => {
  return (
    <>
      <section className="mt-[130px]">
        <div className="container">
          <div className="row flex justify-center">
            <div className="shortDiv w-[996px] flex flex-col items-center">
              <h1 className="text-4xl text-center md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Shorten Your Loooong Links :)
              </h1>

              <p className="w-[500px] text-gray-400 mt-4 text-[18px] text-center">
                Linkly is an efficient and easy-to-use URL shortening service
                that streamlines your online experience.
              </p>

              {/* Input Box */}
              <div className="mt-8 w-full flex items-center bg-[#111827] border border-white/10 rounded-full px-3 py-2">
                <input
                  type="text"
                  placeholder="Enter the link here"
                  className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500 px-3 text-sm"
                />

                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Short Link</span>
               </button>
              </div>

              <p className="text-gray-400 mt-4 text-[18px] text-center">
                You can create{" "}
                <span className="text-pink-500 font-medium">unlimited links,view your links and count clicks .</span> Register Now to enjoy Unlimited usage
              </p>

            </div>
          </div>
        </div>
      </section>
      <LinkTable />
    </>
  );
};

export default Banner;
