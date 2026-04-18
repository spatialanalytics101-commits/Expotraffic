import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'MJBizCon Headshots & Booth Photography — Las Vegas Cannabis',
  description:
    'Tradeshow headshot activation and booth photography for MJBizCon exhibitors in Las Vegas. The cannabis industry\'s premier B2B event at the Las Vegas Convention Center.',
  path: '/events/mjbizcon-headshots',
  keywords: [
    'MJBizCon headshots',
    'MJBizCon photographer',
    'cannabis industry photographer',
    'MJBizCon Las Vegas',
    'cannabis tradeshow photography',
  ],
});

const FAQS = [
  {
    q: 'When should we book for MJBizCon?',
    a: 'August for a late-November/early-December show. MJBizCon has grown massively in recent years and booth and activation slots are increasingly competitive.',
  },
  {
    q: 'Any industry-specific considerations for cannabis exhibitors?',
    a: 'Yes — banking, advertising, and data compliance all work differently in cannabis. We handle lead-capture fields appropriately and deliver data in formats that work with cannabis-friendly CRMs.',
  },
  {
    q: 'Why does the cannabis industry need professional headshots?',
    a: 'As the industry matures, public-market pressure and institutional investment demand a more polished executive presence. Many cannabis professionals are still using early-stage selfies on LinkedIn — a free professional headshot at MJBizCon is often the first real step toward that polish.',
  },
];

export default function MJBizConPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'MJBizCon headshots', path: '/events/mjbizcon-headshots' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'MJBizCon Tradeshow Headshot Activation',
            description: 'On-site headshot activation and booth photography for MJBizCon exhibitors in Las Vegas.',
            path: '/events/mjbizcon-headshots',
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
                <em className="italic text-amber-500">MJBizCon</em> headshot photography.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                The cannabis industry&rsquo;s premier B2B event. 35,000+ operators, investors, cultivators, and ancillary-business decision-makers. As the industry professionalizes, headshot activations are becoming one of the most in-demand booth experiences at MJBizCon.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Check MJBizCon availability <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">MJBizCon quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="MJBizCon headshot activation — FAQ" />
      <CTABand headline="Exhibiting at MJBizCon? Own the B2B conversation." />
    </>
  );
}
