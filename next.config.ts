import type { NextConfig } from "next";
 
const isDev = process.env.NODE_ENV !== 'production';
 
const nextConfig: NextConfig = {

  poweredByHeader: false,

  async headers() {

    return [

      {

        source: "/(.*)",

        headers: [

          { key: "X-Frame-Options", value: "DENY" },

          { key: "X-Content-Type-Options", value: "nosniff" },

          { key: "Referrer-Policy", value: "no-referrer" },

          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), usb=(), payment=(), clipboard-read=(), clipboard-write=(), accelerometer=(), autoplay=(), encrypted-media=(), fullscreen=(self), gyroscope=(), magnetometer=(), midi=(), picture-in-picture=()" },

          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

          { key: "X-DNS-Prefetch-Control", value: isDev ? "on" : "off" },

          { key: "X-XSS-Protection", value: "1; mode=block" },

        ],

      },

    ];

  },

  images: {

    domains: [

      'images.unsplash.com',

      'hebbkx1anhila5yf.public.blob.vercel-storage.com',

      'storage.googleapis.com',

      'img.youtube.com',

      'localhost',

    ],

  },

};
 
export default nextConfig;
 