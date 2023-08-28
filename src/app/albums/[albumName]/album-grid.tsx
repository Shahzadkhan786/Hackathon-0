
"use client"

import { ImageGrid } from '@/components/webcomponents/image-grid';
import CloudinaryImage from '@/components/webcomponents/cloudinary-image';
import { SearchResult } from '@/app/gallery/page';

export default function  AlbumGrid ({images}:{images:SearchResult[]}) {
  
  return (
      <ImageGrid 
      images={images}
      getImage={(imageData:SearchResult) => {
        return(
          <CloudinaryImage 
          key={imageData.public_id}
          imageData={imageData}
          width={400}
          height={400}
          alt="image"
          />
        )
      }}/>
  )
    }