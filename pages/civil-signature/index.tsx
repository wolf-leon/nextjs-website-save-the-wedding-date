"use client";
import DefaultLayout from "@/layouts/default";
import React from "react";
import { Image } from "@nextui-org/image"; // Make sure you have this import
import { Divider } from "@nextui-org/divider";

export default function EngagementPage() {
  const images = [
    "/sign-2.jpg",
    "/sign-3.jpg",
    "/sign-5.jpg",
    "/sign-4.jpg",
    "/sign-7.jpg",
    "/sign-8.jpg",
    "/sign-6.jpg",
    "/sign-9.jpg",
    "/sign-10.jpg",
    "/sign-11.jpg",
    "/sign-12.jpg",
    "/sign-13.jpg",
    "/sign-14.jpg",
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">A New Chapter Begins: Our Civil Marriage</h1>
          </div>
          <div className="flex justify-center my-6">
            <Image
              width={350}
              src="/sign-1.jpg"
              alt="Family picture"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
          <div className="text-center w-full md:w-3/4 lg:text-center">
            <p className="text-lg leading-relaxed text-gray-700">
            On the memorable evening of <b>December 16th, 2024</b>, at the Sanguem Civil Registrar, we took a significant step in our journey together by officially uniting through our civil marriage. In the presence of our closest family and friends, we signed the documents that symbolized our commitment to a lifetime of love and partnership.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
            The day was intimate and meaningful, filled with warm smiles, heartfelt moments, and the quiet joy of knowing we were beginning a new chapter together. It wasn&apos;t about grandeur or ceremony; it was about the authenticity of our bond and the promises we made to one another.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
            We are truly thankful to everyone who shared in this special moment with us. Your love and support mean everything as we start this beautiful adventure together. Here&apos;s to a future filled with love, joy, and endless possibilities!
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
              <h1 className="text-3xl font-bold text-gray-800 font-cursive">More Glimpses from our Seal The Deal Day</h1>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <div >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={500}
                alt={`Civil Image ${index + 1}`}
                src={image}
                className="items-center justify-center my-8"
              />
            </div>
            
          ))}
        </div>
       
      </section>

      <Divider className="my-4" />
    </DefaultLayout>
  );
}
