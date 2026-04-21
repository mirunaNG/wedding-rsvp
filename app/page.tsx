import Image from "next/image";
import Countdown from "./components/Countdown";

// ─── Photos ──────────────────────────────────────────────────────────────────
// Upload your photos to /public/photos/ with these filenames:
//   hero.png       – hero background (landscape, couple)
//   contact.jpg    – couple photo for Contact Us
//   hotel.jpg      – Hotel Monumento San Francisco exterior
//   santiago.jpg   – Santiago de Compostela cityscape
//   galicia.jpg    – Galicia landscape
//   polaroids.png  – photo collage image
// ─────────────────────────────────────────────────────────────────────────────


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
  "#1a1a2e",
  "#1b3a2d",
  "#3d1a1a",
  "#2e2318",
  "#111111",
];

const NAV_ITEMS = [
  { label: "Our Story",  href: "#story" },
  { label: "The Day",    href: "#day" },
  { label: "The Place",  href: "#place" },
  { label: "Dress Code", href: "#dress" },
  { label: "Details",    href: "#details" },
  { label: "RSVP",       href: "#rsvp" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "var(--font-lato), sans-serif" }}>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "rgba(26,23,20,0.85)", backdropFilter: "blur(10px)",
        padding: "14px 24px",
      }}>
        <div className="nav-links">
          {NAV_ITEMS.map(({ label, href }) => (
            <a key={label} href={href}
              className={label !== "RSVP" ? "nav-hide-mobile" : ""}
              style={{
                color: label === "RSVP" ? "var(--gold)" : "var(--gold-light)",
                fontSize: "0.6rem", letterSpacing: "0.18em",
                textTransform: "uppercase", textDecoration: "none",
                fontFamily: "var(--font-lato)",
                border: label === "RSVP" ? "1px solid var(--gold)" : "none",
                padding: label === "RSVP" ? "6px 16px" : "0",
              }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        position: "relative", height: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", background: "var(--dark)",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/photos/hero.png" alt="Ioana & Fran" fill
            style={{ objectFit: "cover", opacity: 0.75 }} priority />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(26,23,20,0.28)",
          }} />
        </div>

        {/* Names + date — bottom center, above the bottom bar */}
        <div style={{ position: "absolute", bottom: 80, left: 0, right: 0, zIndex: 1, padding: "0 30px", textAlign: "center" }}>
          <h1 style={{
            fontFamily: "var(--font-pinyon-script), cursive",
            fontSize: "clamp(1rem, 7vw, 7rem)",
            fontWeight: 400, lineHeight: 1.1,
            color: "var(--text-cream)", margin: 0,
          }}>
            Ioana &amp; Fran
          </h1>

          <p style={{
            fontSize: "1.7rem",  textTransform: "uppercase",
            color: "white", 
            fontFamily: "var(--font-quattrocento), serif",
          }}>September 12th, 2026</p>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: "absolute", bottom: 15, left: 0, right: 0, zIndex: 1,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "24px 48px",
        }}>
          <p style={{
            fontSize: "0.9rem", textTransform: "uppercase",
            color: "white", margin: 0,
            fontFamily: "var(--font-roboto-mono), monospace",
          }}>Are Getting Married At</p>
          <p style={{
            fontSize: "0.9rem",  textTransform: "uppercase",
            color: "white", margin: 0,
            fontFamily: "var(--font-roboto-mono), monospace", 
          }}>Hotel Monumento San Francisco</p>
        </div>
      </section>

      {/* ── ALMOST OUR FOREVER ───────────────────────────────────────────── */}
      <section id="story" style={{
        position: "relative", background: "var(--dark)",
        padding: "120px 24px", textAlign: "center", overflow: "hidden",
      }}>
        {/* Background image for countdown */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/photos/fondoCountdown.png" alt="" fill style={{ objectFit: "cover", filter: "grayscale(40%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,23,20,0.6)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
          <p style={{
            fontSize: "5rem",
            color: "#faf1e1", fontFamily: "var(--font-pinyon-script), cursive",
          }}>Almost Our Forever</p>
          <Countdown />
          <div style={{ display: "flex", justifyContent: "center", gap: "90px", marginTop: "75px" }}>
            <Image src="/photos/countdown1.png" alt="Memory 1" width={300} height={300} style={{ width: "440px", height: "340px", objectFit: "cover", opacity: 0.85, filter: "sepia(20%)" }} />
            <Image src="/photos/countdown2.png" alt="Memory 2" width={300} height={300} style={{ width: "440px", height: "340px", objectFit: "cover", opacity: 0.85, filter: "sepia(20%)" }} />
            <Image src="/photos/countdown3.png" alt="Memory 3" width={300} height={300} style={{ width: "440px", height: "340px", objectFit: "cover", opacity: 0.85, filter: "sepia(20%)" }} />
          </div>

        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#2d2b25", paddingBottom: "80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center" }}>
          <p style={{
            fontSize: "4rem",
            color: "#faf1e1", marginBottom: "32px", fontFamily: "var(--font-pinyon-script), cursive",
          }}>Our Story</p>
          <div style={{
            background: "#3d3a31",
            padding: "40px 48px",
            textAlign: "left",
            marginBottom: "60px",
          }}>
            {[
              `It was just the beginning of 2018 when the list of exchange architecture students admitted to the University of Iași was published, and we both found ourselves browsing online forums, each in our own way, trying to imagine what the coming year might bring. We had already come across each other without noticing.`,
              `After the summer, our paths led us both to Romania. Not long after arriving at that rather run-down dormitory (which would soon become home), our rooms — coincidentally right next to each other — were suddenly left without electricity. As we stepped out into the corridor, we met for the first time.`,
              `From that point on, what began as coincidence slowly turned into friendship. An unforgettable year followed, and when the time came to say goodbye, we did so in tears, convinced we might never see each other again… but that was not to be.`,
              `During the pandemic, we found our way back to each other. We both felt that too much time had passed without seeing one another, and that trivial virus was not about to stand in our way. So, almost on a whim, we decided to meet in Porto and spend a few days by the sea catching up. As you can imagine, that reunion brought us closer in a way that made us never want to say goodbye again.`,
              `Since then, and as the beginning of our story had quietly foreshadowed, we've never stopped travelling and discovering the world together. So much so that, during our trip to New York last October, we decided to make our story forever.`,
            ].map((para, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem", lineHeight: 1.8,
                color: "#faf1e1", marginBottom: "24px",
              }}>{para}</p>
            ))}
          </div>
          {/* photo collage inside same section */}
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <Image
              src="/photos/polaroids.png"
              alt="Our memories"
              width={1080}
              height={720}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* ── THE WEDDING DAY ──────────────────────────────────────────────── */}
      <section id="day" className="section-pad" style={{ background: "var(--dark)" }}>
        <div className="grid-2-center" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: "20px", fontFamily: "var(--font-lato)",
            }}>September 12th, 2026</p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300,
              lineHeight: 0.9, color: "var(--text-cream)", margin: 0,
            }}>The<br />Wedding<br />Day</h2>
            <div style={{ width: 60, height: 1, background: "var(--gold)", marginTop: 32 }} />
          </div>
          <div>
            {TIMELINE.map(({ time, label }) => (
              <div key={time} style={{
                display: "flex", alignItems: "baseline", gap: "24px",
                padding: "14px 0",
                borderBottom: "1px solid rgba(201,169,110,0.12)",
              }}>
                <span style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.1rem", color: "var(--gold)", minWidth: 56,
                }}>{time}</span>
                <span style={{
                  fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--text-cream)", fontFamily: "var(--font-lato)",
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PLACE ────────────────────────────────────────────────────── */}
      <section id="place" className="section-pad" style={{ background: "var(--cream)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)",
            }}>The Place</p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 300,
              color: "var(--text-dark)", margin: 0,
            }}>Hotel Monumento San Francisco</h2>
          </div>

          <div className="grid-2" style={{ gap: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ position: "relative", height: 320, background: "var(--cream-2)" }}>
                <Image src="/photos/hotel.jpg" alt="Hotel Monumento" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", height: 200, background: "var(--cream-2)" }}>
                <Image src="/photos/santiago.jpg" alt="Santiago de Compostela" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div>
              <p style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: 4,
              }}>San Francisco Hotel Monumento</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 4 }}>
                Campillo de San Francisco, 3 · 15705 Santiago de Compostela
              </p>
              <a href="https://www.sanfranciscohm.com" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-lato)" }}>
                www.sanfranciscohm.com
              </a>

              <div style={{ width: 40, height: 1, background: "var(--gold)", margin: "32px 0" }} />

              <h3 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.4rem", color: "var(--text-dark)", marginBottom: 16,
              }}>How To Get There</h3>
              {[
                { title: "By Plane", text: "The nearest airport is Santiago de Compostela Airport (SCQ), approximately 15 minutes from the city center. You can also fly into A Coruña Airport (LCG), about a 1-hour drive from the venue." },
                { title: "By Train", text: "Santiago de Compostela Railway Station offers frequent high-speed and regional connections. Around a 10-minute drive or 20-minute walk from the hotel." },
                { title: "By Car", text: "Santiago is easily accessible by road with good motorway connections. Parking is available near the hotel, though access to the historic center may be limited." },
              ].map(({ title, text }) => (
                <p key={title} style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: 14 }}>
                  <strong style={{ color: "var(--text-dark)", fontFamily: "var(--font-lato)" }}>{title}: </strong>{text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE TO STAY ────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--dark-2)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase",
              color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)",
            }}>Where To Stay</p>
            <p style={{
              fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-cream)", opacity: 0.65,
              maxWidth: 640, margin: "0 auto", fontFamily: "var(--font-lato)",
            }}>
              As many of you will be travelling from abroad, we have reserved rooms at the following hotels.
              Please book early — unbooked rooms will be released two months before the wedding.
            </p>
          </div>

          <div className="grid-3">
            {/* Option 1 */}
            <div style={{ padding: 36, border: "1px solid rgba(201,169,110,0.25)" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-lato)", marginBottom: 12 }}>An Alternative</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--text-cream)", marginBottom: 20 }}>Hotel Capital de Galicia</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.8rem", lineHeight: 2, color: "var(--text-cream)", opacity: 0.65, fontFamily: "var(--font-lato)" }}>
                <li>95€ per double room / night</li>
                <li>Close to the venue</li>
                <li>Free parking</li>
                <li>Buffet breakfast — 9€ extra</li>
              </ul>
            </div>

            {/* Recommended */}
            <div style={{ padding: 36, border: "1px solid var(--gold)", background: "rgba(201,169,110,0.06)" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-lato)", marginBottom: 12 }}>Our Recommendation</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--text-cream)", marginBottom: 20 }}>San Francisco Hotel Monumento</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.8rem", lineHeight: 2, color: "var(--text-cream)", opacity: 0.65, fontFamily: "var(--font-lato)" }}>
                <li>Stay at the venue</li>
                <li>145€ per double room / night</li>
                <li>Breakfast — 22€ per guest / day</li>
              </ul>
              <a href="https://www.sanfranciscohm.com" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: 24, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-lato)" }}>
                Book Now →
              </a>
            </div>

            {/* Other */}
            <div style={{ padding: 36, border: "1px solid rgba(201,169,110,0.25)" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-lato)", marginBottom: 12 }}>Explore Other Options</p>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--text-cream)", marginBottom: 20 }}>Online Platforms</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.8rem", lineHeight: 2.2, color: "var(--text-cream)", opacity: 0.65, fontFamily: "var(--font-lato)" }}>
                <li>Booking.com</li>
                <li>Airbnb</li>
                <li>Expedia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRESS CODE ───────────────────────────────────────────────────── */}
      <section id="dress" className="section-pad" style={{ background: "var(--cream)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)" }}>Dress Code</p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 300,
            color: "var(--text-dark)", margin: "0 0 12px",
          }}>Black Tie Inspired</h2>
          <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto 40px" }} />

          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 40, fontFamily: "var(--font-lato)" }}>
            We would love everyone to feel their most beautiful and elegant, and to make this a night to remember.
          </p>

          <div className="grid-2-small" style={{ marginBottom: 40, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            {[
              { label: "Women", desc: "Floor-length dresses in dark hues" },
              { label: "Men",   desc: "Suits with tie or bow tie and formal shoes" },
            ].map(({ label, desc }) => (
              <div key={label} style={{ padding: 24, background: "var(--cream-2)", textAlign: "left" }}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8, fontFamily: "var(--font-lato)" }}>{label}</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-dark)", lineHeight: 1.5, fontFamily: "var(--font-lato)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            {DRESS_COLORS.map((hex) => (
              <div key={hex} style={{
                width: 34, height: 34, borderRadius: "50%",
                background: hex, boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }} />
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-lato)", letterSpacing: "0.05em" }}>
            Please avoid casual wear, trainers, pastel shades, bright colours and prints.
          </p>
        </div>
      </section>

      {/* ── OTHER DETAILS ────────────────────────────────────────────────── */}
      <section id="details" className="section-pad" style={{ background: "var(--cream-2)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)" }}>Other Details</p>
            <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto" }} />
          </div>

          <div className="grid-2" style={{ gap: "48px 80px" }}>
            {[
              {
                title: "Emergency Contact",
                content: (
                  <>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 20, fontFamily: "var(--font-lato)" }}>
                      The day before and the wedding day will be full of excitement. If you need anything at all, please reach out to:
                    </p>
                    <div style={{ marginBottom: 12 }}>
                      <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Miruna, sister of the bride</p>
                      <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", color: "var(--text-dark)" }}>+34 695 986 7 35</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "var(--font-lato)" }}>Isabel, sister of the groom</p>
                      <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.2rem", color: "var(--text-dark)" }}>+34 667 80 68 48</p>
                    </div>
                  </>
                ),
              },
              {
                title: "This One's On Us",
                content: (
                  <>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 12, fontFamily: "var(--font-lato)" }}>
                      Once you arrive, everything is included — cocktail, dinner, and a five-hour open bar. No surprises, just the celebration.
                    </p>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                      The only things not included are accommodation and transportation. Just arrive ready to celebrate — we'll take care of the rest!
                    </p>
                  </>
                ),
              },
              {
                title: "Children",
                content: (
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                    We adore your little ones, but we're imagining an adults-only evening so everyone can fully relax. We'd love for you to treat this as a rare night off parenting duties! If there is truly no other option, please let us know in advance.
                  </p>
                ),
              },
              {
                title: "Plus-Ones",
                content: (
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                    If your invitation includes a guest's name, they're invited. Otherwise, we're keeping the celebration intimate and are unable to accommodate additional guests.
                  </p>
                ),
              },
              {
                title: "An Unplugged Ceremony",
                content: (
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", fontFamily: "var(--font-lato)" }}>
                    We kindly ask that the ceremony is <strong style={{ color: "var(--text-dark)" }}>phone free</strong>. We want that moment seen with your eyes, not through screens. Once we move beyond the ceremony, please feel free to capture everything!
                  </p>
                ),
              },
              {
                title: "Wedding Album",
                content: (
                  <>
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: 24, fontFamily: "var(--font-lato)" }}>
                      We'll share a joint photo album where you can upload anything you capture. We'd love to see the day through your eyes too!
                    </p>
                    <a href="#" style={{
                      display: "inline-block", padding: "10px 28px",
                      background: "var(--dark)", color: "var(--gold)",
                      textDecoration: "none", fontSize: "0.6rem",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      fontFamily: "var(--font-lato)",
                    }}>Shared Album →</a>
                  </>
                ),
              },
            ].map(({ title, content }) => (
              <div key={title}>
                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.6rem", color: "var(--text-dark)",
                  marginBottom: 16, fontWeight: 400,
                }}>{title}</h3>
                {content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCOVER GALICIA ─────────────────────────────────────────────── */}
      <section className="section-pad-lg" style={{
        position: "relative", background: "var(--dark)",
        textAlign: "center", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/photos/galicia.jpg" alt="Galicia" fill style={{ objectFit: "cover", opacity: 0.28 }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,23,20,0.45)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)" }}>While You're Here</p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 300,
            color: "var(--text-cream)", margin: "0 0 24px",
          }}>Discover Galicia</h2>
          <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto 32px" }} />
          <p style={{ fontSize: "0.85rem", lineHeight: 1.9, color: "var(--text-cream)", opacity: 0.65, fontFamily: "var(--font-lato)" }}>
            Santiago de Compostela is one of Spain's most beautiful cities, rich in history and incredible food.
            We encourage you to arrive early or stay longer to explore Galicia — its coastline, the Rías Baixas, the seafood, and the lush green landscapes.
          </p>
        </div>
      </section>

      {/* ── RSVP ─────────────────────────────────────────────────────────── */}
      <section id="rsvp" className="section-pad-lg" style={{
        background: "var(--dark)", textAlign: "center",
        borderTop: "1px solid rgba(201,169,110,0.15)",
      }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12, fontFamily: "var(--font-lato)" }}>Join Us</p>
          <h2 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(3.5rem, 10vw, 7rem)", fontWeight: 300,
            color: "var(--text-cream)", margin: "0 0 16px",
          }}>RSVP</h2>
          <div style={{ width: 60, height: 1, background: "var(--gold)", margin: "0 auto 32px" }} />
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-cream)", opacity: 0.6, marginBottom: 48, fontFamily: "var(--font-lato)" }}>
            Please confirm your attendance. We can't wait to celebrate with you!
          </p>
          {/* Replace href with your external RSVP URL */}
          <a href="YOUR_RSVP_LINK_HERE" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", padding: "16px 56px",
            background: "var(--gold)", color: "var(--dark)",
            textDecoration: "none", fontSize: "0.7rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            fontFamily: "var(--font-lato)", fontWeight: 700,
          }}>RSVP Here</a>
        </div>
      </section>

      {/* ── CONTACT US ───────────────────────────────────────────────────── */}
      <section className="section-pad" style={{
        background: "var(--dark)", textAlign: "center",
        borderTop: "1px solid rgba(201,169,110,0.1)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative", height: 420, maxWidth: 580, margin: "0 auto 64px", background: "var(--dark-2)" }}>
            <Image src="/photos/contact.jpg" alt="Ioana & Fran" fill style={{ objectFit: "cover", opacity: 0.55 }} />
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              background: "rgba(26,23,20,0.25)",
            }}>
              <h2 style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 300,
                fontStyle: "italic", color: "var(--text-cream)", margin: 0,
              }}>Ioana &amp; Fran</h2>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginTop: 12, fontFamily: "var(--font-lato)" }}>
                September 12th, 2026
              </p>
            </div>
          </div>

          <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 40, fontFamily: "var(--font-lato)" }}>Contact Us</p>

          <div className="contact-flex">
            <div>
              <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--text-cream)", marginBottom: 4 }}>Ioana</p>
              <a href="tel:+34690155108" style={{ display: "block", fontSize: "0.8rem", color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-lato)" }}>+34 690 155 108</a>
              <a href="mailto:giurcomez@gmail.com" style={{ display: "block", fontSize: "0.75rem", color: "var(--text-cream)", opacity: 0.45, textDecoration: "none", marginTop: 4, fontFamily: "var(--font-lato)" }}>giurcomez@gmail.com</a>
            </div>
            <div className="contact-divider" style={{ width: 1, alignSelf: "stretch", background: "rgba(201,169,110,0.2)" }} />
            <div>
              <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.8rem", color: "var(--text-cream)", marginBottom: 4 }}>Fran</p>
              <a href="tel:+34697819765" style={{ display: "block", fontSize: "0.8rem", color: "var(--gold)", textDecoration: "none", fontFamily: "var(--font-lato)" }}>+34 697 819 765</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{
        background: "var(--dark)", padding: "24px",
        textAlign: "center", borderTop: "1px solid rgba(201,169,110,0.08)",
      }}>
        <p style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontStyle: "italic", fontSize: "1.1rem",
          color: "var(--gold)", opacity: 0.5,
        }}>Ioana &amp; Fran — 12 · IX · 2026</p>
      </footer>
    </main>
  );
}
