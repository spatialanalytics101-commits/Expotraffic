import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Caesars Forum Headshots & Photography — Las Vegas',
  description:
    'Professional headshot activation and event photography at Caesars Forum. For exhibitors at World of Concrete, ASIS, Bitcoin Conference, and modern high-profile brand activations.',
  path: '/las-vegas/caesars-forum',
  keywords: [
    'Caesars Forum photographer',
    'Caesars Forum headshots',
    'World of Concrete photographer',
    'Bitcoin Conference photographer',
    'Caesars Forum tradeshow',
  ],
});

const FAQS = [
  {
    q: 'Which shows have you worked at Caesars Forum?',
    a: 'World of Concrete (partial), ASIS International, Bitcoin Conference, Money20/20 satellite, and various premium brand activations and corporate summits.',
  },
  {
    q: 'How does Caesars Forum differ from LVCC?',
    a: 'Caesars Forum is much newer (opened 2020), more compact at 550,000 sq ft, and designed for modern conferences rather than massive tradeshows. More premium aesthetic, better natural light, and much faster load-in.',
  },
  {
    q: 'Is the modern design a good fit for headshot booths?',
    a: 'Excellent. The clean architecture and high ceilings give us creative flexibility with lighting. We can use ambient window light or full studio setups depending on your brand aesthetic.',
  },
];

export default function CaesarsForumPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Las Vegas', path: '/las-vegas' },
    { name: 'Caesars Forum', path: '/las-vegas/caesars-forum' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Caesars Forum Photography',
            description: 'On-site headshot activation and event photography at Caesars Forum in Las Vegas.',
            path: '/las-vegas/caesars-forum',
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
                Photography at <em className="italic text-amber-500">Caesars Forum</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                550,000 square feet of Vegas&rsquo;s newest conference venue. Clean modern architecture, the largest pillarless ballroom in North America, and the go-to destination for premium tech, crypto, and brand activations. We love this building.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Caesars Forum quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">Shows we cover at Caesars Forum</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['World of Concrete', 'January', 'Construction'],
              ['ASIS GSX', 'September', 'Security'],
              ['Bitcoin Conference', 'July', 'Crypto / tech'],
              ['Consensus', 'May', 'Blockchain'],
              ['Corporate summits', 'Year-round', 'Enterprise'],
              ['Brand activations', 'Year-round', 'Experiential marketing'],
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

      <FAQSection items={FAQS} title="Caesars Forum photography — FAQ" />
      <CTABand headline="Exhibiting at Caesars Forum? Let's build something premium." />
    </>
  );
}
