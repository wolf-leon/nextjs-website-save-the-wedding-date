"use client";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Divider, Image,Button } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import confetti from 'canvas-confetti';



const prompt = "Define the Love Story of Bronson and Sancha.";
const words = `
On Sancha's 21st birthday, Bronson and Sancha realized their love for each other and decided they were made for each other. It was their time, and they were officially engaged. From that day onwards, they began their journey of making memories, exploring new places, sharing adventures, and building a life together filled with love, joy, and endless possibilities. Their story is one of love, commitment, and the beautiful journey of two souls destined to be together. The future awaits them with new possibilities, ready to embrace all the dreams and adventures that lie ahead.
`;

function Card({ children }: any) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {children}
    </div>
  );
}

export default function IndexPage() {
  const [text, setText] = useState("");
  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };
  

  useEffect(() => {
    // Simulate fetching the text based on the prompt
    setText(words.trim());

  }, []);

  

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6">
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-4">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive">Chronicles of Love: A Tale Unfolds</h1>
          </div>
        </div>
        <div className="w-full md:w-3/4 ">
          <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 rounded-full text-center mb-4 text-lg">
            {prompt}
          </div>
          <Card>
            <TextGenerateEffect words={text} />
          </Card>
        </div>
      </section>
      <Divider className="my-4" />


      {/* New Section with Image and Text */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">Love Unveiled: The Endless Journey of Bronson & Sancha</h1>
          </div>
        </div>
        </section>
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10 px-4">
      
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <Image
            isBlurred
            width={1200}
            src="/hero.jpg"
            alt="Bronson and Sancha"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-md md:text-2xl leading-relaxed text-gray-700 ">
          Captured in that moment, their smiles radiate a promise of a future filled with endless joy and shared adventures.In a single frame, their love blooms, a testament to the beauty of two souls intertwined.
          </p>
          <Button
          disableRipple
          className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-pink-500/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-pink-200/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0 my-8"
          size="lg"
          onClick={fireConfetti}
        >
        Celebrate with Confetti!
        </Button>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Section 2 */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">Families: Uniting Together</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={800}
          src="/family.jpg"
          alt="Family picture"
          className="items-center justify-center"
        />
      </section>
      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
            In this beautiful moment captured forever, we see not just two people who have found their soulmate, but two families coming together in celebration. The smiles and joy radiate through the picture, illustrating the strong bonds and deep connections that have formed. Bronson and Sancha&apos;s engagement marks the beginning of a new chapter where two worlds merge into one.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            This photograph is a symbol of unity, marking the start of their journey together. Their engagement is a commitment that extends to their families and friends, creating a future filled with endless possibilities. Surrounded by love and support, Bronson and Sancha are ready to embrace all the dreams and adventures that lie ahead.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
