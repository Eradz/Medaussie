const devNextConfig = {
  async rewrites() {
    return{  fallback: [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      }
    ]
  }}, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dbkwrvkoi/image/upload/**',
        search: '',
      },
    ],
  },
};;
const prodNextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dbkwrvkoi/image/upload/**',
        search: '',
      },
    ],
  },

}
export default process.env.NEXT_PUBLIC_NEXT_ENV === 'development' ? devNextConfig : prodNextConfig

