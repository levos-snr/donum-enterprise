import React from "react";
import { trending_data } from "@/data/trending";

import Image from "next/image";

function BodySection() {
  return (
    <main className="bg-[#0e1323]">
      <section className="max-w-7xl mx-auto p-6 items-center text-center justify-center">
        <h2 className="font-bold text-3xl lg:text-5xl text-white">
          LEAVE THE WORK TO US.
        </h2>
        <h3 className="text-white py-5 text-lg lg:text-xl">
          Search low prices on cleaning of homes, offices and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        Search Section here
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending </h3>
          <p className="font-light">Most popular choices</p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer ">
              <Image
                key={item.id}
                className=" object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
                width={320}
                height={288}
              />
              <div className="flex flex-col justify-between p-4 text-wrap w-80">
                <p className="font-bold">{item.title}</p>
                <p className="">{item.location}</p>
                <p className="font-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BodySection;
