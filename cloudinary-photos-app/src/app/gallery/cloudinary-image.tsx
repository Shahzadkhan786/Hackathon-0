"use client"

import React, { useTransition } from "react"
import { CldImage } from "next-cloudinary"
import Heart from "../components/icons/heart"
import {setAsFavouriteAction} from "./actions"
import { FullHeart } from "../components/icons/fullHeart"
import { SearchResult } from "./page"


export default function CloudinaryImage(props:any & {imageData:SearchResult; path:string}){
    const [transition,startTransition] = useTransition();
    
    const {imageData} = props;
   
    const isFavourited = imageData.tags.includes("favorite")

    return(
    <div className="relative">
        <CldImage {...props} 
        src={imageData.public_id}
        />
        {isFavourited ?
          <FullHeart className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={()=>{
            startTransition(()=>{
                setAsFavouriteAction(imageData.public_id,false,props.path)
            })
        }}/>      
        :        
          <Heart className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer"
          onClick={()=>{
            startTransition(()=>{
                setAsFavouriteAction(imageData.public_id,true,props.path)
            })
        }}/>
        }
        
    </div>
    )
}