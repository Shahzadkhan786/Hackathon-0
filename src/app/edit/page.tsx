"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
   const [transformation ,setTransformation]=useState<
   |undefined
   |"generative-fill"
   |"blur"
   |"pixelate"
   |"grayscale"
   |"removeBackground"
   >();
   const [pendingPrompt,setPendingPrompt]= useState("")
   const [prompt,setPrompt]= useState("")

   return(
    <div >
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-5xl sm:text-2xl xs:flex-col font-bold'> Edit {publicId} </h1>
        </div>
        
        <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        <Button variant="ghost" onClick={() => setTransformation(undefined)}>
            Clear All
        </Button> 
        
        <div className="flex flex-col gap-2">  
        <Button onClick={() => {
        setTransformation("generative-fill");
        setPrompt(pendingPrompt);
        }}>
           Apply Generative Fill
        </Button>
        <Label>Prompt</Label>
        <Input  
        value={pendingPrompt} 
        onChange={(e) => setPendingPrompt(e.currentTarget.value)}
        />
        </div>  
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
        width="1400"
        height="900"
        alt="image"
        crop="pad"
        fillBackground ={
        {
          prompt,
        }
      }
        />}
         {transformation === "blur" &&
        <CldImage 
        src={publicId}
        width="1200"
        height="1400"
        alt="image"
        blur="800"
        />}
        {transformation === "pixelate" &&
        <CldImage 
        src={publicId}
        width="1000"
        height="1200"
        alt="image"
        pixelate
        
        />}
        {transformation === "grayscale" &&
        <CldImage 
        src={publicId}
        width="1000"
        height="1200"
        alt="image"
        grayscale
        />}
        {transformation === "removeBackground" &&
        <CldImage 
        src={publicId}
        width="1200"
        height="900"
        alt="image"
        removeBackground
        />}
        </div>
      </div>
    </div>
   );
}