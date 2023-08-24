"use client"

import { ImageGrid } from '../components/webcomponents/image-grid';
import CloudinaryImage from '../components/webcomponents/cloudinary-image';
import { SearchResult } from '../gallery/page';
import { useEffect, useState } from 'react';


export default function  FavouritesList ({
        intialResources
    }:{
        intialResources:SearchResult[]
    }) {
    
    const [resources,setResources] =useState(intialResources)
    
    useEffect(()=> {
      setResources(intialResources)
    },[intialResources])
     
    return (
      <ImageGrid images={resources}
      getImage={(imageData:SearchResult) => {
        return(
          <CloudinaryImage 
          key={imageData.public_id}
          imageData={imageData}
          width={400}
          height={400}
          alt="image"
          onUnheart={(unheartedResource) => {
             setResources((currentResources) =>
                currentResources.filter(
                    (resource) =>  resource.public_id !== unheartedResource.public_id
                )
             )
          }}
          />
        )
      }}
      /> 
  )
}