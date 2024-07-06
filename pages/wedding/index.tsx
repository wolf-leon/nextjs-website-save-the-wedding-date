import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import { Image } from "@nextui-org/image";

export default function VenuePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">Enchanted Celebrations: Wedding Venue</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={800}
          src="/white_house_venue.jpg"
          alt="venue picture"
          className="items-center justify-center my-4"
        />
      </section>
       {/* Text Section */}
       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
          Join us for a celebration of love at The White House Venue in Raia, Goa! We are thrilled to invite you to our wedding, where elegance meets charm in this picturesque setting. Surrounded by lush greenery and breathtaking views, The White House Venue provides the perfect backdrop for our special day. 
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
          Your presence will make our celebration complete as we exchange vows and create unforgettable memories together. We look forward to sharing this joyous occasion with you in the heart of Goa.
          </p>
        </div>
      </section>


      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
        <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
          >
            <h1 className="text-3xl font-bold text-gray-800 font-cursive ">Wedding Venue Location</h1>
          </div>
        </div>
        <iframe title ="venue location small"  className="md:hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2985.8887688091513!2d73.97740850792748!3d15.302259041439235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1772ebf4dc5%3A0xfa78990c785cf3f3!2sThe%20White%20House!5e0!3m2!1sen!2sin!4v1719632780046!5m2!1sen!2sin" width="340" height="340" loading="lazy" ></iframe>
        <iframe title ="venue location medium large"  className="hidden md:block" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2985.8887688091513!2d73.97740850792748!3d15.302259041439235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1772ebf4dc5%3A0xfa78990c785cf3f3!2sThe%20White%20House!5e0!3m2!1sen!2sin!4v1719632780046!5m2!1sen!2sin" width="800" height="600" loading="lazy" ></iframe>
      </section>
    </DefaultLayout>
  );
}
