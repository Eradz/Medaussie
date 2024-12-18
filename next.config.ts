const nextConfig = {
  async rewrites() {
    return{  fallback: [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      }
    ]
  }}
};;

export default nextConfig;
