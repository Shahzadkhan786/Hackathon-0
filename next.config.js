/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['dgmt0ksz6.cloudinary.com'], // Add your Cloudinary domain here
  },
  env: {
    CLOUDINARY_CLOUD_NAME: 'dgmt0ksz6',
  },
};
const nextConfig = {
    experimental:{
        serverActions:true   
    },
    typescript:{
        ignoreBuildErrors:true
    } 
}

module.exports = nextConfig
