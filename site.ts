import Link from 'next/link';
import { buildMetadata, serviceSchema, reviewSchema, faqSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { ClientMarquee, StatsRow, TestimonialGrid, CTABand, FAQSection, ServiceCard } from '@/components/UI';
import { TESTIMONIALS } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Tradeshow Headshot Activation & Las Vegas Event Photography',
  description:
    'ExpoTraffic runs the #1 headshot activation for tradeshow booths in Las Vegas. Generate 250+ qualified leads per day, the longest lines on the floor, and 25% more dwell time. Trusted by LinkedIn, IBM, Amazon, AWS & SAP.',
  path: '/',
  keywords: [
    'tradeshow headshot booth',
    'headshot activation',
    'Las Vegas headshot photographer',
    'trade show booth traffic generator',
    'conference headshot photographer Las Vegas',
    'expo lead generation',
  ],
});

const FAQS = [
  {
    q: 'What is a tradeshow headshot activation?',
    a: 'A headshot activation is a branded, on-site professional photo studio set up inside your tradeshow booth. Our photographers shoot, retouch, and deliver high-quality headshots to each attendee within seconds. In exchange, you capture their data — generating 250+ qualified leads per day while your sales team holds 10-90 minute conversations with prospects who happily wait in line.',
  },
  {
    q: 'How many leads can we expect per day?',
    a: 'A single-station headshot lounge reliably captures about 250 unique leads every 8-hour tradeshow day, or roughly 700 leads across a 2.5-day show. With multiple stations or anchor-sponsor booths, we\'ve produced 4x year-over-year lead volume for clients like AWS.',
  },
  {
    q: 'Do you travel outside Las Vegas?',
    a: 'Yes. We\'re based in Las Vegas and deploy anywhere in the continental US — Anaheim, Orlando, Chicago, Atlanta, Austin, Boston, and anywhere planes fly. Las Vegas Convention Center, Venetian Expo, Mandalay Bay, Caesars Forum, and Javits Center are home ground.',
  },
  {
    q: 'Who hires the ExpoTraffic headshot lounge?',
    a: 'Typically expo producers (who then resell to a sponsor), anchor exhibitors, or brands running SKOs and user conferences. Past clients include LinkedIn, IBM, Amazon, AWS, CrowdStrike, Dell-EMC, SAP, Pepsi, Toyota, Kia, TravelZoo, Saatchi & Saatchi, and Uber.',
  },
  {
    q: 'What does a headshot activation cost?',
    a: 'Pricing scales with show length, number of stations, and retouching volume. Typical 2-3 day activations start in the low five figures and include photography, real-time retouching, branded delivery, lead data capture, and full on-site staffing. See our pricing page for full detail.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: 'Tradeshow Headshot Activation',
            description: 'Las Vegas-based professional headshot lounge deployed inside your tradeshow booth to capture 250+ qualified leads per day.',
            path: '/',
            priceLow: 8500,
            priceHigh: 45000,
          }),
          faqSchema(FAQS),
          ...reviewSchema(TESTIMONIALS.map((t) => ({ author: t.author, role: t.role, company: t.company, quote: t.quote }))),
        ]}
      />

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-ink-50">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="stagger max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-ink-100/50 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Las Vegas · Since 2009
            </div>

            <h1 className="mt-8 font-serif text-display-xl font-medium tracking-tight text-ink-900">
              The busiest booth on the <em className="font-serif italic text-amber-500">tradeshow</em> floor.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700">
              ExpoTraffic builds the headshot activation that turns your tradeshow booth into a lead-generation powerhouse. <strong className="font-medium text-ink-900">250+ qualified leads per day</strong>, the longest lines on the expo floor, and a <strong className="font-medium text-ink-900">25% uplift in dwell time</strong> — proven across CES, NAB, SEMA, AWS re:Invent and hundreds of Las Vegas conventions.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 transition-all hover:bg-amber-500"
              >
                Get a quote <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/services/tradeshow-headshot-activation"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-medium text-ink-900 transition-all hover:border-amber-500 hover:text-amber-600"
              >
                See how it works
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-ink-200">
              <div
                aria-label="Headshot lounge setup at a busy Las Vegas tradeshow"
                role="img"
                className="grain h-full w-full bg-gradient-to-br from-ink-600 via-ink-700 to-ink-900"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, rgba(194,118,31,0.15), rgba(11,9,7,0.7)), url(https://cdn.goodgallery.com/0d329b57-22aa-46a4-914f-21773566390d/r/0800/2oxpyl3n/hy4msalxevg.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-ink-900/10 bg-ink-50 px-6 py-4 shadow-lg shadow-ink-900/5 lg:-left-10">
              <div className="text-xs uppercase tracking-[0.2em] text-amber-500">AWS Fal.con</div>
              <div className="mt-1 font-serif text-xl text-ink-900">&ldquo;4× leads vs. last year.&rdquo;</div>
            </div>
          </aside>
        </div>
      </section>

      <StatsRow />
      <ClientMarquee />

      {/* ========== SERVICES ========== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Services</div>
              <h2 className="mt-4 font-serif text-display-lg text-ink-900">
                High-volume photography, built for <em className="italic">Las Vegas conventions</em>.
              </h2>
            </div>
            <Link href="/services" className="link-slide text-sm font-medium text-ink-900">
              All services →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              eyebrow="Signature service"
              title="Tradeshow headshot activation"
              description="The flagship lead-generation booth attraction. Real-time delivery, branded galleries, data capture, 250+ leads/day."
              href="/services/tradeshow-headshot-activation"
              keywords="tradeshow headshot booth"
            />
            <ServiceCard
              eyebrow="Conferences"
              title="Conference headshot booth"
              description="For associations, medical, legal and tech conferences. Premium attendee perk with branded experience and instant sharing."
              href="/services/conference-headshot-booth"
              keywords="conference headshots"
            />
            <ServiceCard
              eyebrow="Corporate"
              title="SKO sales kickoff headshots"
              description="Synchronize your entire sales team's LinkedIn presence in one day. On-site studio, retouching, consistent style."
              href="/services/sko-sales-kickoff-headshots"
              keywords="SKO headshots"
            />
            <ServiceCard
              eyebrow="Coverage"
              title="Event photography"
              description="Full-convention coverage: keynotes, breakout sessions, networking, booth beauty shots. Near real-time delivery."
              href="/services/event-photography"
              keywords="Las Vegas event photography"
            />
            <ServiceCard
              eyebrow="Exhibitors"
              title="Booth beauty photography"
              description="Architectural and detail photography of your tradeshow booth for press, sponsors, case studies, and recap reels."
              href="/services/booth-beauty-photography"
              keywords="tradeshow booth photographer"
            />
            <ServiceCard
              eyebrow="Portraits"
              title="Corporate headshots Las Vegas"
              description="In-office or at-your-event executive and team headshots. Consistent studio-quality lighting wherever you are."
              href="/services/corporate-headshots"
              keywords="Las Vegas corporate headshots"
            />
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="border-t border-ink-900/10 bg-ink-100/40 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.3em] text-amber-500">How it works</div>
            <h2 className="mt-4 font-serif text-display-lg text-ink-900">
              Four moves that turn your booth into the <em className="italic">best booth</em> at the show.
            </h2>
          </div>

          <ol className="grid gap-12 lg:grid-cols-4">
            {[
              { n: '01', t: 'Plan & pre-market', d: 'We scope stations, staffing, backdrops, and lead-capture fields. Branded assets go out to your sales team 30 days before the show.' },
              { n: '02', t: 'On-site activation', d: 'A-team photographers shoot, coach, and retouch on-site. Your sales reps stand in the line — closing deals while attendees wait.' },
              { n: '03', t: 'Instant delivery', d: 'Each attendee receives a branded email and SMS with their retouched headshot within 60 seconds. Every image is lead-captured.' },
              { n: '04', t: 'Post-show data', d: 'Full lead export, CRM-ready, with custom fields. Measurable ROI — not a tote bag in a trash can.' },
            ].map((s) => (
              <li key={s.n} className="relative">
                <div className="font-serif text-sm text-amber-500">{s.n}</div>
                <h3 className="mt-3 font-serif text-2xl text-ink-900">{s.t}</h3>
                <p className="mt-3 text-ink-600">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialGrid />

      {/* ========== LAS VEGAS + EVENTS SHORTCUTS ========== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <article>
            <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Las Vegas venues</div>
            <h2 className="mt-4 font-serif text-display text-ink-900">
              We know every convention floor in <em className="italic">Vegas</em>.
            </h2>
            <p className="mt-5 max-w-lg text-ink-600">
              From LVCC West Hall to Caesars Forum, we&rsquo;ve set up headshot lounges in every major Vegas venue. Venue-specific logistics, union rules, and load-in timing — handled.
            </p>
            <ul className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {[
                ['Las Vegas Convention Center', '/las-vegas/convention-center'],
                ['Venetian Expo', '/las-vegas/venetian-expo'],
                ['Mandalay Bay', '/las-vegas/mandalay-bay'],
                ['Caesars Forum', '/las-vegas/caesars-forum'],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center justify-between py-4 text-ink-900 hover:text-amber-600">
                    <span className="font-serif text-xl">{name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Major shows</div>
            <h2 className="mt-4 font-serif text-display text-ink-900">
              Headshot activations at the shows that <em className="italic">matter</em>.
            </h2>
            <p className="mt-5 max-w-lg text-ink-600">
              Exhibiting at CES, NAB, SEMA, or MJBizCon? We&rsquo;ve worked every floor. Book 6+ months out to secure prime booth dates.
            </p>
            <ul className="mt-8 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {[
                ['CES headshots', '/events/ces-headshots'],
                ['NAB Show headshots', '/events/nab-show-headshots'],
                ['SEMA headshots', '/events/sema-headshots'],
                ['MJBizCon headshots', '/events/mjbizcon-headshots'],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="flex items-center justify-between py-4 text-ink-900 hover:text-amber-600">
                    <span className="font-serif text-xl">{name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <FAQSection items={FAQS} />
      <CTABand />
    </>
  );
}
