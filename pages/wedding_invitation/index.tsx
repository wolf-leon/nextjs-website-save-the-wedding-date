import React from "react";
import {Calendar, Image, Divider} from "@nextui-org/react";
import type {DateValue} from "@react-types/calendar";
import {parseDate, getLocalTimeZone} from "@internationalized/date";
import DefaultLayout from "@/layouts/default";

export default function WeddingInvitationPage() {
  let dateofwedding = parseDate('2025-01-26')
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(dateofwedding);
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 my-4 md:py-4">
        <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg border border-black">
          <div className="mb-6 text-center">
            <div
              className="inline-block px-6 py-4 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}
            >
              <h1 className="text-4xl font-bold text-gray-800 font-cursive">With Joy in Our Hearts: Our Wedding Invitation</h1>
            </div>
          </div>
          <Image
            isBlurred
            width={1200}
            src="/hero.jpg"
            alt="Bronson and Sancha"
            className="rounded-lg my-6"
          />
          <div className="text-center text-gray-700">
            <p className="text-lg">Together with our families</p><br></br>
            <p className="text-lg">We,</p>
            <p className="mt-2 text-2xl font-semibold">Bronson D&apos;costa & Sancha D&apos;costa</p>
            <p className="mt-2 text-lg">request the honor of your presence</p>
            <p className="mt-2 text-lg">at our wedding celebration</p>
          </div>
          <div className="mt-6 text-center text-gray-700">
            <p className="text-lg font-semibold">Sunday, 26th January</p>
            <p className="text-lg">2025</p>
          </div>
          <div className="mt-6 text-center text-gray-700">
            <p className="text-lg font-semibold">Church</p>
            <p className="text-lg">Our Lady of Miracles</p>
            <p className="text-lg">Sanguem, Goa</p>
          </div>
          <div className="mt-6 text-center text-gray-700">
            <p className="text-lg font-semibold">Reception to follow</p>
            <p className="text-lg">The White House Venue</p>
            <p className="text-lg">Raia, Goa</p>
          </div>
        </div>
      </section>

      <Divider className="my-8" />


      {/* Section for Quick Links */}
      <section className="flex flex-col items-center justify-center gap-8 md:py-4 ">
      <div className="inline-block px-6 py-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #FFF8DC 50%, #FAEBD7 50%)' }}>
              <h1 className="text-4xl font-bold text-gray-800 font-cursive">Details</h1>
            </div>
        <div className="max-w-4xl p-8 bg-white shadow-lg rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 my-2">Date</h2>
              <Calendar
                aria-label="Date (Controlled Focused Value)"
                focusedValue={focusedDate}
                value={dateofwedding}
                onFocusChange={setFocusedDate}
              />
              <p className="mt-2 text-lg text-gray-700">Sunday, 26th January 2025</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 my-2">Church Location</h2>
              <iframe title ="church location"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15398.877967522092!2d74.1521854!3d15.2285097!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfab3eb96b89d1%3A0x1af6611caacf2a0e!2sOur%20Lady%20of%20Miracles%20Church!5e0!3m2!1sen!2sin!4v1719635990865!5m2!1sen!2sin" width="250" height="270"  loading="lazy"></iframe>
              <p className="mt-2 text-lg text-gray-700">Our Lady of Miracles</p>
              <p className="text-lg text-gray-700">Sanguem, Goa</p>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 my-2">Venue Location</h2>
              <iframe title ="venue location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15393.45957531097!2d73.9778236!3d15.3023925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1772ebf4dc5%3A0xfa78990c785cf3f3!2sThe%20White%20House!5e0!3m2!1sen!2sin!4v1719636198560!5m2!1sen!2sin" width="250" height="270" loading="lazy"></iframe>
              <p className="mt-2 text-lg text-gray-700">The White House Venue</p>
              <p className="text-lg text-gray-700">Raia, Goa</p>
            </div>
          </div>
        </div>
      </section>
      <br></br>
    </DefaultLayout>
  );
}
