import Link from 'next/link';
import { buildMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand, FAQSection, QuickContactForm } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Mandalay Bay Convention Center Headshots & Photography',
  description:
    'Professional headshot activation and event photography at Mandalay Bay Convention Center. For exhibitors at RSA, Money20/20, and major medical, finance, and tech conferences.',
  path: '/las-vegas/mandalay-bay',
  keywords: [
    'Mandalay Bay photographer',
    'Mandalay Bay Convention Center photography',
    'Mandalay Bay headshots',
    'RSA conference photographer',
    'Money20/20 photographer',
  ],
});

const FAQS = [
  {
    q: 'Which shows have you worked at Mandalay Bay?',
    a: 'RSA Conference, Money20/20, MINExpo, Dreamforce dev track, INBOUND satellite, and numerous medical and finance conferences.',
  },
  {
    q: 'Do you handle high-security shows like RSA?',
    a: 'Yes. We\'re experienced with the badge-verification, photography-restriction, and credentialing requirements at RSA and other high-security conferences. We\'ll work within your show\'s press/media access rules.',
  },
  {
    q: 'What\'s the photography setup inside Mandalay Bay?',
    a: 'Similar to LVCC — we bring full studio lighting, backdrop, retouching station, and branded check-in flow. Standard 10×10 booth footprint works perfectly.',
  },
];

export default function MandalayBayPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Las Vegas', path: '/las-vegas' },
    { name: 'Mandalay Bay', path: '/las-vegas/mandalay-bay' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          serviceSchema({
            name: 'Mandalay Bay Convention Center Photography',
            description: 'On-site headshot activation and event photography at Mandalay Bay Convention Center.',
            path: '/las-vegas/mandalay-bay',
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
                Photography at <em className="italic text-amber-500">Mandalay Bay</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-700">
                2.1 million square feet on the south end of the Strip. Home to RSA, Money20/20, and the kinds of medical, finance, and security conferences where professional headshots get used the most. We know the move-in routes, the dock bays, and the show services team by first name.
              </p>
              <div className="mt-10">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-medium text-ink-50 hover:bg-amber-500">
                  Get a quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <aside>
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8">
                <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Mandalay Bay quote</div>
                <div className="mt-6"><QuickContactForm compact /></div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-ink-900/10 bg-ink-100/40 py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <h2 className="font-serif text-display text-ink-900">Shows we cover at Mandalay Bay</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['RSA Conference', 'April/May', 'Cybersecurity'],
              ['Money20/20', 'October', 'Fintech'],
              ['MINExpo International', 'September (quadrennial)', 'Mining industry'],
              ['G2E Global Gaming Expo', 'October', 'Gaming / hospitality'],
              ['ASD Market Week', 'March/August', 'Consumer retail'],
              ['Dreamforce Dev Zone', 'September', 'Salesforce ecosystem'],
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

      <FAQSection items={FAQS} title="Mandalay Bay photography — FAQ" />
      <CTABand headline="Exhibiting at Mandalay Bay? Book well in advance." />
    </>
  );
}
