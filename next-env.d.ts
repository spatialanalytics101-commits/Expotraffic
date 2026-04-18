import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, TestimonialGrid, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Conference Headshot Booth — Premium Attendee Experience',
  description:
    'Professional conference headshot booth for associations, medical, legal, and tech conferences. Coaching, retouching, instant delivery, and branded experience that drives higher attendance satisfaction.',
  path: '/services/conference-headshot-booth',
  keywords: [
    'conference headshot booth',
    'conference headshot photographer',
    'professional headshots at conference',
    'association conference photographer',
    'medical conference headshots',
  ],
});

const FAQS = [
  {
    q: 'How does a conference headshot booth differ from a tradeshow activation?',
    a: 'A tradeshow activation is sponsored by a single exhibitor and drives leads to their booth. A conference headshot booth is typically organized by the conference producer as a universal attendee perk — often included in VIP or all-access passes — and doesn\'t require a sponsor. Both use the same studio setup and delivery system.',
  },
  {
    q: 'Can we offer it as a sponsored VIP perk?',
    a: 'Yes — this is a growing model. We run the booth as a sponsored lounge where attendees receive their headshot co-branded with the sponsor\'s logo. It\'s an easy six-figure sponsorship sell because of the residual LinkedIn impressions.',
  },
  {
    q: 'What industries do you serve?',
    a: 'Medical and pharma (ACFE, PTTOW!), legal, technology (AWS Summit, Fal.con), finance, logistics (CSCMP), real estate, hospitality, and association conferences of every kind. The format works for any industry where headshots have professional value.',
  },
  {
    q: 'Do you handle speaker and panelist headshots?',
    a: 'Absolutely. We typically run a dedicated speaker/VIP window pre-conference or during breaks, with more time per person and premium retouching. Many conferences bundle this with keynote photography.',
  },
];

export default function ConferenceHeadshotBoothPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Conference headshot booth', path: '/services/conference-headshot-booth' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Conference Headshot Booth',
            description: 'Professional headshot booth for conferences — a premium attendee perk with branded experience and instant delivery.',
            path: '/services/conference-headshot-booth',
            priceLow: 6500,
            priceHigh: 35000,
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
                Conference headshot <em className="italic text-amber-500">booth</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                A premium attendee experience for associations, medical, legal, tech, and finance conferences. Professional headshots become the most-talked-about perk of your show — and a residual brand asset every attendee carries into the rest of their career.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
                <Link href="/services/tradeshow-headshot-activation" className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-3.5 text-sm font-medium text-ink-900 hover:border-amber-500 hover:text-amber-600">
                  Compare to tradeshow activation
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Quick quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Why attendees love it</div>
          <div className="max-w-prose-wide">
            <h2 className="font-serif text-display-lg text-ink-900">
              A perk your attendees will still be using in <em className="italic">three years</em>.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-700">
              <p>
                The single strongest predictor of attendee satisfaction is whether they leave with something they use. Printed schedules go in the trash. Tote bags get one airport run. A professional headshot stays on LinkedIn for the duration of someone&rsquo;s career.
              </p>
              <p>
                That&rsquo;s why our conference headshot booths routinely see 60–80% of attendees participate — and why sponsors pay premiums to brand them. Every time an attendee updates their profile over the next three years, your conference (and your sponsor) show up in their network&rsquo;s feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">Use cases</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ['Association membership perk', 'Bundle headshots into annual-meeting registration as a signature member benefit.'],
              ['VIP / all-access pass upgrade', 'A proven driver of ticket upgrades — drives ancillary revenue with no added production cost.'],
              ['Sponsored attendee lounge', 'Easy six-figure sponsorship sell with co-branded delivery emails and gallery.'],
              ['Speaker + panelist portraits', 'Premium headshots for your speaker roster, shot on-site with more time per person.'],
              ['Board + executive sessions', 'Dedicated executive session with advanced retouching for C-suite and keynote talent.'],
              ['Medical / CME events', 'Professional portraits for physician profiles, clinic websites, and journal submissions.'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-ink-900/10 bg-ink-50 p-6">
                <h3 className="font-serif text-xl text-ink-900">{t}</h3>
                <p className="mt-3 text-sm text-ink-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialGrid limit={3} />
      <FAQSection items={FAQS} title="Conference headshot booth — FAQ" />
      <CTABand headline="Make your next conference the one attendees won't stop talking about." />
    </>
  );
}
