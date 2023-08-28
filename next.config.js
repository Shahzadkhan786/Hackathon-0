/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        serverActions:true   
    },
    typescript:{
        ignoreBuildErrors:true
    }, 
    cloudinary: {
      cloud_name: "dgmt0ksz6",
    },
}

module.exports = nextConfig
