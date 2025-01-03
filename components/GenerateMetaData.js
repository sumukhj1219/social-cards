import { getCldOgImageUrl } from 'next-cloudinary';
 
const publicId = 'samples/woman-on-a-football-field';
const headline = 'High-Performance Image & Video Delivery at Scale in Next.js';
const tagline = 'Next Cloudinary';
const logoPublicId = 'samples/woman-on-a-football-field';

export const metadata = {
    openGraph: {
      images: [
        {
          width: 1200,
          height: 630,
          url: getCldOgImageUrl({
            src: publicId,
            effects: [
              {
                background: 'rgb:010A44'
              },
              {
                color: 'rgb:2A005F',
                colorize: '100'
              },
              {
                gradientFade: 'symmetric'
              }
            ],
            overlays: [
              {
                publicId,
                width: 1200,
                height: 630,
                crop: 'fill',
                effects: [
                  { opacity: 20 }
                ]
              },
              {
                width: 1000,
                crop: 'fit',
                text: {
                  color: 'white',
                  fontFamily: 'Merriweather',
                  fontSize: 58,
                  fontWeight: 'bold',
                  lineSpacing: 10,
                  text: headline
                },
                position: {
                  x: 100,
                  y: 100,
                  gravity: 'north_west'
                },
              },
              {
                text: {
                  color: 'white',
                  fontFamily: 'Lato',
                  fontSize: 37,
                  fontWeight: 'bold',
                  text: tagline
                },
                position: {
                  x: 180,
                  y: 100,
                  gravity: 'south_west'
                },
              },
            ]
          })
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: headline,
      description: tagline,
      images: [
        getCldOgImageUrl({
          src: publicId,
          effects: [
            {
              background: 'rgb:010A44'
            },
            {
              color: 'rgb:2A005F',
              colorize: '100'
            },
            {
              gradientFade: 'symmetric'
            }
          ]
        })
      ]
    }
  };
  