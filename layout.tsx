import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'CES Headshots & Booth Photography — Las Vegas Exhibitor Guide',
  description:
    'Tradeshow headshot activation and booth photography for CES exhibitors at the Las Vegas Convention Center and Venetian Expo. Book 6-9 months in advance for prime booth dates.',
  path: '/events/ces-headshots',
  keywords: [
    'CES headshot photographer',
    'CES exhibitor photography',
    'CES tradeshow headshots',
    'CES Las Vegas photographer',
    'CES booth photography',
  ],
});

const FAQS = [
  {
    q: 'When should we book for CES?',
    a: 'No later than June for the following January. CES is the most over-subscribed photography market in the world — the best photographers and crew are fully booked by late summer.',
  },
  {
    q: 'Do you work across multiple CES venues?',
    a: 'Yes. CES sprawls across the LVCC (West, Central, North), Venetian Expo, Aria, and the ARIA hotel. We can run activations at multiple booth locations simultaneously with coordinated teams.',
  },
  {
    q: 'How many leads can we realistically capture at CES?',
    a: 'CES foot traffic is massive. A well-executed headshot activation at a Central Hall booth routinely captures 300–500 leads per day. Over the 4-day show that\'s 1,200–2,000 qualified leads — often exceeding the entire rest of the show circuit combined.',
  },
  {
    q: 'Do you handle Eureka Park startup exhibitors too?',
    a: 'Yes, we have a lower-cost package designed for startup-budget booths in Eureka Park that still captures real leads without eating six figures of marketing budget.',
  },
];

export default function CESPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'CES headshots', path: '/events/ces-headshots' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'CES Tradeshow Headshot Activation',
            description: 'On-site headshot activation and booth photography for CES exhibitors in Las Vegas.',
            path: '/events/ces-headshots',
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
                <em className="italic text-amber-500">CES</em> headshot photography.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                The biggest tech show on earth. 135,000+ attendees across four convention halls. If your booth investment is seven figures, your headshot activation is the difference between a forgotten brochure pile and 2,000 qualified leads.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Check CES availability <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">CES quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[88rem] gap-16 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-10">
          <div className="text-xs uppercase tracking-[0.3em] text-amber-500">CES playbook</div>
          <div className="max-w-prose-wide">
            <h2 className="font-serif text-display-lg text-ink-900">
              The math of a <em className="italic">CES booth</em>.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-700">
              <p>
                A Central Hall booth at CES is a $500K–$3M investment. The calculation that actually matters: cost per qualified lead. If your team has eight minutes of meaningful conversation with 400 attendees a day, you&rsquo;ve paid for the booth. If they spend the week handing out lanyards, you haven&rsquo;t.
              </p>
              <p>
                Our CES playbook is built around that math. We put two headshot stations inside a 20×30 booth, engineer a line that flows away from your sales area (not into it), and capture 1,500+ pre-qualified leads over four days — with your sales reps standing next to each prospect the entire wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">CES timeline</h2>
          <div className="mt-12 space-y-px border-y border-ink-900/10 bg-ink-900/10">
            {[
              ['June', 'Book your CES photographer. All reputable teams are gone by August.'],
              ['September', 'Finalize booth layout + headshot station placement with your exhibit house.'],
              ['October', 'Brand assets locked: email templates, SMS, overlay graphics, check-in form.'],
              ['December', 'Pre-production call. Confirm labor, load-in window, power drops.'],
              ['January (show)', 'Load in pre-show day. 2-hour studio setup. Doors open = line forms.'],
              ['Week after', 'Full lead export delivered, booth recap photography delivered, debrief.'],
            ].map(([when, what]) => (
              <div key={when} className="grid items-start gap-4 bg-ink-50 p-6 md:grid-cols-[200px_1fr] md:p-8">
                <div className="text-sm font-medium uppercase tracking-[0.15em] text-amber-500">{when}</div>
                <div className="text-ink-700">{what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQS} title="CES headshot activation — FAQ" />
      <CTABand
        headline="CES slots book out by summer. Don't wait."
        sub="Tell us your booth location and CES year — we'll confirm availability within 24 hours."
      />
    </>
  );
}
