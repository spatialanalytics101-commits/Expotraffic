import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, ServiceCard, CTABand, ClientMarquee } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Photography Services — Las Vegas Tradeshow, Event & Corporate',
  description:
    'Full-service Las Vegas photography for tradeshows and corporate events: headshot activation, conference headshot booth, SKO headshots, event photography, booth beauty, food, and portraits.',
  path: '/services',
  keywords: [
    'Las Vegas photography services',
    'tradeshow photography',
    'corporate event photography Las Vegas',
    'conference headshots',
  ],
});

const SERVICES = [
  {
    title: 'Tradeshow headshot activation',
    href: '/services/tradeshow-headshot-activation',
    description: 'The flagship lead-generation booth activation. Real-time delivery, branded galleries, 250+ leads per day.',
    eyebrow: 'Signature',
    keywords: 'tradeshow headshot booth',
  },
  {
    title: 'Conference headshot booth',
    href: '/services/conference-headshot-booth',
    description: 'Premium attendee perk for associations, medical, legal, and tech conferences. Branded and instant.',
    eyebrow: 'Conferences',
    keywords: 'conference headshot booth',
  },
  {
    title: 'SKO sales kickoff headshots',
    href: '/services/sko-sales-kickoff-headshots',
    description: 'Synchronize your entire sales team\'s LinkedIn presence in a single day with consistent, on-brand headshots.',
    eyebrow: 'Corporate',
    keywords: 'SKO headshots',
  },
  {
    title: 'Corporate headshots Las Vegas',
    href: '/services/corporate-headshots',
    description: 'Executive, team, and employee headshots — in your office, our studio, or on location in Las Vegas.',
    eyebrow: 'Portraits',
    keywords: 'corporate headshots Las Vegas',
  },
  {
    title: 'Event photography',
    href: '/services/event-photography',
    description: 'Full convention coverage: keynotes, breakouts, networking, activations. Near-real-time editing.',
    eyebrow: 'Coverage',
    keywords: 'Las Vegas event photography',
  },
  {
    title: 'Booth beauty photography',
    href: '/services/booth-beauty-photography',
    description: 'Architectural and detail photography of your tradeshow booth for press kits, case studies, recaps.',
    eyebrow: 'Exhibitors',
    keywords: 'booth photographer',
  },
  {
    title: 'Food photography',
    href: '/services/food-photography',
    description: 'Menu, social, and brand photography for restaurants, delivery services, and hospitality in Las Vegas.',
    eyebrow: 'Hospitality',
    keywords: 'Las Vegas food photographer',
  },
];

export default function ServicesPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="bg-ink-50 pb-16 pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <div className="mt-10 grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="font-serif text-display-xl text-ink-900">
                Photography services for the people <em className="italic text-amber-500">who run Las Vegas</em>.
              </h1>
            </div>
            <p className="self-end text-lg leading-relaxed text-ink-700">
              Fortune 500 exhibitors, expo producers, and hospitality brands hire us for one reason: we deliver measurable results. Pick the service that fits your show, your team, or your menu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.href} {...s} />
            ))}
          </div>
        </div>
      </section>

      <ClientMarquee />
      <CTABand />
    </>
  );
}
