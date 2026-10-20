"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { rooms, formatPrice } from "@/data/rooms";

import HeroCarousel from "@/components/HeroCarousel";

const facilities = [
  {
    number: "01",
    title: "Refined Comfort",
    description:
      "Thoughtfully designed spaces that bring comfort and elegance together.",
  },
  {
    number: "02",
    title: "Personalized Service",
    description:
      "Attentive hospitality designed around the needs of every guest.",
  },
  {
    number: "03",
    title: "Memorable Moments",
    description:
      "Discover a welcoming atmosphere for meaningful moments and restful stays.",
  },
];

export default function HomePage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const today = new Date().toLocaleDateString("en-CA");

  function searchRooms() {
    if (!checkIn || !checkOut) {
      alert("Please select your check-in and check-out dates.");
      return;
    }

    if (checkIn < today) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out must be after check-in.");
      return;
    }

    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
    });

    window.location.href = `/rooms?${params.toString()}`;
  }

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <HeroCarousel />

        {/* BOOKING SEARCH */}
        <section id="booking" className="relative z-20 -mt-1 bg-[#f8f6f1]">
          <div className="container-custom">
            <div className="grid gap-5 border-b border-[#ded5c8] py-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_1fr_auto] lg:items-end">
              <div>
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#777064]">
                  <CalendarDays size={16} />
                  CHECK-IN
                </label>

                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(event) => {
                    setCheckIn(event.target.value);

                    if (checkOut && event.target.value >= checkOut) {
                      setCheckOut("");
                    }
                  }}
                  className="w-full border-b border-[#ded5c8] bg-transparent py-3 text-sm text-[#4a382d]"
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#777064]">
                  <CalendarDays size={16} />
                  CHECK-OUT
                </label>

                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(event) => setCheckOut(event.target.value)}
                  className="w-full border-b border-[#ded5c8] bg-transparent py-3 text-sm text-[#4a382d]"
                />
              </div>

              <div>
                <label className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[#777064]">
                  <Users size={16} />
                  GUESTS
                </label>

                <div className="relative">
                  <select
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    className="w-full appearance-none border-b border-[#ded5c8] bg-transparent py-3 text-sm text-[#4a382d]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                  </select>

                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#a58b72]"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={searchRooms}
                className="cursor-pointer rounded-lg flex items-center justify-center gap-3 bg-[#4a382d] px-7 py-4 text-sm text-white hover:bg-[#655043]"
              >
                Search Rooms
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="experience" className="py-24 md:py-32">
          <div className="container-custom grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Elegant and comfortable hotel interior"
                className="h-[380px] w-full object-cover sm:h-[500px]"
              />

              <div className="absolute -bottom-6 -right-3 bg-[#e9dfd1] px-7 py-6 sm:-right-6">
                <p className="font-serif text-3xl text-[#4a382d]">Simply</p>
                <p className="font-serif text-3xl italic text-[#a58b72]">
                  exceptional.
                </p>
              </div>
            </div>

            <div className="pt-5 lg:pt-0">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
                THE ART OF HOSPITALITY
              </p>

              <h2 className="mt-6 text-4xl leading-tight text-[#4a382d] sm:text-5xl">
                Where Every Stay
                <br />
                Feels Extraordinary
              </h2>

              <p className="mt-7 text-sm leading-8 text-[#777064]">
                We believe that a remarkable stay is found in the details. From
                thoughtfully curated interiors to a welcoming atmosphere, every
                element is designed to make your time with us feel effortless
                and memorable.
              </p>

              <p className="mt-4 text-sm leading-8 text-[#777064]">
                Whether you are visiting for business or leisure, discover a
                place where comfort meets understated sophistication.
              </p>

              <a
                href="#rooms"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#a58b72] pb-2 text-sm font-semibold text-[#4a382d] hover:text-[#a58b72]"
              >
                Discover Our Rooms
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="bg-[#eee7dc] py-24 md:py-28">
          <div className="container-custom">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
                  YOUR PRIVATE RETREAT
                </p>

                <h2 className="mt-4 text-4xl text-[#4a382d] sm:text-5xl">
                  Rooms & Suites
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#777064]">
                  Thoughtfully designed spaces for rest, comfort, and
                  exceptional moments.
                </p>
              </div>

              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a382d] hover:text-[#a58b72]"
              >
                View All Rooms
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 ">
              {rooms.map((room) => (
                <article
                  key={room.name}
                  className="group overflow-hidden bg-[#f8f6f1] overflow-hidden rounded-xl border border-[#d1c9be] "
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-4 left-4 bg-[#f8f6f1] px-4 py-2 text-xs text-[#4a382d]">
                      {room.size}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-2xl text-[#4a382d]">{room.name}</h3>

                      <span className="flex items-center gap-1 pt-2 text-xs text-[#777064]">
                        <Users size={14} />
                        {room.guests}
                      </span>
                    </div>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#777064]">
                      {room.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between border-t border-[#ded5c8] pt-5">
                      <div>
                        <p className="text-xs text-[#777064]">Starting from</p>
                        <p className="mt-1 text-lg font-semibold text-[#4a382d]">
                          {formatPrice(room.price)}
                        </p>
                        <p className="mt-1 text-xs text-[#777064]">per night</p>
                      </div>

                      <Link
                        href={`/rooms/${room.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a382d] hover:text-[#a58b72]"
                      >
                        Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-xs leading-6 text-[#777064]">
              Room names, photos, and prices are illustrative placeholders.
              Replace them with the hotel&apos;s actual information before
              publishing.
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 md:py-28">
          <div className="container-custom">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
                THE Arundra Signature DIFFERENCE
              </p>

              <h2 className="mt-5 text-4xl text-[#4a382d] sm:text-5xl">
                Thoughtful in Every Detail
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#777064]">
                More than a place to stay, a carefully considered experience
                shaped around your comfort.
              </p>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {facilities.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-[#ded5c8] pt-7"
                >
                  <span className="text-sm tracking-widest text-[#a58b72]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-2xl text-[#4a382d]">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-[#777064]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIAL OFFER */}
        <section id="offers" className="px-4 pb-24 md:px-8 md:pb-28">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#4a382d]">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=85"
              alt="A relaxing hotel retreat"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#292722]/65" />

            <div className="container-custom relative z-10 py-20 text-center md:py-28">
              <Sparkles
                size={28}
                className="mx-auto text-[#e0c6a5]"
                strokeWidth={1.3}
              />

              <p className="mt-6 text-xs tracking-[0.3em] text-[#e0c6a5]">
                YOUR NEXT ESCAPE AWAITS
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                Make Your Next Stay
                <br />
                <span className="italic">Something Special</span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">
                Discover your next getaway and experience a stay designed around
                comfort, thoughtful details, and lasting memories.
              </p>

              <a
                href="#booking"
                className="rounded-lg mt-9 inline-flex items-center gap-3 bg-[#f8f6f1] px-8 py-4 text-sm font-medium text-[#4a382d] hover:bg-[#e9dfd1]"
              >
                Plan Your Stay
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* WHY BOOK WITH US */}
        <section className="border-y border-[#ded5c8] bg-[#eee7dc] py-12">
          <div className="container-custom grid gap-8 sm:grid-cols-3">
            <div className="flex items-center justify-center gap-4">
              <ShieldCheck className="text-[#a58b72]" size={28} />
              <div>
                <h3 className="text-lg text-[#4a382d]">Secure Booking</h3>
                <p className="mt-1 text-xs text-[#777064]">
                  Designed for a smooth reservation process
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Check className="text-[#a58b72]" size={28} />
              <div>
                <h3 className="text-lg text-[#4a382d]">Thoughtful Service</h3>
                <p className="mt-1 text-xs text-[#777064]">
                  Hospitality focused on your comfort
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <MapPin className="text-[#a58b72]" size={28} />
              <div>
                <h3 className="text-lg text-[#4a382d]">A Welcoming Stay</h3>
                <p className="mt-1 text-xs text-[#777064]">
                  A comfortable place to call your own
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
