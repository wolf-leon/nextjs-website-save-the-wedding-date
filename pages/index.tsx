"use client";
import { useState, useEffect } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {Divider} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

const prompt = "Define the Love Story of Bronson and Sancha.";
const words = `
Bronson and Sancha were two adventurers in a world where magic and mystery intertwined with reality. Bronson, a skilled swordsman with a troubled past, met Sancha, an enigmatic sorceress, during a perilous quest. Together, they traversed treacherous landscapes, fought fierce battles, and uncovered ancient secrets that changed their lives forever. Their story is one of bravery, friendship, and the relentless pursuit of truth in the face of insurmountable odds.
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
        <div className="w-full md:w-3/4 lg:w-1/2">
          <div className="bg-blue-100 text-blue-800 font-semibold py-4 px-6 rounded-full text-center mb-4 text-lg">
            {prompt}
          </div>
          <Card>
            <TextGenerateEffect words={text} />
          </Card>
        </div>
      </section>
      <Divider className="my-4" />
    </DefaultLayout>
  );
}
