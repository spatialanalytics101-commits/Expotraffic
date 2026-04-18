import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'SEMA Headshots & Booth Photography — Las Vegas Auto Industry',
  description:
    'Tradeshow headshot activation and booth photography for SEMA exhibitors. Automotive aftermarket industry\'s biggest show, held annually in Las Vegas.',
  path: '/events/sema-headshots',
  keywords: [
    'SEMA headshots',
    'SEMA photographer',
    'SEMA exhibitor photography',
    'automotive tradeshow photographer',
    'SEMA Las Vegas headshots',
  ],
});

const FAQS = [
  {
    q: 'When should we book for SEMA?',
    a: 'SEMA is late October/November, so aim to book by July. Most automotive exhibitors finalize their booth plan late relative to CES, so you may still have availability into summer.',
  },
  {
    q: 'Do you shoot the vehicles and product displays too?',
    a: 'Yes — we\'ll add booth beauty and product photography on top of the headshot activation so you get hero imagery for press kits, dealer materials, and next year\'s marketing.',
  },
  {
    q: 'What\'s SEMA\'s lead-capture culture?',
    a: 'SEMA leans B2B industrial, not consumer. Your target attendee is a buyer, a dealer, or a distributor — exactly the audience that benefits from a professional headshot on LinkedIn. Capture rates at our SEMA activations routinely hit 50%+.',
  },
];

export default function SEMAPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'SEMA headshots', path: '/events/sema-headshots' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'SEMA Tradeshow Headshot Activation',
            description: 'On-site headshot activation and booth photography for SEMA exhibitors in Las Vegas.',
            path: '/events/sema-headshots',
          }),
          faqSchema(FAQS),
        ]}
      />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <div className="mt-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <h1 className="font-serif text-display-xl text-ink-900">
                <em className="italic text-amber-500">SEMA</em> headshot photography.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                The automotive aftermarket industry&rsquo;s biggest week. 160,000+ dealers, buyers, influencers, and product directors across every hall at the LVCC. A headshot lounge turns your booth into the single most popular stop at SEMA.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Check SEMA availability <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">SEMA quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="SEMA headshot activation — FAQ" />
      <CTABand headline="Exhibiting at SEMA? Capture every dealer that walks past." />
    </>
  );
}
