import Image from "next/image";
import Countdown from "./components/Countdown";

// ─── Photo paths ─────────────────────────────────────────────────────────────
// Put your photos in /public/photos/ with these filenames:
//   hero.jpg       – couple photo for the hero section (dark/moody, landscape)
//   contact.jpg    – couple photo for the Contact Us section
//   hotel.jpg      – Hotel Monumento San Francisco exterior
//   santiago.jpg   – Santiago de Compostela cityscape
//   galicia.jpg    – Galicia landscape for the Discover Galicia section
//   flowers.jpg    – Floral photo for the Wedding Album section
//   p1.jpg–p15.jpg – Polaroid-style couple photos for the collage
// ─────────────────────────────────────────────────────────────────────────────

const POLAROID_PHOTOS = [
  { src: "/photos/p1.jpg", rotate: -6, top: "5%", left: "2%" },
  { src: "/photos/p2.jpg", rotate: 4, top: "0%", left: "16%" },
  { src: "/photos/p3.jpg", rotate: -3, top: "8%", left: "30%" },
  { src: "/photos/p4.jpg", rotate: 7, top: "2%", left: "44%" },
  { src: "/photos/p5.jpg", rotate: -5, top: "6%", left: "58%" },
  { src: "/photos/p6.jpg", rotate: 3, top: "1%", left: "72%" },
  { src: "/photos/p7.jpg", rotate: -8, top: "7%", left: "85%" },
  { src: "/photos/p8.jpg", rotate: 5, top: "48%", left: "0%" },
  { src: "/photos/p9.jpg", rotate: -4, top: "45%", left: "14%" },
  { src: "/photos/p10.jpg", rotate: 6, top: "50%", left: "28%" },
  { src: "/photos/p11.jpg", rotate: -2, top: "44%", left: "42%" },
  { src: "/photos/p12.jpg", rotate: 8, top: "49%", left: "56%" },
  { src: "/photos/p13.jpg", rotate: -6, top: "46%", left: "70%" },
  { src: "/photos/p14.jpg", rotate: 4, top: "51%", left: "83%" },
  { src: "/photos/p15.jpg", rotate: -3, top: "25%", left: "40%" },
];

const TIMELINE = [
  { time: "17:00", label: "Welcome" },
  { time: "17:30", label: "Ceremony" },
  { time: "18:30", label: "Cocktail & Pictures" },
  { time: "21:00", label: "Dinner" },
  { time: "23:30", label: "Cake" },
  { time: "00:00", label: "First Dance" },
  { time: "00:10", label: "Party" },
  { time: "02:00", label: "Late Night Snack" },
  { time: "05:00", label: "Goodbye" },
];

const DRESS_COLORS = [
  { hex: "#1a1a2e", label: "Midnight Navy" },
  { hex: "#1b3a2d", label: "Forest Green" },
  { hex: "#3d1a1a", label: "Deep Burgundy" },
  { hex: "#2e2318", label: "Dark Chocolate" },
  { hex: "#111111", label: "Black" },
];

