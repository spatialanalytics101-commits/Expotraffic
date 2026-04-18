import Link from 'next/link';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, TestimonialGrid } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Portfolio — Tradeshow, Event & Corporate Photography Las Vegas',
  description:
    'A selection of ExpoTraffic tradeshow headshot activations, event photography, and corporate shoots from CES, NAB, SEMA, AWS re:Invent, Fal.con, and more.',
  path: '/portfolio',
  keywords: [
    'ExpoTraffic portfolio',
    'Las Vegas tradeshow photography portfolio',
    'CES booth photography',
    'headshot activation examples',
  ],
});

const CASE_STUDIES = [
  {
    brand: 'AWS',
    show: 'Fal.con (CrowdStrike)',
    result: '4× year-over-year leads',
    desc: 'Four-day activation inside the AWS booth at Fal.con. Line from open to close every day; lead goals smashed.',
  },
  {
    brand: 'LinkedIn',
    show: 'Brand event',
    result: 'Activation of the night',
    desc: 'LinkedIn\'s own team hired us. Kelly Kyer called the attendees "thrilled with their headshots".',
  },
  {
    brand: 'PPD Biotech',
    show: 'Industry conference',
    result: 'Hundreds of booth visits',
    desc: 'Line always around the corner. Carrie Gable called it "remarkable in so many ways".',
  },
  {
    brand: 'EVIDERA',
    show: 'Medical convention',
    result: 'Booth of the convention',
    desc: 'Alex Gant, Senior Marketing Manager: "the booth was the talk of the convention".',
  },
  {
    brand: 'TravelZoo',
    show: 'Industry event',
    result: 'Conversation catalyst',
    desc: 'Sales Manager Courtney Bryan said the instantaneous social sharing was perfect for starting conversations.',
  },
  {
    brand: 'Arival',
    show: 'Travel industry conference',
    result: '25% booth traffic uplift',
    desc: 'Booth visits up 25% with the headshot lounge vs prior years\' giveaway-only approach.',
  },
];

export default function PortfolioPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <h1 className="mt-10 font-serif text-display-xl text-ink-900">
            Work that <em className="italic text-amber-500">moved</em> the number.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-700">
            A selection of recent tradeshow headshot activations, conference booths, SKO days, and brand activations. Every project is measured by leads, dwell time, and ROI — not vibes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((c) => (
              <article key={`${c.brand}-${c.show}`} className="rounded-2xl border border-ink-900/10 bg-ink-50 p-8">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-ink-600 to-ink-900 grain" />
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-amber-500">{c.show}</div>
                  <h2 className="mt-2 font-serif text-2xl text-ink-900">{c.brand}</h2>
                  <div className="mt-4 font-serif text-xl italic text-amber-600">{c.result}</div>
                  <p className="mt-3 text-sm text-ink-600">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TestimonialGrid />

      <CTABand
        headline="Your show could be in this portfolio next year."
        primary={{ label: 'Request a quote', href: '/contact' }}
        secondary={{ label: 'See services', href: '/services' }}
      />
    </>
  );
}
