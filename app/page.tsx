import Image from "next/image";
import Countdown from "./components/Countdown";
import Link from "next/link";

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
  "#000000",
  "#3f2e27",
  "#603527",
  "#470516",
  "#132248",
  "#013223",
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

        {/* Names + date */}
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
          {/* collage */}
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
      <section id="day" className="section-pad" style={{ background: "#cdc1ab" }}>
        <div className="grid-2-center" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "right" }}>
            <h2 style={{
              fontFamily: "var(--font-quattrocento), Georgia, serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300,
              lineHeight: 0.9, color: "#2d2b25", margin: 0,
            }}>THE<br />WEDDING<br />DAY</h2>
          </div>
          <div>
            {TIMELINE.map(({ time, label }) => (
              <div key={time} style={{
                display: "flex", alignItems: "baseline", gap: "100px",
                padding: "10px 0",
                borderBottom: "1px dotted #2d2b25",
              }}>
                <span style={{
                  fontFamily: "var(--font-quattrocento), Georgia, serif",
                  fontSize: "1rem", color: "#2d2b25", minWidth: 56,
                }}>{time}</span>
                <span style={{
                  fontSize: "1rem",
                  color: "#2d2b25", fontFamily: "var(--font-roboto-mono), monospace",
                }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PLACE ────────────────────────────────────────────────────── */}
      <section id="place" className="section-pad" style={{ background: "#2d2b25" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto", gap: 50}}>
          <div style={{ textAlign: "left", marginBottom:10}}>
            <p style={{
              fontSize: "3rem", textTransform: "uppercase",
              color: "#faf1e1", marginBottom: 0, fontFamily: "var(--font-playfair), serif",
            }}>The Place</p>
            <h2 style={{
              fontFamily: "var(--font-pinyon-script), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 5rem)", fontWeight: 300,
              color: "#faf1e1",
            }}>San Francisco Hotel Monumento </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>

            {/* Hotel photo + map */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 150, alignItems: "stretch" }}>
              <div style={{ position: "relative", maxHeight: 420,height: "100%", maxWidth: 900, width: "100%", }}>
                <Image src="/photos/hotel.png" alt="Hotel Monumento" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", maxWidth: 500, width: "100%" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", width: "100%", opacity: 0.8 }}>
                  <iframe
                    src="https://maps.google.com/maps?q=Campillo+de+San+Francisco,+3,+15705+Santiago+de+Compostela&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: "block", pointerEvents: "none", position: "absolute", inset: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://maps.google.com/maps?q=Campillo+de+San+Francisco,+3,+15705+Santiago+de+Compostela"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ position: "absolute", inset: 0 }}
                    aria-label="Open in Google Maps"
                  />
                </div>
                <p style={{ fontSize: "0.72rem", color: "#faf1e1", marginTop: 10, lineHeight: 1.7, fontFamily: "var(--font-roboto-mono)" }}>
                  Campillo de San Francisco, 3, 15705 Santiago de Compostela<br />
                  <a href="https://www.sanfranciscohm.com" target="_blank" rel="noopener noreferrer" 
                  style={{ color: "#faf1e1", fontFamily: "var(--font-roboto-mono)", textDecoration: "none" }}>www.sanfranciscohm.com</a> | 981581634
                </p>
              </div>
            </div>

            {/*How To Get There + second photo */}
            <div style={{ display: "grid", gridTemplateColumns: "2.25fr 2fr", gap: 80, alignItems: "start" }}>
              <div style={{ textAlign: "justify" }}>
                <h3 style={{
                  fontFamily: "var(--font-playfair), serif", textTransform: "uppercase",
                  fontSize: "2rem", color: "#faf1e1", marginBottom: 16,
                }}>How To Get There</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#faf1e1", fontFamily: "var(--font-quattrocento)", marginBottom: 14 }}>
                Our wedding will take place at Hotel Monumento San Francisco, located in the heart of Santiago de Compostela’s historic center.                
                </p>
                <div style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#faf1e1", fontFamily: "var(--font-quattrocento)", marginBottom: 14 }}>
                  Santiago is well connected and easy to reach from many international and domestic locations:
                  <ul style={{ paddingLeft: 20, marginBottom: 14 }}>
                  {[
                    { title: <b>By Plane</b>, text: "The nearest airport is Santiago de Compostela Airport (SCQ), located approximately 15 minutes from the city center. Regular flights operate from major European cities. From the airport, you can take a taxi or bus directly into Santiago. Alternatively, you can also fly into A Coruña Airport (LCG), which is about a 1-hour drive from the venue. From there, you can take a taxi, rent a car, or use public transport to reach the city." },
                    { title: <b>By Train</b>, text: "Santiago de Compostela Railway Station offers frequent high-speed and regional connections to cities such as Madrid and A Coruña. The station is around a 10-minute drive or 20-minute walk from the hotel." },
                    { title: <b>By Car</b>, text: "Santiago is easily accessible by road, with good motorway connections across Galicia and the rest of Spain. Parking is available near the hotel, although access to the historic center may be limited." },
                  ].map(({ title, text }, i) => (
                    <li key={i} style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#faf1e1", marginBottom: 10 }}>
                      <strong style={{ color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>{title}: </strong>{text}
                    </li>
                  ))}
                  </ul>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#faf1e1", fontFamily: "var(--font-quattrocento)", marginBottom: 14 }}>
                  Once in Santiago, the hotel is within walking distance of the main landmarks, making it easy to reach on foot or by a short taxi ride.
                </p>
              </div>
              <div style={{ position: "relative", aspectRatio: "4 / 3", maxWidth: 500, width: "100%", marginTop: 60 }}>
                <Image src="/photos/santiago.png" alt="Santiago de Compostela" fill style={{ objectFit: "cover", filter: "grayscale(100%)"}} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHERE TO STAY ────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ position: "relative", background: "var(--dark-2)"}}>
        <Image src="/photos/where-to-stay.png" alt="" fill style={{ objectFit: "cover", opacity: 0.3, zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(239, 221, 187, 0.12)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontSize: "3rem",
              color: "white", marginBottom: 12, fontFamily: "var(--font-pinyon-script), cursive",
              textShadow: "2px 2px 0px rgba(255,255,255,0.12)",
            }}>Where To Stay</p>
            <p style={{
              fontSize: "1rem", lineHeight: 1.8, color: "#faf1e1",
              maxWidth: 1000, margin: "0 auto", fontFamily: "var(--font-quattrocento), serif",
            }}>
              As many of you will be travelling from abroad, we have reserved rooms at the following hotels for your convenience.
              <br />
              Please book early, as availability in Santiago is limited in September and unbooked rooms will be released two months before the wedding.
            </p>
          </div>

          <div className="grid-3">
            {/* Option 1 */}
            <div style={{ padding: 36, backgroundColor: "#5a564b" }}>
              <p style={{ fontSize: "1.5rem", textAlign: "center", color: "#faf1e1", fontFamily: "var(--font-pinyon-script), cursive", marginBottom: 12 }}>An Alternative:</p>
              <Link href="https://www.hotelcapitaldegalicia.com" target="_blank" rel="noopener noreferrer" 
              style={{ display: "block", fontFamily: "var(--font-playfair), Georgia, serif", textAlign: "center", textTransform: "uppercase", textDecoration: "underline", fontSize: "1.25rem", color: "#faf1e1", marginBottom: 20 }}>
              Hotel Capital de Galicia</Link>
              <ul style={{ listStyle: "disc", padding: 0, margin: 20, fontSize: "0.8rem", color: "#faf1e1", fontFamily: "var(--font-quattrocento), serif" }}>
                <li>More affordable - 95€ per double room per night.</li>
                <li>Close to the venue</li>
                <li>Free parking</li>
                <li>Buffet Breakfast Offered - 9€ extra per night</li>
              </ul>
            </div>

            {/* Recommended */}
            <div style={{ padding: 36, backgroundColor: "#603527" }}>
              <p style={{ fontSize: "1.5rem", textAlign: "center", color: "#faf1e1", fontFamily: "var(--font-pinyon-script), cursive", marginBottom: 12 }}>Our Recommendation:</p>
              <Link href="https://sanfranciscohm.com" target="_blank" rel="noopener noreferrer" 
              style={{ display: "block", fontFamily: "var(--font-playfair), Georgia, serif", textAlign: "center", textTransform: "uppercase", textDecoration: "underline", fontSize: "1.25rem", color: "#faf1e1", marginBottom: 20 }}>
              San Francisco Hotel Monumento</Link>
              <ul style={{ listStyle: "disc", padding: 0, margin: 20, fontSize: "0.8rem", color: "#faf1e1", fontFamily: "var(--font-quattrocento), serif" }}>
                <li>Stay at the venue.</li>
                <li>Reduced price - 145€ per double room per night.</li>
                <li>Buffet Breakfast can be added on for 22€ per guest and  day.</li>
              </ul>
            </div>

            {/* Other */}
            <div style={{ padding: 36, backgroundColor: "#5a564b", gap: 20, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ fontSize: "1.5rem", textAlign: "center", color: "#faf1e1", fontFamily: "var(--font-pinyon-script), cursive", marginBottom: 12 }}>Explore Other Options:</p>
              <Link href="https://www.booking.com/searchresults.en-gb.html?ss=Santiago+de+Compostela&ssne=Santiago+de+Compostela&ssne_untouched=Santiago+de+Compostela&efdco=1&label=gen173nr-10CAEoggI46AdIClgEaDuIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Asrc784GwAIB0gIkZDFiMWUwYWQtZWIxOS00ODE0LWE0MmUtMjBlZmM2ZmY4M2Fj2AIB4AIB&aid=304142&lang=en-gb&sb=1&src_elem=sb&src=searchresults&dest_id=-402059&dest_type=city&group_adults=2&no_rooms=1&group_children=0" 
              target="_blank" rel="noopener noreferrer" 
              style={{ display: "block", fontFamily: "var(--font-playfair), Georgia, serif", textAlign: "center", textTransform: "uppercase", textDecoration: "underline", fontSize: "1.25rem", color: "#faf1e1", marginBottom: 20 }}>
              Booking</Link>
              <Link href="https://www.airbnb.co.uk/s/Santiago-de-Compostela--Spain/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJp3Hd4kT-Lg0REeOHwIhoFOA&location_bb=QiufbcEIVQRCK2s8wQkZvQ%3D%3D&acp_id=fc65f550-bd0e-4014-b1f3-0ecb92024a22&date_picker_type=flexible_dates&flexible_trip_dates%5B%5D=september&search_type=autocomplete_click" 
              target="_blank" rel="noopener noreferrer" 
              style={{ display: "block", fontFamily: "var(--font-playfair), Georgia, serif", textAlign: "center", textTransform: "uppercase", textDecoration: "underline", fontSize: "1.25rem", color: "#faf1e1", marginBottom: 20 }}>
              AirBnB</Link>
              <Link href="https://www.expedia.co.uk/Hotel-Search?destination=Santiago%20de%20Compostela%2C%20Galicia%2C%20Spain&regionId=3099&latLong=42.878212%2C-8.544845&flexibility=1_DAY&searchRange=2026-09-01_2026-09-30&adults=2&rooms=1&typeaheadCollationId=6bd2c6d3-51f8-48be-bda1-de0aa8374db1&sort=RECOMMENDED&theme=&userIntent=&semdtl=&categorySearch=any_option&useRewards=false" 
              target="_blank" rel="noopener noreferrer" 
              style={{ display: "block", fontFamily: "var(--font-playfair), Georgia, serif", textAlign: "center", textTransform: "uppercase", textDecoration: "underline", fontSize: "1.25rem", color: "#faf1e1", marginBottom: 20 }}>
              Expedia</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRESS CODE ───────────────────────────────────────────────────── */}
      <section id="dress" className="section-pad" style={{ background: "#cdc1ab", textAlign: "center" }}>
        <div style={{ maxWidth: 750, margin: "0 auto"}}>
          <p style={{ fontSize: "4rem", textTransform: "uppercase", color: "black", marginBottom: 0, fontFamily: "var(--font-playfair)" }}>Dress Code</p>
          <h2 style={{
            fontFamily: "var(--font-pinyon-script)",
            fontSize: "2.5rem", fontWeight: 300,
            color: "var(--text-dark)", margin: "-28px 0 0px",
          }}>Black Tie Inspired</h2>

          <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "black", marginBottom: 40, fontFamily: "var(--font-quattrocento)" }}>
            We would love everyone to feel their most beautiful and elegant, and to make this a night to remember.
          </p>

          <div style={{ marginBottom: 10 }}>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.8, fontFamily: "var(--font-quattrocento)", margin: 0 }}>Floor-length dresses in dark hues</p>
            <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-dark)", lineHeight: 1.8, fontFamily: "var(--font-quattrocento)", margin: 0 }}>Suits with tie or bow tie and formal shoes</p>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-dark)", fontFamily: "var(--font-quattrocento)", marginBottom: 40 }}>
            Please avoid casual wear, trainers, pastel shades, bright colours and prints.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            {DRESS_COLORS.map((hex) => (
              <div key={hex} style={{
                width: 50, height: 50, borderRadius: "50%",
                background: hex, boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER DETAILS ────────────────────────────────────────────────── */}
      <section id="details" className="section-pad" style={{ background: "#322e29" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: "4rem", color: "#faf1e1", marginBottom: 5, fontFamily: "var(--font-pinyon-script)" }}>Other Details</p>
          </div>

          <div  style={{ display: "flex", flexDirection: "column", gap: 40}}>
            {[
              {
                title: "Emergency Contact",
                content: (
                  <>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                      As the wedding approaches, the day before and the wedding day itself will be full of excitement, emotions, and many special moments. 
                      It might be a little difficult for us to be fully available, but we want you to feel completely looked after throughout the celebration.
                    </p>
                     <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                      If you need anything at all, or have any questions during those days, please don’t hesitate to reach out to two very special people to us:
                    </p>
                    <ul style={{ listStyle: "disc", paddingLeft: "1.2em", margin: 0 }}>
                      <li style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                        Miruna, sister of the bride: +34 695 986 7 35
                      </li>
                      <li style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)", marginBottom: 20 }}>
                        Isabel, sister of the groom: +34 667 80 68 48
                      </li>
                    </ul>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                      They will be there to help, guide, and make sure everything runs smoothly so you can simply relax and enjoy every moment with us.
                    </p>
                  </>
                ),
              },
              {
                title: "Children",
                content: (
                  <>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                    We adore your little ones, truly, but for this celebration we’re imagining a moment for adults to fully switch off, relax and enjoy 
                    a well deserved, responsibility free evening together.                  
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                    We would love for guests to see this as the perfect opportunity for a rare night off parenting duties, with grandparents, godparents 
                    or babysitters hopefully stepping in!                   
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                  We kindly ask that children stay at home if possible, as there will be no babysitting service, children’s entertainment or dedicated facilities 
                  at the venue. If children do attend, parents will need to remain fully responsible for them throughout the event.                 
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1",  marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                  That said, we completely understand that this is not always feasible, so if there is no other option, of course you are welcome to bring them with 
                  you, just let us know in advance.                
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                  As the evening continues, after dinner the celebration will turn into a party with a more adult atmosphere. Thank you for understanding and for
                  helping us create the celebration we have envisioned!              
                  </p>
                </>
                ),
              },
              {
                title: "Plus-Ones",
                content: (
                  <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                    If your invitation includes a gue’s name, then yes, they’re invited. Otherwise, we’re keeping the celebration intimate and are unable to 
                    acommodate additional guests. 
                  </p>
                ),
              },
              {
                title: "This One's On Us",
                content: (
                  <>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                      We know many of you are travelling from different places where weddings are done in very different ways, so just to make it simple, 
                      here everything is included once you arrive. No surprises, just the celebration.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                      From the moment you arrive, you will be welcomed with a cocktail and drinks, followed by a relaxed food experience, then dinner, and later 
                      an open bar to keep the celebration going. After dinner, we will continue with a five hour open bar where everything is covered as part of 
                      the celebration.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                      The only things not included are accommodation and transportation. 
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                      In short, just arrive ready to celebrate. We’ll take care of the rest!
                    </p>
                  </>
                ),
              },
              {
                title: "An Unplugged Ceremony",
                content: (
                  <>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                       We’ve gone a little all in on capturing this day properly, with a professional photographer and videographer who will be documenting every laugh, 
                       tear and questionable dance move so we can all stay fully present and enjoy it properly.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", fontFamily: "var(--font-quattrocento)" }}>
                       For this reason, we kindly ask that the ceremony is phone free. We would love for that moment to be seen with your eyes, not through screens, 
                       and to avoid a sea of phones in front of faces during the most emotional part of the day. 
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 20, fontFamily: "var(--font-quattrocento)" }}>
                       Once we move beyond the ceremony, please feel free to bring your phones out and capture all the fun, chaos and details. We absolutely love seeing 
                       the day through your perspective.
                    </p>
                    <p style={{ fontSize: "1rem", lineHeight: 1.5, color: "#faf1e1", marginBottom: 40, fontFamily: "var(--font-quattrocento)" }}>
                       We will also share a joint photo album where you can upload anything you capture. We would genuinely love to see your photos too, please drop them
                       in the Album:
                    </p>
                    <div style={{ textAlign: "center" }}>
                      <Link href={"https://photos.google.com/share/AF1QipMQY0I4-kKImEDWaZdXHfjrk1fdtRMRo4gpI0pPkG6FnCaeLmaDLyfh6Z-oOnySOA?key=LXlQbTIxRXJxb1BhcmppLU9odXhMeGY0azNHckp3"}
                      style={{
                        display: "inline-block", padding: "10px 28px",
                        background: "#775f4c", color: "#faf1e1",
                        textDecoration: "none", fontSize: "2rem",
                        borderRadius: 5,
                        fontFamily: "var(--font-pinyon-script), cursive", 
                      }}>Wedding Album </Link>
                    </div>
                  </>
                ),
              },
            ].map(({ title, content }) => (
              <div key={title}>
                <h3 style={{
                  fontFamily: "var(--font-playfair, serif)", textTransform: "uppercase",
                  fontSize: "1.6rem", color: "#faf1e1", 
                  marginBottom: 10, fontWeight: 650,
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
