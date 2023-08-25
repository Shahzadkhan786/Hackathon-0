"use client"

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
    searchParams: { publicId},} : {
  searchParams:{
   publicId:string;
  },  
},
)
{
   const [transformation ,setTransformation]=useState<undefined|"generative-fill"|"blur"|"pixelate"|"grayscale"|"removeBackground">();

   return(
    <div >
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-5xl font-bold'> Edit {publicId} </h1>
        </div>
        
        <div className="flex gap-4">
        <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
        </Button>    
        <Button onClick={() => setTransformation('generative-fill')}>
           Apply Generative Fill
        </Button>
        <Button onClick={() => setTransformation('blur')}>
           Apply Blur
        </Button>
        <Button onClick={() => setTransformation('pixelate')}>
          Pixelate
        </Button>
        <Button onClick={() => setTransformation('grayscale')}>
          Convert to Gray
        </Button>
        <Button  onClick={() => setTransformation("removeBackground")}>
           Remove Background
        </Button>
        </div>
        <div className="grid grid-cols-2 gap-12">
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        />    
        {transformation === "generative-fill" &&
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        crop="pad"
        fillBackground
        />}
         {transformation === "blur" &&
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        blur="800"
        />}
        {transformation === "pixelate" &&
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        pixelate
        />}
        {transformation === "grayscale" &&
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        grayscale
        />}
        {transformation === "removeBackground" &&
        <CldImage 
        src={publicId}
        width="300"
        height="300"
        alt="image"
        removeBackground
        />}
        </div>
      </div>
    </div>
   );
}