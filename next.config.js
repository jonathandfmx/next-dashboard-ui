// module.exports = {
//     images: {
//       remotePatterns: [new URL('https:cloudinary://423568535736577:M3fLIe7BLqhuVjMR9f9w0CzaBAg@dpa6qbntn')],
//     },
//   }

// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          // You can add these as well
          // port: '',
          // pathname: 'arifscloud/image/upload/**',
        },
      ],
    },
  }


