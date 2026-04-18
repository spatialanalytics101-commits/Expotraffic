import Link from 'next/link';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, ClientMarquee } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Las Vegas Convention Headshots — Venue-by-Venue Photography Guide',
  description:
    'Professional headshot activation and event photography at every major Las Vegas convention venue — LVCC, Venetian Expo, Mandalay Bay, Caesars Forum. Local expertise, union-savvy, booked year-round.',
  path: '/las-vegas',
  keywords: [
    'Las Vegas convention headshots',
    'Las Vegas convention photographer',
    'Las Vegas tradeshow photographer',
    'Las Vegas headshot photographer',
    'LVCC photographer',
  ],
});

const VENUES = [
  {
    name: 'Las Vegas Convention Center',
    slug: 'convention-center',
    desc: 'The 3.2 million sq ft flagship. Home to CES, NAB, SEMA, HIMSS, MJBizCon, and the largest tradeshows in North America.',
    showList: 'CES · NAB Show · SEMA · MJBizCon · HIMSS · AWS re:Invent',
  },
  {
    name: 'Venetian Expo',
    slug: 'venetian-expo',
    desc: 'Formerly Sands Expo. 2.25 million sq ft, connected to Venetian hotel. Mid-large tech and beauty industry shows.',
    showList: 'Adobe Summit · ISC West · Cosmoprof · Magic',
  },
  {
    name: 'Mandalay Bay Convention Center',
    slug: 'mandalay-bay',
    desc: '2.1 million sq ft. South Strip hub for medical, finance, and association conferences.',
    showList: 'RSA · Money20/20 · Dreamforce Dev · INBOUND satellite',
  },
  {
    name: 'Caesars Forum',
    slug: 'caesars-forum',
    desc: '550,000 sq ft modern conference center. Tech, crypto, and high-profile brand activations.',
    showList: 'World of Concrete · ASIS · Bitcoin Conference',
  },
];

export default function LasVegasHubPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Las Vegas', path: '/las-vegas' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <div className="mt-10 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="font-serif text-display-xl text-ink-900">
                Las Vegas convention <em className="italic text-amber-500">headshots</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                Las Vegas hosts 20,000+ conventions a year — more than any other city on earth. We&rsquo;ve set up headshot lounges in every major venue and worked every union rule on every show floor. If you&rsquo;re exhibiting in Vegas, this is the photography team you want on the ground.
              </p>
            </div>
            <div className="self-end">
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Why local matters</div>
                <ul className="mt-4 space-y-2 text-sm text-ink-700">
                  <li>— Union and load-in rules already mapped</li>
                  <li>— Relationships with venue AV and IT teams</li>
                  <li>— Zero travel fees, no flight delays</li>
                  <li>— Emergency next-morning availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display-lg text-ink-900">Every major venue</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {VENUES.map((v) => (
              <Link
                key={v.slug}
                href={`/las-vegas/${v.slug}`}
                className="group rounded-2xl border border-ink-900/10 bg-ink-50 p-8 transition-all hover:border-amber-500/50 hover:bg-ink-100/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-ink-900 group-hover:text-amber-600">{v.name}</h3>
                    <p className="mt-3 text-ink-600">{v.desc}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.15em] text-ink-500">{v.showList}</p>
                  </div>
                  <span aria-hidden="true" className="text-ink-400 group-hover:text-amber-500">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee heading="Seen in Vegas booths for" />
      <CTABand
        headline="Exhibiting in Las Vegas? Let's talk."
        sub="Tell us your venue, your show, and your dates — we'll check availability and send a production plan."
      />
    </>
  );
}
