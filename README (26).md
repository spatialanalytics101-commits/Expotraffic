import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Tradeshow Booth Beauty Photography — Architectural & Detail',
  description:
    'Professional booth beauty photography for exhibitors. Architectural, detail, and crowd dynamics photography of your tradeshow booth for press kits, sponsor decks, and recap reels.',
  path: '/services/booth-beauty-photography',
  keywords: [
    'booth beauty photography',
    'tradeshow booth photographer',
    'exhibit photography Las Vegas',
    'tradeshow architecture photographer',
    'booth recap photography',
  ],
});

const FAQS = [
  {
    q: 'What does booth beauty photography include?',
    a: 'Wide establishing shots of the booth, architectural details and signage, product displays, interactive elements, crowd dynamics during peak hours, and hero hero shots for sponsor decks. Clean, empty-booth shots during setup pre-show are usually included.',
  },
  {
    q: 'When do you shoot — before, during, or after hours?',
    a: 'All three, typically. Pre-show setup captures the clean beauty shot. Live-show coverage captures brand activation and crowd. Post-show tear-down rarely — but we do occasionally shoot closing-day nostalgia pieces.',
  },
  {
    q: 'Do you shoot booths that aren\'t in Las Vegas?',
    a: 'Yes. We travel to any major convention city in the US — Orlando, Chicago, Atlanta, Anaheim, Austin, Boston, NYC.',
  },
];

export default function BoothBeautyPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Booth beauty photography', path: '/services/booth-beauty-photography' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Booth Beauty Photography',
            description: 'Architectural and detail photography of tradeshow booths for press, sponsors, and recap reels.',
            path: '/services/booth-beauty-photography',
            priceLow: 1500,
            priceHigh: 8500,
          }),
          faqSchema(FAQS),
        ]}
      />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <div className="mt-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="font-serif text-display-xl text-ink-900">
                Booth beauty <em className="italic text-amber-500">photography</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                Your booth cost $250,000 to build. Give it the photography it deserves. Architectural and detail shots that work for press kits, case studies, sponsor decks, and next year&rsquo;s pitch to your CMO.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-px border-y border-ink-900/10 bg-ink-900/10 md:grid-cols-3">
            {[
              ['Pre-show clean beauty', 'Your booth at its most pristine — before the crowd arrives. The image that ends up in sponsor pitch decks.'],
              ['Live crowd dynamics', 'The booth alive with attendees. The proof shot for ROI reports and year-over-year comparisons.'],
              ['Detail + activation shots', 'Close-ups of signage, interactive elements, screens, and branded experiences.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-ink-50 p-10">
                <h3 className="font-serif text-2xl text-ink-900">{t}</h3>
                <p className="mt-3 text-ink-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="Booth beauty photography — FAQ" />
      <CTABand headline="Your booth deserves the recap reel." />
    </>
  );
}
