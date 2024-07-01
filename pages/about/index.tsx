"use client";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function AboutPage() {

  const images = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
    "/gallery-9.jpg",
    "/gallery-12.jpg",
    "/gallery-14.jpg",
    "/gallery-15.jpg",
    "/gallery-16.jpg",
    "/gallery-18.jpg",
    "/gallery-19.jpg",
    "/gallery-20.jpg",
    "/gallery-22.jpg",
    "/gallery-23.jpg",
    "/gallery-24.jpg",
    "/gallery-25.jpg",
    "/gallery-26.jpg",
    "/gallery-11.jpg",
    "/gallery-13.jpg",
    "/gallery-21.jpg",
    "/gallery-28.jpg",
    "/gallery-29.jpg",
    "/gallery-30.jpg",
    "/gallery-31.jpg",
    "/gallery-32.jpg",
    "/gallery-33.jpg",
    "/gallery-34.jpg",
    "/gallery-35.jpg",
    "/gallery-36.jpg",
    "/gallery-37.jpg",
    "/gallery-17.jpg",
    "/gallery-27.jpg",
    "/gallery-10.jpg",

  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">The Man of the Hour: Bronson D&apos;costa</h1>
          </div>
        </div>
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center mt-8">
          <Image
            isBlurred
            width={250}
            height={250}
            src="/groom.jpg"
            alt="Bronson"
            className="rounded-lg my-6"
          />
          <h2 className="text-3xl font-semibold my-2">Bronson D&apos;costa</h2>
          <p className="text-base text-gray-600 my-4">
            Kind-hearted individual with a strong sense of responsibility. He is always willing to lend a helping hand and values honesty and integrity above all. Bronson&apos;s positive outlook on life and his ability to inspire others make him a cherished friend and partner.<br/><br/>His adventurous spirit leads him to explore new places and experiences, and he finds joy in the simple things in life.
          </p>
          <h3 className="text-2xl font-medium my-2">Hobbies</h3>
          <ul className="list-disc list-inside mb-4 text-center">
            <li>Watching Movies</li>
            <li>Traveling</li>
            <li>Football</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="italic">
              &quot;Sancha My Love, Every day with you is a new adventure. I can&apos;t wait to see what the future holds for us together.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">The Woman of his Dreams: Sancha D&apos;costa</h1>
          </div>
        </div>
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center mt-8">
          <Image
            isBlurred
            width={250}
            height={250}
            src="/bride.jpg"
            alt="Sancha"
            className="rounded-lg my-6"
          />
          <h2 className="text-3xl font-semibold my-2">Sancha D&apos;costa</h2>
          <p className="text-base text-gray-600 my-4">
            Sancha is a compassionate and intelligent woman who brings joy and warmth to everyone she meets. Her empathetic nature and ability to understand others make her an amazing friend and partner. Sancha&apos;s enthusiasm for life and her unwavering support inspire those around her.<br/><br/>Her love for art and creativity is evident in everything she does, from her hobbies to her endeavors.
          </p>
          <h3 className="text-2xl font-medium my-2">Hobbies</h3>
          <ul className="list-disc list-inside mb-4 text-center">
            <li>Dancing</li>
            <li>Art</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="italic">
            &quot;Bronson, my love, you are my rock and my inspiration. Together, we can conquer anything and create a beautiful future.&quot;
            </p>
          </div>
        </div>
      </section>



      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
      <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">Memories We Wrote</h1>
          </div>
          
        </div>
            
         {/* Image Grid Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 w-full">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={300}
                height={300}
                alt={`Memories Image ${index + 1}`}
                src={image}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

      </section>
    </DefaultLayout>
  );
}
