"use client"
import React from 'react'
import { CldUploadButton } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { Uploadresult } from '../page';
import { useRouter } from "next/navigation"

export default function UploadButton () {
  const router = useRouter();
  return (
       <Button asChild className='bg-white text-black text-lg font-semibold p-2 rounded-md'>
       <CldUploadButton 
       
        onUpload={(result) => {
        const uploadresult = result as Uploadresult;
        setTimeout(()=>{
          router.refresh() 
        },1000)
        }}
        uploadPreset="trejkl123" 
        >
        <section className='flex justify-between gap-2 items-center'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>

          Upload
        </section>
       </CldUploadButton> 
       </Button>
  )
}
