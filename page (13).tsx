import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Las Vegas Convention Center Headshots & Photography',
  description:
    'Professional headshot activation and event photography at the Las Vegas Convention Center (LVCC). On-site studio, union-savvy load-in, real-time lead delivery for CES, NAB, SEMA, MJBizCon exhibitors.',
  path: '/las-vegas/convention-center',
  keywords: [
    'Las Vegas Convention Center photographer',
    'LVCC headshots',
    'LVCC tradeshow photographer',
    'CES photographer Las Vegas Convention Center',
    'headshot booth LVCC',
  ],
});

const FAQS = [
  {
    q: 'Which LVCC halls do you work?',
    a: 'All of them — West Hall, Central Hall, North Hall, and South Hall. We\'ve set up headshot lounges in every major exhibit hall and meeting room at the LVCC.',
  },
  {
    q: 'Do you handle LVCC union rules?',
    a: 'Yes. We\'re experienced with Teamsters Local 631 load-in, IATSE riggers, and Freeman/GES show-services coordination. We build the right labor into every quote so there are no surprises.',
  },
  {
    q: 'What\'s the earliest we can load in at the LVCC?',
    a: 'Depends on show rules. Typically we load in during the final day of exhibitor move-in, 12–24 hours before doors open. A 2-hour studio setup is our standard.',
  },
  {
    q: 'Which LVCC shows have you worked?',
    a: 'CES, NAB Show, SEMA, MJBizCon, HIMSS, AWS re:Invent, CONEXPO, Pack Expo, and many others. Most of our clients are repeat exhibitors at these shows.',
  },
];

export default function LVCCPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Las Vegas', path: '/las-vegas' },
    { name: 'Las Vegas Convention Center', path: '/las-vegas/convention-center' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Las Vegas Convention Center Photography',
            description: 'On-site headshot activation and event photography services at the Las Vegas Convention Center.',
            path: '/las-vegas/convention-center',
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
                Photography at the <em className="italic text-amber-500">Las Vegas Convention Center</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                3.2 million square feet. The biggest tradeshows in North America. More Fortune 500 exhibitor booths per year than anywhere else on earth. We know every hall, every union rule, and every show services contractor — and we&rsquo;ve been running headshot activations on this floor since 2009.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
                <Link href="/services/tradeshow-headshot-activation" className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-medium text-ink-900 hover:border-amber-500 hover:text-amber-600">
                  See tradeshow service
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">LVCC quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-amber-500">LVCC essentials</div>
          <div className="max-w-prose-wide">
            <h2 className="font-serif text-display-lg text-ink-900">
              Every hall. Every show. <em className="italic">Every year</em>.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-700">
              <p>
                The LVCC is the most complicated exhibition building in North America. West Hall alone is 600,000 sq ft with its own entrance, parking, and logistics. Shows like CES run concurrently across all four halls with different show services contractors, different union rules, and different AV providers.
              </p>
              <p>
                For an exhibitor trying to run a headshot activation inside that complexity, &ldquo;just find a photographer&rdquo; doesn&rsquo;t cut it. You need a team that already knows the move-in window for North Hall vs South Hall, who to call at Freeman for rigging approval, and what the power drop lead time is this year. That&rsquo;s us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">Shows we cover at LVCC</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['CES', 'January', 'West & Central Hall'],
              ['NAB Show', 'April', 'Central & North Hall'],
              ['SEMA', 'November', 'All halls'],
              ['MJBizCon', 'November/December', 'West & South Hall'],
              ['HIMSS', 'March', 'West Hall'],
              ['AWS re:Invent', 'November/December', 'Venetian + LVCC'],
              ['CONEXPO-CON/AGG', 'March (triennial)', 'All halls + lots'],
              ['Pack Expo Las Vegas', 'September', 'Central Hall'],
              ['World of Concrete', 'January', 'Caesars Forum + LVCC'],
            ].map(([show, month, halls]) => (
              <div key={show} className="rounded-xl border border-ink-900/10 bg-ink-50 p-6">
                <h3 className="font-serif text-xl text-ink-900">{show}</h3>
                <div className="mt-2 text-xs uppercase tracking-[0.15em] text-amber-500">{month}</div>
                <div className="mt-1 text-sm text-ink-600">{halls}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-ink-600">
            Exhibiting at a show not listed? We cover 100+ LVCC shows a year. <Link href="/contact" className="text-amber-600 underline underline-offset-4">Get in touch</Link> and we&rsquo;ll confirm availability.
          </p>
        </div>
      </section>

      <FAQSection items={FAQS} title="LVCC photography — FAQ" />
      <CTABand headline="Exhibiting at the LVCC? Book early." />
    </>
  );
}
