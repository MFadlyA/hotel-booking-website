import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Maximize,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRoomBySlug, formatPrice } from "@/data/rooms";

type RoomDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RoomDetailsPage({
  params,
}: RoomDetailsPageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const bookingParams = new URLSearchParams({
    room: room.slug,
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1]">
        {/* BREADCRUMB */}
        <section className="border-b border-[#ded5c8]">
          <div className="container-custom py-5">
            <Link
              href="/#rooms"
              className="inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#4a382d]"
            >
              <ArrowLeft size={16} />
              Back to Rooms & Suites
            </Link>
          </div>
        </section>

        {/* ROOM HEADING */}
        <section className="container-custom pb-8 pt-12 md:pt-16">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
            ACCOMMODATION
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl text-[#4a382d] sm:text-5xl md:text-6xl">
                {room.name}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#777064]">
                {room.description}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#777064]">Starting from</p>

              <p className="mt-1 text-2xl font-semibold text-[#4a382d]">
                {formatPrice(room.price)}
              </p>

              <p className="mt-1 text-xs text-[#777064]">per night</p>
            </div>
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="container-custom">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="overflow-hidden md:row-span-2">
              <img
                src={room.images[0]}
                alt={`${room.name} main view`}
                className="h-[300px] w-full object-cover sm:h-[450px] md:h-full md:min-h-[500px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src={room.images[1]}
                alt={`${room.name} interior`}
                className="h-[180px] w-full object-cover sm:h-[220px]"
              />

              <img
                src={room.images[2]}
                alt={`${room.name} additional view`}
                className="h-[180px] w-full object-cover sm:h-[220px]"
              />
            </div>

            <div className="flex items-center justify-center bg-[#eee7dc] p-6 text-center sm:p-10">
              <div>
                <p className="font-serif text-3xl text-[#4a382d]">
                  A space to unwind.
                </p>

                <p className="mt-3 text-sm leading-6 text-[#777064]">
                  Thoughtful comfort, refined interiors, and a relaxing
                  atmosphere.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROOM INFORMATION */}
        <section className="container-custom grid gap-12 py-14 md:grid-cols-[1fr_350px] md:py-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
              ABOUT THIS ROOM
            </p>

            <h2 className="mt-4 text-3xl text-[#4a382d] sm:text-4xl">
              Your Private Retreat
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#777064]">
              {room.fullDescription}
            </p>

            {/* ROOM FEATURES */}
            <div className="mt-9 grid grid-cols-2 gap-5 border-y border-[#ded5c8] py-7 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Maximize size={21} className="text-[#a58b72]" />

                <div>
                  <p className="text-xs text-[#777064]">Room Size</p>
                  <p className="mt-1 text-sm font-medium text-[#4a382d]">
                    {room.size} m²
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users size={21} className="text-[#a58b72]" />

                <div>
                  <p className="text-xs text-[#777064]">Maximum Guests</p>
                  <p className="mt-1 text-sm font-medium text-[#4a382d]">
                    {room.guests} Guests
                  </p>
                </div>
              </div>

              <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                <div className="text-xl text-[#a58b72]">♧</div>

                <div>
                  <p className="text-xs text-[#777064]">Bed Type</p>
                  <p className="mt-1 text-sm font-medium text-[#4a382d]">
                    {room.bed}
                  </p>
                </div>
              </div>
            </div>

            {/* AMENITIES */}
            <div className="mt-10">
              <h2 className="text-3xl text-[#4a382d]">
                Room Amenities
              </h2>

              <p className="mt-3 text-sm text-[#777064]">
                Everything you need for a comfortable stay.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 text-sm text-[#62594f]"
                  >
                    <Check size={17} className="text-[#a58b72]" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOOKING CARD */}
          <aside className="h-fit border border-[#ded5c8] bg-white p-6 sm:p-8 md:sticky md:top-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#a58b72]">
              MAKE IT YOUR STAY
            </p>

            <h2 className="mt-4 text-3xl text-[#4a382d]">
              Reserve This Room
            </h2>

            <div className="mt-6 border-b border-[#ded5c8] pb-6">
              <p className="text-sm text-[#777064]">Starting from</p>

              <p className="mt-2 text-3xl font-semibold text-[#4a382d]">
                {formatPrice(room.price)}
              </p>

              <p className="mt-1 text-xs text-[#777064]">per night</p>
            </div>

            <div className="mt-6 space-y-4 text-sm text-[#62594f]">
              <div className="flex items-center justify-between gap-3">
                <span>Room size</span>
                <span>{room.size} m²</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span>Maximum guests</span>
                <span>{room.guests} guests</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span>Bed</span>
                <span>{room.bed}</span>
              </div>
            </div>

            <Link
              href={`/booking?${bookingParams.toString()}`}
              className="mt-8 flex w-full items-center justify-center gap-3 bg-[#4a382d] px-5 py-4 text-sm font-medium text-white hover:bg-[#655043]"
            >
              Continue Booking
              <ArrowRight size={17} />
            </Link>

            <p className="mt-4 text-center text-xs leading-6 text-[#777064]">
              Select your dates and guest details on the next page.
            </p>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}