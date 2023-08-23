"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import {useState} from "react"


export type Uploadresult={
  info:{
    public_id:string;
  }
  event:"success";
}

export default function Home() {
    const [imageId, setImageId] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
      <CldUploadButton 
      onUpload={(result) => {
        const uploadresult = result as Uploadresult;
        setImageId(uploadresult.info.public_id)
        console.log(result)
      }}
      uploadPreset="trejkl123" />      
 
     {imageId&&(
     <CldImage
      width="960"
      height="600"
      src={imageId}
      sizes="100vw"
      alt="Description of my image"
     />
     )}
    </main>
  )
}
