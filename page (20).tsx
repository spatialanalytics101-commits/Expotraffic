import Link from 'next/link';
import { buildMetadata, breadcrumbSchema } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumbs, CTABand } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Blog — Tradeshow Marketing, Lead Generation & Headshot Strategy',
  description:
    'Expert guides on tradeshow booth traffic, headshot activations, conference lead generation, SKO planning, and Las Vegas convention photography from the ExpoTraffic team.',
  path: '/blog',
  keywords: [
    'tradeshow marketing blog',
    'trade show booth traffic',
    'headshot activation guide',
    'conference lead generation',
    'tradeshow ROI',
  ],
});

const ARTICLES = [
  {
    slug: 'ultimate-guide-tradeshow-booth-traffic',
    title: 'The Ultimate Guide to Tradeshow Booth Traffic',
    dek: 'Everything you need to know about driving qualified foot traffic to your booth — from psychology to logistics to measurable ROI.',
    date: '2026-03-15',
    readingTime: '14 min',
    category: 'Strategy',
  },
  {
    slug: 'what-is-headshot-activation',
    title: 'What Is a Headshot Activation? (And Why It\'s the #1 Booth Idea)',
    dek: 'A headshot activation is the single highest-ROI booth activation a tradeshow exhibitor can run. Here\'s the full breakdown.',
    date: '2026-03-02',
    readingTime: '9 min',
    category: 'Headshot activation',
  },
];

export default function BlogIndexPage() {
  const trail = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />

      <section className="bg-ink-50 pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <Breadcrumbs trail={trail} />
          <h1 className="mt-10 font-serif text-display-xl text-ink-900">
            Field notes from the <em className="italic text-amber-500">tradeshow floor</em>.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink-700">
            Strategy, tactics, and case studies for the people planning the next booth, the next SKO, the next CES activation. Written by the team behind ExpoTraffic.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[88rem] px-6 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-ink-900/10 bg-ink-50 p-10 transition-all hover:border-amber-500/50 hover:bg-ink-100/40"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-500">
                    <span>{a.category}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-400" />
                    <span className="text-ink-500">{a.readingTime} read</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl text-ink-900 group-hover:text-amber-600">{a.title}</h2>
                  <p className="mt-4 text-ink-600">{a.dek}</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-ink-900/10 pt-4">
                  <time dateTime={a.date} className="text-xs uppercase tracking-[0.15em] text-ink-500">
                    {new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span aria-hidden="true" className="text-ink-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-500">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline="Less reading. More booth traffic." />
    </>
  );
}
