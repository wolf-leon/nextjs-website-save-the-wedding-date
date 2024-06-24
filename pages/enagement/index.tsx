"use client";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Divider } from "@nextui-org/divider";

export default function EnagementPage() {

  const images = [
    "/enagement-1.jpg",
    "/enagement-2.jpg",
    "/enagement-3.jpg",
    "/enagement-4.jpg",
    "/enagement-5.jpg",
    "/enagement-6.jpg",
  ];

  return (
    <DefaultLayout>
      
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
      <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">Enagement Proposal: Begining Our Forever</h1>
          </div>
          
        </div>
             {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
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
        <ImagesSlider className="h-[40rem] w-full md:w-[30rem] lg:w-[30rem]"  images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
      </section>

      <Divider className="my-4" />

    </DefaultLayout>
  );
}
