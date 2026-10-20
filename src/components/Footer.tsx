import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#292722] text-white">
      <div className="container-custom grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h2 className="text-3xl tracking-[0.12em]">Arundra Signature</h2>

          <p className="mt-2 text-[10px] tracking-[0.35em] text-[#c4aa8c]">
            HOTEL & RESIDENCE
          </p>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            A refined destination where timeless elegance meets exceptional
            hospitality.
          </p>
        </div>

        <div>
          <h3 className="text-xl">Explore</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link href="/#rooms" className="hover:text-white">
              Rooms & Suites
            </Link>

            <Link href="/#experience" className="hover:text-white">
              Our Experience
            </Link>

            <Link href="/#offers" className="hover:text-white">
              Special Offers
            </Link>

            <Link href="/login" className="hover:text-white">
              Sign In
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl">Get in Touch</h3>

          <div className="mt-5 space-y-3 text-sm leading-6 text-white/60">
            <p>Hotel Address, Indonesia</p>
            <p>Email: hello@example.com</p>
            <p>Phone: +62 812 0000 0000</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col justify-between gap-3 py-5 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Arundra Signature Hotel. All rights
            reserved.
          </p>
          <p>Designed for exceptional stays.</p>
        </div>
      </div>
    </footer>
  );
}
