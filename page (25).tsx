import Link from 'next/link';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Tradeshow Headshot Photographers — CES, NAB, SEMA, MJBizCon',
  description:
    'On-site headshot activation and event photography for exhibitors at the biggest tradeshows in Las Vegas — CES, NAB Show, SEMA, MJBizCon, AWS re:Invent, and more.',
  path: '/events',
  keywords: [
    'CES headshot photographer',
    'NAB Show headshots',
    'SEMA headshots',
    'MJBizCon headshots',
    'Las Vegas tradeshow photographer',
  ],
});

const EVENTS = [
  { name: 'CES', href: '/events/ces-headshots', when: 'January annually', size: '135,000+ attendees', desc: 'The consumer electronics industry. The biggest tech show on earth.' },
  { name: 'NAB Show', href: '/events/nab-show-headshots', when: 'April annually', size: '65,000+ attendees', desc: 'Broadcast, media, and entertainment technology.' },
  { name: 'SEMA', href: '/events/sema-headshots', when: 'November annually', size: '160,000+ attendees', desc: 'Automotive aftermarket industry.' },
  { name: 'MJBizCon', href: '/events/mjbizcon-headshots', when: 'November/December', size: '35,000+ attendees', desc: 'The cannabis industry\'s premier B2B event.' },
];

export default function EventsHubPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <h1 className="mt-10 font-serif text-display-xl text-ink-900">
            Headshot activations for the <em className="italic text-amber-500">biggest shows</em>.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-700">
            When you&rsquo;re spending six or seven figures on a booth at CES, NAB, SEMA, or MJBizCon, you don&rsquo;t want a stock photographer. You want a team that&rsquo;s worked that specific show floor before and knows what it takes to stand out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {EVENTS.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group rounded-2xl border border-ink-900/10 bg-ink-50 p-8 transition-all hover:border-amber-500/50 hover:bg-ink-100/40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-serif text-3xl text-ink-900 group-hover:text-amber-600">{e.name}</h2>
                    <p className="mt-3 text-ink-600">{e.desc}</p>
                    <div className="mt-5 flex gap-6 text-xs uppercase tracking-[0.15em] text-ink-500">
                      <span>{e.when}</span>
                      <span>{e.size}</span>
                    </div>
                  </div>
                  <span aria-hidden="true" className="text-ink-400 group-hover:text-amber-500">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Exhibiting at a show not listed? We cover hundreds." />
    </>
  );
}
