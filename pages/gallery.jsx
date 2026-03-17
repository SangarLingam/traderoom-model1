import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import Lightbox from '@/components/gallery/Lightbox';

export default function GalleryPage() {
  const [lb, setLb]       = useState(null);   // selected item
  const [items, setItems] = useState([]);     // current filtered list

  const handleSelect = (item, filteredItems) => {
    setLb(item);
    setItems(filteredItems);
  };

  const idx  = lb ? items.findIndex((i) => i.id === lb.id) : -1;
  const prev = () => setLb(items[(idx - 1 + items.length) % items.length]);
  const next = () => setLb(items[(idx + 1) % items.length]);

  return (
    <>
      <Head>
        <title>Gallery — Traderoom Digital Services</title>
        <meta name="description" content="Browse our portfolio of brand identities, campaigns, and creative productions across TTS, Salman, Arfi, and more." />
      </Head>
      <Layout>

        {/* Page Hero Banner */}
        <section className="ph">
          <div className="con">
            <p className="ph-tag">Our Portfolio</p>
            <h1 className="ph-h1">
              Work That<br /><em>Speaks Volumes</em>
            </h1>
            <p className="ph-sub">
              Browse our portfolio of brand identities, campaigns, and creative productions.
            </p>
          </div>
        </section>

        <GalleryGrid onSelect={handleSelect} />

        {lb && (
          <Lightbox
            item={lb}
            items={items}
            onClose={() => setLb(null)}
            onPrev={prev}
            onNext={next}
          />
        )}

      </Layout>
    </>
  );
}