export default function Home() {
  return (
    <main>
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <nav
        className="wedding-nav fixed top-0 left-0 right-0 z-50 flex justify-center gap-6 md:gap-10 py-4 px-6"
        style={{ background: "rgba(26,23,20,0.7)", backdropFilter: "blur(8px)" }}
      >
        {["Our Story", "The Day", "The Place", "Dress Code", "Details", "RSVP"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            style={{ color: "var(--gold-light)" }}
            className="hover:opacity-70 hidden md:block"
          >
            {item}
          </a>
        ))}
        <a
          href="#rsvp"
          style={{ color: "var(--gold)", border: "1px solid var(--gold)" }}
          className="px-4 py-1 text-xs tracking-widest uppercase hover:opacity-70 md:hidden"
        >
          RSVP
        </a>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-screen"
        style={{ background: "var(--dark)" }}
      >
        {/* Background photo – replace with your hero.jpg */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/photos/hero.jpg"
            alt="Ioana & Fran"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(26,23,20,0.3) 0%, rgba(26,23,20,0.6) 60%, rgba(26,23,20,1) 100%)" }}
          />
        </div>

        <div className="relative z-10 px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            September 12th, 2026
          </p>
          <h1
            className="font-serif font-light"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)", lineHeight: 0.9, color: "var(--text-cream)" }}
          >
            Ioana
            <br />
            <span style={{ color: "var(--gold-light)" }}>&amp;</span>
            <br />
            Fran
          </h1>
          <div className="divider-gold my-8" />
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}
          >
            Are Getting Married at Hotel Monumento San Francisco
          </p>
          <a
            href="#rsvp"
            className="inline-block mt-10 px-10 py-3 text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-lato)",
            }}
          >
            RSVP Here
          </a>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--gold)", opacity: 0.5 }}
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-lato)" }}>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 0v20M1 13l7 7 7-7" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* ── ALMOST OUR FOREVER ──────────────────────────────────────────── */}
      <section
        id="our-story"
        className="section-dark py-24 px-6 text-center"
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
        >
          Almost Our Forever
        </p>
        <h2
          className="font-serif font-light italic mb-12"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", color: "var(--text-cream)" }}
        >
          The Countdown
        </h2>
        <Countdown />

        {/* Polaroid collage */}
        <div className="relative mt-20 mx-auto" style={{ height: "520px", maxWidth: "1100px" }}>
          {POLAROID_PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="polaroid absolute"
              style={{
                transform: `rotate(${photo.rotate}deg)`,
                top: photo.top,
                left: photo.left,
                width: "130px",
                zIndex: Math.abs(photo.rotate),
              }}
            >
              <div
                className="relative bg-gray-800"
                style={{ width: "114px", height: "114px", overflow: "hidden" }}
              >
                <Image
                  src={photo.src}
                  alt={`Photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR STORY ───────────────────────────────────────────────────── */}
      <section className="section-cream py-24 px-6 max-w-3xl mx-auto" id="our-story-text">
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
          style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
        >
          Our Story
        </p>
        <div className="divider-gold mb-10" />
        <div
          className="font-serif space-y-6 text-center leading-relaxed"
          style={{ fontSize: "1.2rem", color: "var(--text-dark)" }}
        >
          <p>
            It was just the beginning of 2018 when the list of exchange architecture students admitted to the
            University of Iași was published, and we both found ourselves browsing online forums, each in our
            own way, trying to imagine what the coming year might bring. We had already come across each other
            without noticing.
          </p>
          <p>
            After the summer, our paths led us both to Romania. Not long after arriving at that rather run-down
            dormitory (which would soon become home), our rooms — coincidentally right next to each other —
            were suddenly left without electricity. As we stepped out into the corridor, we met for the first time.
          </p>
          <p>
            From that point on, what began as coincidence slowly turned into friendship. An unforgettable year
            followed, and when the time came to say goodbye, we did so in tears, convinced we might never see
            each other again… but that was not to be.
          </p>
          <p>
            During the pandemic, we found our way back to each other. We both felt that too much time had
            passed without seeing one another, and that trivial virus was not about to stand in our way. So,
            almost on a whim, we decided to meet in Porto and spend a few days by the sea catching up. As you
            can imagine, that reunion brought us closer in a way that made us never want to say goodbye again.
          </p>
          <p>
            Since then, and as the beginning of our story had quietly foreshadowed, we&apos;ve never stopped
            travelling and discovering the world together. So much so that, during our trip to New York last
            October, we decided to make our story forever.
          </p>
        </div>
      </section>

      {/* ── THE WEDDING DAY ─────────────────────────────────────────────── */}
      <section
        id="the-day"
        className="section-dark py-24 px-6"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
            >
              September 12th, 2026
            </p>
            <h2
              className="font-serif font-light"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 0.95, color: "var(--text-cream)" }}
            >
              The
              <br />
              Wedding
              <br />
              Day
            </h2>
            <div className="mt-8" style={{ width: "60px", height: "1px", background: "var(--gold)" }} />
          </div>
          <div>
            {TIMELINE.map(({ time, label }) => (
              <div
                key={time}
                className="flex items-baseline gap-6 py-3"
                style={{ borderBottom: "1px solid rgba(201,169,110,0.15)" }}
              >
                <span
                  className="font-serif text-lg shrink-0"
                  style={{ color: "var(--gold)", minWidth: "60px" }}
                >
                  {time}
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--text-cream)", fontFamily: "var(--font-lato)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PLACE ───────────────────────────────────────────────────── */}
      <section
        id="the-place"
        className="section-cream py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            The Place
          </p>
          <h2
            className="font-serif font-light text-center mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--text-dark)" }}
          >
            Hotel Monumento San Francisco
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div
                className="relative overflow-hidden"
                style={{ height: "320px", background: "var(--cream-2)" }}
              >
                <Image
                  src="/photos/hotel.jpg"
                  alt="Hotel Monumento San Francisco"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative overflow-hidden"
                style={{ height: "220px", background: "var(--cream-2)" }}
              >
                <Image
                  src="/photos/santiago.jpg"
                  alt="Santiago de Compostela"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <p
                  className="font-serif text-2xl mb-2"
                  style={{ color: "var(--text-dark)" }}
                >
                  San Francisco Hotel Monumento
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Campillo de San Francisco, 3<br />
                  15705 Santiago de Compostela
                </p>
                <a
                  href="https://www.sanfranciscohm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase mt-2 inline-block hover:opacity-70"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
                >
                  www.sanfranciscohm.com
                </a>
              </div>

              <div>
                <h3
                  className="font-serif text-xl mb-4"
                  style={{ color: "var(--text-dark)" }}
                >
                  How To Get There
                </h3>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <p>
                    <strong style={{ color: "var(--text-dark)" }}>By Plane:</strong> The nearest airport is Santiago de Compostela Airport (SCQ), approximately 15 minutes from the city center. You can also fly into A Coruña Airport (LCG), about a 1-hour drive from the venue.
                  </p>
                  <p>
                    <strong style={{ color: "var(--text-dark)" }}>By Train:</strong> Santiago de Compostela Railway Station offers frequent high-speed and regional connections. The station is around a 10-minute drive or 20-minute walk from the hotel.
                  </p>
                  <p>
                    <strong style={{ color: "var(--text-dark)" }}>By Car:</strong> Santiago is easily accessible by road with good motorway connections. Parking is available near the hotel, although access to the historic center may be limited.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE TO STAY ───────────────────────────────────────────────── */}
      <section
        className="section-dark py-24 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            Where To Stay
          </p>
          <p
            className="text-center text-sm max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}
          >
            As many of you will be travelling from abroad, we have reserved rooms at the following hotels for your convenience.
            Please book early — availability in Santiago is limited in September and unbooked rooms will be released two months before the wedding.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1 */}
            <div
              className="p-8 flex flex-col gap-4"
              style={{ border: "1px solid rgba(201,169,110,0.3)" }}
            >
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>
                An Alternative
              </p>
              <h3 className="font-serif text-2xl" style={{ color: "var(--text-cream)" }}>
                Hotel Capital de Galicia
              </h3>
              <ul className="text-sm space-y-2" style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}>
                <li>More affordable — 95€ per double room / night</li>
                <li>Close to the venue</li>
                <li>Free Parking</li>
                <li>Buffet Breakfast — 9€ extra per night</li>
              </ul>
            </div>

            {/* Option 2 — recommended */}
            <div
              className="p-8 flex flex-col gap-4 relative"
              style={{ background: "rgba(201,169,110,0.08)", border: "1px solid var(--gold)" }}
            >
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>
                Our Recommendation
              </p>
              <h3 className="font-serif text-2xl" style={{ color: "var(--text-cream)" }}>
                San Francisco Hotel Monumento
              </h3>
              <ul className="text-sm space-y-2" style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}>
                <li>Stay at the venue</li>
                <li>Reduced price — 145€ per double room / night</li>
                <li>Buffet Breakfast — 22€ per guest / day</li>
              </ul>
              <a
                href="https://www.sanfranciscohm.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs tracking-widest uppercase hover:opacity-70 transition-opacity"
                style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
              >
                Book Now →
              </a>
            </div>

            {/* Option 3 */}
            <div
              className="p-8 flex flex-col gap-4"
              style={{ border: "1px solid rgba(201,169,110,0.3)" }}
            >
              <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>
                Explore Other Options
              </p>
              <h3 className="font-serif text-2xl" style={{ color: "var(--text-cream)" }}>
                Online Platforms
              </h3>
              <ul className="text-sm space-y-3 mt-2" style={{ fontFamily: "var(--font-lato)" }}>
                {["Booking.com", "Airbnb", "Expedia"].map((site) => (
                  <li key={site}>
                    <span style={{ color: "var(--text-cream)", opacity: 0.7 }}>{site}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRESS CODE ──────────────────────────────────────────────────── */}
      <section
        id="dress-code"
        className="section-cream py-24 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            Dress Code
          </p>
          <h2
            className="font-serif font-light mb-3"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--text-dark)" }}
          >
            Black Tie Inspired
          </h2>
          <div className="divider-gold mb-10" />
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
            We would love everyone to feel their most beautiful and elegant, and to make this a night to remember.
          </p>
          <div className="grid grid-cols-2 gap-4 text-left mb-10 max-w-md mx-auto">
            <div
              className="p-4"
              style={{ background: "var(--cream-2)" }}
            >
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Women</p>
              <p className="text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-lato)" }}>
                Floor-length dresses in dark hues
              </p>
            </div>
            <div
              className="p-4"
              style={{ background: "var(--cream-2)" }}
            >
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Men</p>
              <p className="text-sm" style={{ color: "var(--text-dark)", fontFamily: "var(--font-lato)" }}>
                Suits with tie or bow tie and formal shoes
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            {DRESS_COLORS.map(({ hex, label }) => (
              <div key={hex} className="flex flex-col items-center gap-2">
                <div
                  className="rounded-full"
                  style={{ width: "36px", height: "36px", background: hex, boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
                  title={label}
                />
              </div>
            ))}
          </div>
          <p className="text-xs tracking-wide" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
            Please avoid casual wear, trainers, pastel shades, bright colours and prints.
          </p>
        </div>
      </section>

      {/* ── OTHER DETAILS ───────────────────────────────────────────────── */}
      <section
        id="details"
        className="section-cream-2 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4 text-center"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            Other Details
          </p>
          <div className="divider-gold mb-16" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Emergency Contact */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                Emergency Contact
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                As the wedding approaches, the day before and the wedding day itself will be full of excitement.
                If you need anything at all, please don&apos;t hesitate to reach out to two very special people to us:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Miruna, sister of the bride</p>
                  <p className="font-serif text-lg" style={{ color: "var(--text-dark)" }}>+34 695 986 7 35</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Isabel, sister of the groom</p>
                  <p className="font-serif text-lg" style={{ color: "var(--text-dark)" }}>+34 667 80 68 48</p>
                </div>
              </div>
            </div>

            {/* This One's On Us */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                This One&apos;s On Us
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                We know many of you are travelling from different places where weddings are done in very different ways,
                so just to make it simple — once you arrive, everything is included. No surprises, just the celebration.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                From the moment you arrive you will be welcomed with a cocktail and drinks, followed by dinner, and later a
                five-hour open bar. The only things not included are accommodation and transportation.
              </p>
              <p className="text-sm font-semibold mt-3" style={{ color: "var(--text-dark)", fontFamily: "var(--font-lato)" }}>
                Just arrive ready to celebrate. We&apos;ll take care of the rest!
              </p>
            </div>

            {/* Children */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                Children
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                We adore your little ones, truly, but for this celebration we&apos;re imagining a moment for adults to fully switch off
                and enjoy a well-deserved, responsibility-free evening together. We would love for guests to see this as the perfect
                opportunity for a rare night off parenting duties!
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                We completely understand that this is not always feasible, so if there is no other option, of course you are
                welcome to bring them — just let us know in advance.
              </p>
            </div>

            {/* Plus-Ones */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                Plus-Ones
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                If your invitation includes a guest&apos;s name, then yes, they&apos;re invited. Otherwise, we&apos;re keeping the celebration
                intimate and are unable to accommodate additional guests.
              </p>
            </div>

            {/* Unplugged Ceremony */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                An Unplugged Ceremony
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                We&apos;ve gone all in on capturing this day properly, with a professional photographer and videographer documenting
                every laugh, tear and questionable dance move. For this reason, we kindly ask that the ceremony is <strong style={{ color: "var(--text-dark)" }}>phone free</strong>.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                Once we move beyond the ceremony, please feel free to bring your phones out and capture all the fun and chaos!
              </p>
            </div>

            {/* Wedding Album */}
            <div>
              <h3 className="font-serif text-2xl mb-4" style={{ color: "var(--text-dark)" }}>
                Wedding Album
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                We will share a joint photo album where you can upload anything you capture. We would genuinely love to see
                the day through your perspective too!
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                style={{
                  background: "var(--dark)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-lato)",
                }}
              >
                Shared Album →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVER GALICIA ────────────────────────────────────────────── */}
      <section
        className="section-dark relative py-32 px-6 text-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/photos/galicia.jpg"
            alt="Galicia"
            fill
            className="object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(26,23,20,0.5)" }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            While You&apos;re Here
          </p>
          <h2
            className="font-serif font-light mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "var(--text-cream)" }}
          >
            Discover Galicia
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}>
            Santiago de Compostela is one of Spain&apos;s most beautiful cities, rich in history, stunning architecture,
            and incredible food. We encourage you to arrive a few days early or stay longer to explore the magic of Galicia —
            its coastline, the Rías Baixas, the seafood, and the lush green landscapes.
          </p>
        </div>
      </section>

      {/* ── RSVP ────────────────────────────────────────────────────────── */}
      <section
        id="rsvp"
        className="section-dark py-32 px-6 text-center"
        style={{ borderTop: "1px solid rgba(201,169,110,0.2)" }}
      >
        <p
          className="text-xs tracking-[0.3em] uppercase mb-4"
          style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
        >
          Join Us
        </p>
        <h2
          className="font-serif font-light mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", color: "var(--text-cream)" }}
        >
          RSVP
        </h2>
        <div className="divider-gold mb-8" />
        <p className="text-sm mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "var(--text-cream)", opacity: 0.7, fontFamily: "var(--font-lato)" }}>
          Please confirm your attendance by clicking the button below.
          We can&apos;t wait to celebrate with you!
        </p>
        {/* Replace this href with your external RSVP link */}
        <a
          href="YOUR_RSVP_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-14 py-4 text-sm tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
          style={{
            background: "var(--gold)",
            color: "var(--dark)",
            fontFamily: "var(--font-lato)",
            fontWeight: 700,
          }}
        >
          RSVP Here
        </a>
      </section>

      {/* ── CONTACT US ──────────────────────────────────────────────────── */}
      <section
        className="section-dark py-24 px-6 text-center"
        style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
      >
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden mb-16 mx-auto"
            style={{ height: "400px", maxWidth: "600px", background: "var(--dark-2)" }}
          >
            <Image
              src="/photos/contact.jpg"
              alt="Ioana & Fran"
              fill
              className="object-cover opacity-60"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ background: "rgba(26,23,20,0.3)" }}
            >
              <h2
                className="font-serif font-light italic"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "var(--text-cream)" }}
              >
                Ioana &amp; Fran
              </h2>
              <p
                className="text-xs tracking-[0.3em] uppercase mt-3"
                style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
              >
                September 12th, 2026
              </p>
            </div>
          </div>

          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
          >
            Contact Us
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <p className="font-serif text-2xl mb-1" style={{ color: "var(--text-cream)" }}>Ioana</p>
              <a
                href="tel:+34690155108"
                className="text-sm hover:opacity-70 transition-opacity block"
                style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
              >
                +34 690 155 108
              </a>
              <a
                href="mailto:giurcomez@gmail.com"
                className="text-sm hover:opacity-70 transition-opacity block mt-1"
                style={{ color: "var(--text-cream)", opacity: 0.5, fontFamily: "var(--font-lato)" }}
              >
                giurcomez@gmail.com
              </a>
            </div>
            <div
              className="hidden md:block self-stretch"
              style={{ width: "1px", background: "rgba(201,169,110,0.2)" }}
            />
            <div>
              <p className="font-serif text-2xl mb-1" style={{ color: "var(--text-cream)" }}>Fran</p>
              <a
                href="tel:+34697819765"
                className="text-sm hover:opacity-70 transition-opacity block"
                style={{ color: "var(--gold)", fontFamily: "var(--font-lato)" }}
              >
                +34 697 819 765
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        className="py-6 text-center"
        style={{ background: "var(--dark)", borderTop: "1px solid rgba(201,169,110,0.1)" }}
      >
        <p
          className="font-serif italic text-lg"
          style={{ color: "var(--gold)", opacity: 0.6 }}
        >
          Ioana &amp; Fran — 12 · IX · 2026
        </p>
      </footer>
    </main>
  );
}
