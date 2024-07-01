"use client";
import DefaultLayout from "@/layouts/default";
import React from "react";
import { Image } from "@nextui-org/image"; // Make sure you have this import
import { Divider } from "@nextui-org/divider";

export default function EngagementPage() {
  const images = [
    "/enagement-2.jpg",
    "/enagement-3.jpg",
    "/enagement-5.jpg",
    "/enagement-4.jpg",
    "/enagement-7.jpg",
    "/enagement-8.jpg",
    "/enagement-6.jpg",
    "/enagement-9.jpg",
    "/enagement-19.jpg",
    "/enagement-10.jpg",
    "/enagement-11.jpg",
    "/enagement-12.jpg",
    "/enagement-13.jpg",
    "/enagement-14.jpg",
    "/enagement-16.jpg",
    "/enagement-21.jpg",
    "/enagement-17.jpg",
    "/enagement-20.jpg",
    "/enagement-18.jpg",
    "/enagement-15.png",
    "/enagement-22.jpg",
    "/enagement-23.jpg",

  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">Engagement Proposal: Beginning Our Forever</h1>
          </div>
          <div className="flex justify-center my-6">
            <Image
              width={350}
              src="/enagement-1.jpg"
              alt="Family picture"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
          <div className="text-center w-full md:w-3/4 lg:text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              On the enchanting evening of <b>January 7th, 2024</b>, we celebrated a significant milestone in our lives as we took our first steps towards a lifetime of love and companionship. Surrounded by the warmth and support of our cherished family and friends, we exchanged heartfelt promises and envisioned our future together.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              The ambiance was perfect, filled with laughter, joy, and the glow of love that illuminated the night. Every moment was a testament to our journey so far and the beautiful path ahead. The engagement was not just a ceremony, but a heartfelt declaration of our commitment to each other, marking the beginning of a new chapter in our love story.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              We are deeply grateful for the presence and blessings of everyone who joined us on this special day. Your love and support mean the world to us as we embark on this incredible adventure together. Here&apos;s to love, laughter, and a future filled with endless happiness.
            </p>
          </div>
        </section>

        {/* More Glimpses Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
          <div className="text-center w-full md:w-3/4 lg:text-center mb-4">
            <div
              className="inline-block px-6 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
            >
              <h1 className="text-3xl font-bold text-gray-800 font-cursive">More Glimpses from our beautiful Night</h1>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={300}
                height={300}
                alt={`Engagement Image ${index + 1}`}
                src={image}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-4" />
    </DefaultLayout>
  );
}
