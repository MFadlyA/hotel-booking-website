"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ShieldCheck,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRoomBySlug, formatPrice } from "@/data/rooms";

function BookingContent() {
  const searchParams = useSearchParams();
  const roomSlug = searchParams.get("room") || "";

  const room = getRoomBySlug(roomSlug);

  const [checkIn, setCheckIn] = useState(
    searchParams.get("checkIn") || "",
  );

  const [checkOut, setCheckOut] = useState(
    searchParams.get("checkOut") || "",
  );

  const [guests, setGuests] = useState(
    searchParams.get("guests") || "2",
  );

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const today = new Date().toLocaleDateString("en-CA");

  const numberOfNights =
    checkIn && checkOut && checkOut > checkIn
      ? Math.round(
          (new Date(`${checkOut}T00:00:00`).getTime() -
            new Date(`${checkIn}T00:00:00`).getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

  const totalPrice = room ? room.price * numberOfNights : 0;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!room) {
      setError("Please select a valid room.");
      return;
    }

    if (!checkIn || !checkOut) {
      setError("Please select your check-in and check-out dates.");
      return;
    }

    if (checkIn < today) {
      setError("Check-in date cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }

    if (Number(guests) > room.guests) {
      setError(
        `This room accommodates a maximum of ${room.guests} guests.`,
      );
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please complete all your contact details.");
      return;
    }

    if (!agreed) {
      setError("Please agree to the booking terms.");
      return;
    }

    setError(
      "Your details are valid, but booking submission is not connected to the backend yet. No reservation has been created.",
    );
  }

  if (!room) {
    return (
      <>
        <Navbar />

        <main className="container-custom min-h-[60vh] py-24">
          <h1 className="text-4xl text-[#4a382d]">
            No Room Selected
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#777064]">
            Please select a room before continuing with your booking.
          </p>

          <Link
            href="/#rooms"
            className="mt-8 inline-flex items-center gap-3 bg-[#4a382d] px-6 py-4 text-sm text-white hover:bg-[#655043]"
          >
            <ArrowLeft size={17} />
            Browse Rooms
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f6f1]">
        <section className="border-b border-[#ded5c8] bg-[#eee7dc]">
          <div className="container-custom py-12 md:py-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
              YOUR STAY, YOUR WAY
            </p>

            <h1 className="mt-4 text-4xl text-[#4a382d] sm:text-5xl">
              Complete Your Booking
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#777064]">
              Provide your stay details and contact information to continue
              with your reservation.
            </p>
          </div>
        </section>

        <section className="container-custom grid gap-10 py-12 md:grid-cols-[1fr_380px] md:py-16">
          {/* BOOKING FORM */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center bg-[#4a382d] text-sm text-white">
                1
              </span>

              <h2 className="text-2xl text-[#4a382d]">
                Your Reservation
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* DATES */}
              <div className="border border-[#ded5c8] bg-white p-5 sm:p-7">
                <h3 className="text-xl text-[#4a382d]">
                  Stay Details
                </h3>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="checkIn"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-[#4a382d]"
                    >
                      <CalendarDays size={16} />
                      Check-in
                    </label>

                    <input
                      id="checkIn"
                      type="date"
                      min={today}
                      value={checkIn}
                      onChange={(event) => {
                        setCheckIn(event.target.value);

                        if (checkOut && event.target.value >= checkOut) {
                          setCheckOut("");
                        }
                      }}
                      className="w-full border border-[#ded5c8] bg-[#f8f6f1] px-3 py-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="checkOut"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-[#4a382d]"
                    >
                      <CalendarDays size={16} />
                      Check-out
                    </label>

                    <input
                      id="checkOut"
                      type="date"
                      min={checkIn || today}
                      value={checkOut}
                      onChange={(event) => setCheckOut(event.target.value)}
                      className="w-full border border-[#ded5c8] bg-[#f8f6f1] px-3 py-3 text-sm"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="guests"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-[#4a382d]"
                    >
                      <Users size={16} />
                      Number of Guests
                    </label>

                    <select
                      id="guests"
                      value={guests}
                      onChange={(event) => setGuests(event.target.value)}
                      className="w-full border border-[#ded5c8] bg-[#f8f6f1] px-3 py-3 text-sm"
                    >
                      {Array.from(
                        { length: room.guests },
                        (_, index) => index + 1,
                      ).map((guestCount) => (
                        <option key={guestCount} value={String(guestCount)}>
                          {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="border border-[#ded5c8] bg-white p-5 sm:p-7">
                <h3 className="text-xl text-[#4a382d]">
                  Guest Information
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#777064]">
                  Enter the contact details of the primary guest.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-[#4a382d]"
                    >
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                      className="w-full border border-[#ded5c8] px-4 py-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#4a382d]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full border border-[#ded5c8] px-4 py-3 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-[#4a382d]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+62 812 3456 7890"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="w-full border border-[#ded5c8] px-4 py-3 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  className="mt-1 accent-[#4a382d]"
                />

                <span className="text-sm leading-6 text-[#777064]">
                  I confirm that my reservation details are correct and agree
                  to the applicable booking terms.
                </span>
              </label>

              {error && (
                <p
                  role="alert"
                  className="border border-[#e7c7bd] bg-[#fbefeb] px-4 py-3 text-sm leading-6 text-[#984b3b]"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="rounded-lg w-full bg-[#4a382d] px-6 py-4 text-sm font-medium text-white hover:bg-[#655043]"
              >
                Continue to Confirmation
              </button>

              <p className="text-xs leading-6 text-[#777064]">
                This form is currently a frontend prototype. Submitting it
                will not create a reservation or process a payment.
              </p>
            </form>
          </div>

          {/* BOOKING SUMMARY */}
          <aside className="h-fit border border-[#ded5c8] bg-white md:sticky md:top-8">
            <div className="border-b border-[#ded5c8] p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#a58b72]">
                YOUR SELECTION
              </p>

              <h2 className="mt-3 text-2xl text-[#4a382d]">
                Booking Summary
              </h2>
            </div>

            <div className="p-6">
              <img
                src={room.images[0]}
                alt={room.name}
                className="h-[200px] w-full object-cover"
              />

              <h3 className="mt-5 text-2xl text-[#4a382d]">
                {room.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#777064]">
                {room.size} m² · {room.bed}
              </p>

              <div className="mt-6 space-y-4 border-t border-[#ded5c8] pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-[#777064]">Check-in</span>
                  <span className="text-right text-[#4a382d]">
                    {checkIn || "Select date"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#777064]">Check-out</span>
                  <span className="text-right text-[#4a382d]">
                    {checkOut || "Select date"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#777064]">Guests</span>
                  <span className="text-[#4a382d]">
                    {guests} {Number(guests) === 1 ? "Guest" : "Guests"}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-[#777064]">Duration</span>
                  <span className="text-[#4a382d]">
                    {numberOfNights > 0
                      ? `${numberOfNights} ${numberOfNights === 1 ? "night" : "nights"}`
                      : "—"}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-[#ded5c8] pt-5">
                <div className="flex justify-between gap-4 text-sm">
                  <span className="text-[#777064]">Price per night</span>
                  <span className="text-right text-[#4a382d]">
                    {formatPrice(room.price)}
                  </span>
                </div>

                {numberOfNights > 0 && (
                  <div className="mt-3 flex justify-between gap-4 text-sm">
                    <span className="text-[#777064]">
                      {numberOfNights} × nightly rate
                    </span>
                    <span className="text-right text-[#4a382d]">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                )}

                <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#ded5c8] pt-5">
                  <span className="text-sm font-medium text-[#4a382d]">
                    Estimated Total
                  </span>

                  <span className="text-xl font-semibold text-[#4a382d]">
                    {numberOfNights > 0
                      ? formatPrice(totalPrice)
                      : "—"}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#777064]">
                  Estimate only. Availability, final rates, taxes, and fees
                  must be confirmed by the booking system.
                </p>
              </div>

              <div className="mt-6 flex items-start gap-3 bg-[#f8f6f1] p-4">
                <ShieldCheck
                  size={21}
                  className="shrink-0 text-[#a58b72]"
                />

                <div>
                  <p className="text-sm font-medium text-[#4a382d]">
                    Booking with confidence
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#777064]">
                    Your reservation will be confirmed after the booking
                    system verifies availability.
                  </p>
                </div>
              </div>

              <Link
                href={`/rooms/${room.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#4a382d] hover:text-[#a58b72]"
              >
                <ArrowLeft size={16} />
                Change Room
              </Link>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f8f6f1] text-[#4a382d]">
          Loading booking...
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}