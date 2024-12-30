import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High-Performance Image & Video Delivery at Scale in Next.js" />
        <meta name="twitter:description" content="Next Cloudinary" />
        <meta name="twitter:image" content="https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg" />
        <meta property="og:image" content="https://res.cloudinary.com/demo/image/upload/v1234567890/sample.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="High-Performance Image & Video Delivery at Scale in Next.js" />
        <meta property="og:description" content="Next Cloudinary" />
      </Head>
      <div>
        {/* Page content */}
      </div>
    </>
  );
}
