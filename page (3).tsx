import Link from 'next/link';
import { buildMetadata, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Pricing — Tradeshow Headshot Activation & Event Photography',
  description:
    'Pricing for tradeshow headshot activations, SKO headshots, conference headshot booths, event photography, and corporate headshots in Las Vegas. Transparent packages, custom quotes.',
  path: '/pricing',
  keywords: [
    'tradeshow headshot activation pricing',
    'headshot booth pricing',
    'Las Vegas event photography pricing',
    'SKO headshot cost',
    'conference headshot booth cost',
  ],
});

const FAQS = [
  {
    q: 'Why don\'t you list fixed prices on the site?',
    a: 'Because every engagement is meaningfully different. A 4-day single-station activation at CES is priced differently from a 1-day SKO in a hotel suite. We give you a firm written quote within 24 hours of an intro call — no surprises after.',
  },
  {
    q: 'What\'s typically included in a quote?',
    a: 'All photographers and retouchers on-site, full studio-strobe lighting rig, backdrops, branded delivery software, check-in iPads, real-time email + SMS delivery, post-show lead CSV, travel within Vegas, and setup/teardown labor.',
  },
  {
    q: 'Are there extras we should budget for?',
    a: 'Out-of-Vegas travel (if applicable), custom overlay graphics design, CRM integration work beyond standard export, additional stations beyond the base package, and show-services labor (rigging, drayage) that\'s billed by the venue directly.',
  },
  {
    q: 'Do you offer multi-show discounts?',
    a: 'Yes — clients who book 3+ events with us in a calendar year get preferred pricing and priority scheduling for CES, NAB, and other peak-season shows.',
  },
];

const PACKAGES = [
  {
    tier: 'Tradeshow headshot activation',
    range: 'From $8,500',
    best: 'Best for booth traffic + leads',
    includes: [
      '1–4 headshot stations',
      'Full A-team on-site photographers',
      'Branded email + SMS delivery',
      'Full lead data capture',
      'CSV / CRM export',
      'Post-show booth recap gallery',
    ],
    cta: { label: 'Quote my tradeshow', href: '/services/tradeshow-headshot-activation' },
  },
  {
    tier: 'SKO sales kickoff',
    range: 'From $4,500',
    best: 'Best for unified team photos',
    includes: [
      '150–800 headshots in one day',
      'QR-code scheduling',
      'Brand-matched retouching',
      '60-second individual delivery',
      'HR-ready final gallery',
      'Multiple backdrop options',
    ],
    cta: { label: 'Quote my SKO', href: '/services/sko-sales-kickoff-headshots' },
    featured: true,
  },
  {
    tier: 'Event photography',
    range: 'From $3,500',
    best: 'Best for full convention coverage',
    includes: [
      'Keynote + breakout coverage',
      'Networking + reception candids',
      'Near real-time delivery',
      'On-site editor pushing to Dropbox',
      'Final gallery within 48 hours',
      'Press-ready hero shot selects',
    ],
    cta: { label: 'Quote my event', href: '/services/event-photography' },
  },
];

export default function PricingPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <>
      <JsonLd data={[breadcrumbSchema(trail), faqSchema(FAQS)]} />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <div className="mt-10 max-w-3xl">
            <h1 className="font-serif text-display-xl text-ink-900">
              Pricing <em className="italic text-amber-500">starting points</em>.
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-ink-700">
              Every engagement is custom-quoted. These are the starting points for the three main service lines — tell us your show, team size, and dates and we&rsquo;ll send a firm quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.tier}
                className={`flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? 'border-amber-500 bg-ink-50 ring-2 ring-amber-500/40'
                    : 'border-ink-900/10 bg-ink-50'
                }`}
              >
                <div>
                  {p.featured && (
                    <div className="mb-4 inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-900">
                      Most popular
                    </div>
                  )}
                  <h2 className="font-serif text-2xl text-ink-900">{p.tier}</h2>
                  <div className="mt-3 font-serif text-4xl text-ink-900">{p.range}</div>
                  <div className="mt-2 text-sm text-ink-500">{p.best}</div>
                </div>
                <ul className="mt-8 flex-1 space-y-3 border-t border-ink-900/10 pt-6 text-sm text-ink-700">
                  {p.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 text-amber-500">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={p.cta.href}
                    className="inline-flex w-full items-center justify-between rounded-full border border-ink-900/20 px-6 py-3 text-sm font-medium text-ink-900 hover:border-amber-500 hover:text-amber-600"
                  >
                    {p.cta.label} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">À la carte add-ons</h2>
          <div className="mt-12 grid gap-px border-y border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Additional photography station', 'From $3,500', 'Add capacity for busier booths and longer shows.'],
              ['Custom overlay graphics design', 'From $1,200', 'Branded frame, logo lockup, and typography tailored to your brand.'],
              ['Booth beauty photography', 'From $1,500', 'Architectural and detail shots of your booth for press + recap.'],
              ['Video content', 'From $2,500', 'Timelapse of your activation, client testimonials, social recap reels.'],
              ['CRM integration', 'From $1,500', 'Direct push of lead data to Salesforce, HubSpot, Marketo.'],
              ['Premium retouching', 'From $25/image', 'Advanced skin, teeth whitening, and detail retouch for VIPs.'],
            ].map(([t, p, d]) => (
              <div key={t} className="bg-ink-50 p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl text-ink-900">{t}</h3>
                  <div className="text-sm font-medium text-amber-600">{p}</div>
                </div>
                <p className="mt-3 text-sm text-ink-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="Pricing — FAQ" />
      <CTABand
        headline="Tell us your show. We'll send a firm quote in 24 hours."
        primary={{ label: 'Request quote', href: '/contact' }}
        secondary={{ label: 'See services', href: '/services' }}
      />
    </>
  );
}
