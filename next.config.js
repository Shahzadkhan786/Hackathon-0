/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        serverActions:true   
    },
    typescript:{
        ignoreBuildErrors:true
    }, 
    cloudinary: {
      cloud_name: "YOUR_CLOUD_NAME",
    },
}

module.exports = nextConfig
