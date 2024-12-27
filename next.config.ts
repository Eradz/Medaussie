const devNextConfig = {
  async rewrites() {
    return{  fallback: [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*' // Proxy to Backend
      }
    ]
  }}
};;
const prodNextConfig = {}
export default process.env.NODE_ENV === 'development' ? devNextConfig : prodNextConfig

