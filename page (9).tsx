import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Venetian Expo Headshots & Photography — Las Vegas',
  description:
    'Professional headshot activation and event photography at the Venetian Expo (formerly Sands Expo) in Las Vegas. For exhibitors at Adobe Summit, ISC West, Cosmoprof, Magic, and AWS re:Invent.',
  path: '/las-vegas/venetian-expo',
  keywords: [
    'Venetian Expo photographer',
    'Sands Expo headshots',
    'Venetian Expo tradeshow photographer',
    'Adobe Summit photographer',
    'headshot booth Venetian',
  ],
});

const FAQS = [
  {
    q: 'Is Venetian Expo the same as Sands Expo?',
    a: 'Yes — Venetian Expo is the current name for what used to be the Sands Expo. It\'s physically connected to the Venetian and Palazzo hotels with 2.25 million sq ft of exhibit space.',
  },
  {
    q: 'What shows have you worked at Venetian Expo?',
    a: 'Adobe Summit, ISC West, Cosmoprof, Magic Las Vegas, Licensing Expo, Hospitality Design, AWS re:Invent (satellite), and numerous tech and beauty industry conferences.',
  },
  {
    q: 'Is the load-in easier than LVCC?',
    a: 'Usually yes — Venetian Expo has more accessible dock bays and simpler logistics than the LVCC\'s sprawling halls. That said, show-services rules still apply and we build appropriate labor into every quote.',
  },
];

export default function VenetianExpoPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Las Vegas', path: '/las-vegas' },
    { name: 'Venetian Expo', path: '/las-vegas/venetian-expo' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Venetian Expo Photography',
            description: 'On-site headshot activation and event photography at the Venetian Expo in Las Vegas.',
            path: '/las-vegas/venetian-expo',
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
                Photography at the <em className="italic text-amber-500">Venetian Expo</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                2.25 million square feet of premium exhibit space, connected directly to the Venetian and Palazzo. Home to Adobe Summit, ISC West, Cosmoprof, Magic, and Licensing Expo. We&rsquo;ve run headshot activations across every ballroom and meeting room in the complex.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Venetian quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">Shows we cover at Venetian Expo</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['Adobe Summit', 'March', 'Digital marketing'],
              ['ISC West', 'March/April', 'Security industry'],
              ['Cosmoprof North America', 'July', 'Beauty industry'],
              ['Magic Las Vegas', 'February/August', 'Fashion trade'],
              ['Licensing Expo', 'May', 'Brand licensing'],
              ['Hospitality Design Expo', 'May', 'Hospitality design'],
            ].map(([show, month, industry]) => (
              <div key={show} className="rounded-xl border border-ink-900/10 bg-ink-50 p-6">
                <h3 className="font-serif text-xl text-ink-900">{show}</h3>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-amber-500">{month}</div>
                <div className="mt-1 text-sm text-ink-600">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="Venetian Expo photography — FAQ" />
      <CTABand headline="Exhibiting at the Venetian? Let's talk." />
    </>
  );
}
