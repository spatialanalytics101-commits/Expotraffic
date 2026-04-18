import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'NAB Show Headshots & Booth Photography — Las Vegas',
  description:
    'Tradeshow headshot activation and booth photography for NAB Show exhibitors at the Las Vegas Convention Center. Broadcast, media, and entertainment technology exhibitors.',
  path: '/events/nab-show-headshots',
  keywords: [
    'NAB Show headshots',
    'NAB Show photographer',
    'NAB exhibitor photography',
    'broadcast industry conference photographer',
    'NAB tradeshow booth',
  ],
});

const FAQS = [
  {
    q: 'When should we book for NAB Show?',
    a: 'December for the following April. NAB is smaller than CES but the top photography teams still fill up 3–4 months ahead.',
  },
  {
    q: 'Which NAB halls do you work?',
    a: 'All of them — NAB primarily uses West Hall and Central Hall at the LVCC, with some overflow into North Hall.',
  },
  {
    q: 'Do many broadcast industry exhibitors run headshot booths?',
    a: 'Yes, and it\'s growing. The broadcast and media industry values professional personal branding and LinkedIn presence especially highly. Headshot activations consistently outperform demo reels as lead-capture tools.',
  },
];

export default function NABPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'NAB Show headshots', path: '/events/nab-show-headshots' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'NAB Show Tradeshow Headshot Activation',
            description: 'On-site headshot activation and booth photography for NAB Show exhibitors in Las Vegas.',
            path: '/events/nab-show-headshots',
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
                <em className="italic text-amber-500">NAB Show</em> headshot photography.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                65,000+ broadcast, media, and entertainment-tech professionals under one roof every April. The headshot lounge is a perfect fit for this audience — everyone here lives on LinkedIn.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Check NAB availability <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">NAB quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Why NAB</div>
          <div className="max-w-prose-wide">
            <h2 className="font-serif text-display-lg text-ink-900">
              Broadcast professionals actually <em className="italic">care</em> about their headshots.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-700">
              <p>
                On-air talent, camera crew, post-production professionals, producers, engineers — this is an industry where your face is your resume. A free professional headshot at NAB Show isn&rsquo;t a gimmick, it&rsquo;s a genuinely high-value offering that the crowd lines up for.
              </p>
              <p>
                That&rsquo;s why we consistently see higher-than-average capture rates at NAB: 60–70% of booth visitors get photographed (vs 30–40% at consumer shows). Which means higher-than-average leads per booth square foot.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="NAB Show — FAQ" />
      <CTABand headline="Exhibiting at NAB Show? Let's make your booth the one everyone visits." />
    </>
  );
}
