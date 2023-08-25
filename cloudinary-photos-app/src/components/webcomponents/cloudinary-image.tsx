"use client"

import React, { useState, useTransition } from "react"
import { CldImage, CldImageProps } from "next-cloudinary"
import Heart from "../icons/heart"
import {setAsFavouriteAction} from "../../app/gallery/actions"
import { FullHeart } from "../icons/fullHeart"
import { SearchResult } from "../../app/gallery/page"
import { ImageMenu } from "./imagemenu"


export default function CloudinaryImage(props: {
    imageData:SearchResult;  
    onUnheart?: (unheartedResource : SearchResult) => void 
}   &  Omit<CldImageProps, "src">
  ){
    const [transition,startTransition] = useTransition();
    
    const {imageData,onUnheart} = props;
   
    
    const [isFavourited,setIsFavourited]= useState(imageData.tags.includes("favourite"))

    return(
    <div className="relative">
        <CldImage {...props} 
        src={imageData.public_id}
        />
        {isFavourited ?
          <FullHeart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={()=>{
            onUnheart?.(imageData);
            setIsFavourited(false)
            startTransition(()=>{
                setAsFavouriteAction(imageData.public_id,false)
            })
        }}/>      
        :        
          <Heart className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={()=>{
            setIsFavourited(true)
            startTransition(()=>{
                setAsFavouriteAction(imageData.public_id,true)
            })
        }}/>
        }
      <ImageMenu image={imageData}/>  
    </div>
    )
}