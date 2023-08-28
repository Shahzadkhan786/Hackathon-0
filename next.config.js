/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ['https://api.cloudinary.com/v1_1/dgmt0ksz6'], 
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
