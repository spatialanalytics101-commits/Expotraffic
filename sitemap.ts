import Link from 'next/link';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, QuickContactForm } from '@/components/UI';
import { SITE } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact ExpoTraffic — Las Vegas Tradeshow Photography Quotes',
  description:
    'Contact ExpoTraffic for tradeshow headshot activation quotes, SKO headshot bookings, and Las Vegas event photography. Reply within one business day. Steve Fogarty, founder.',
  path: '/contact',
  keywords: [
    'contact ExpoTraffic',
    'Las Vegas tradeshow photographer contact',
    'headshot activation quote',
    'SKO photographer quote',
  ],
});

export default function ContactPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(trail),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: `${SITE.baseUrl}/contact`,
            name: 'Contact ExpoTraffic',
            mainEntity: {
              '@id': `${SITE.baseUrl}/#business`,
            },
          },
        ]}
      />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />

          <div className="mt-12 grid gap-20 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h1 className="font-serif text-display-xl text-ink-900">
                Let&rsquo;s <em className="italic text-amber-500">talk</em>.
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-700">
                Tell us about your show, your team, or your event. We&rsquo;ll reply within one business day with availability and a production plan.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Call</div>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="mt-3 block font-serif text-3xl text-ink-900 hover:text-amber-600"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Email</div>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-3 block font-serif text-2xl text-ink-900 hover:text-amber-600"
                  >
                    {SITE.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Based in</div>
                  <address className="mt-3 block not-italic text-lg text-ink-700">
                    {SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}
                    <br />
                    United States
                  </address>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-500">Working with us</div>
                  <div className="mt-3 space-y-1 text-sm text-ink-700">
                    <div>Expo producers & sponsors</div>
                    <div>Anchor booth exhibitors</div>
                    <div>Marketing & comms teams</div>
                    <div>HR & people ops (SKO)</div>
                    <div>Event agencies (white-label)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-2xl border border-ink-900/10 bg-ink-100/40 p-8 md:p-10">
                <h2 className="font-serif text-2xl text-ink-900">Send a request</h2>
                <p className="mt-2 text-sm text-ink-600">Every field helps us give you an accurate quote.</p>
                <div className="mt-8">
                  <QuickContactForm />
                </div>
                <p className="mt-6 text-xs text-ink-500">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/privacy-policy" className="underline underline-offset-4">privacy policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
