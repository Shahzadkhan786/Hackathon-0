import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
import Heart from '../icons/heart'
import Link from 'next/link'
import cloudinary from "cloudinary"
import { Folder } from '@/app/albums/page'
import { Albums } from '../icons/albums'
import { GalleryFolder } from '../icons/folder'

export default async function Sidebar () {
  const  { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
 }
  return (
    <div className={cn("pb-12 w-3/12")}>
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
          MANAGE DATA
        </h2>
        <div className="space-y-1">
          {/*Gallery*/}

          <Button 
          asChild
          variant="ghost" 
          className="w-full justify-start gap-2">
          <Link href="/gallery">
            <GalleryFolder />         
          Gallery
          </Link>
         </Button>
   

          {/*Albums*/}
          
         <Button 
          asChild
          variant="ghost" 
          className="w-full justify-start gap-2">
          <Link href="/albums">
            <Albums />
            Albums
          </Link>
          
         </Button>
           {folders.map ((folder) =>(
           <Button variant="ghost" asChild key={folder.name} className=' w-full justify-start gap-2'>
             <Link href={`/album/${folder.path}`} className='pl-8'> 
            {folder.name}
            </Link>
           </Button>))}
      
           {/*Favourites*/}
           
         <Button 
          asChild
          variant="ghost" 
          className="w-full justify-start gap-2">
            <Link href="/favourites"> 
            <Heart />
            Favourites
            </Link>
         </Button>
          
        
        </div>
      </div>
      </div>
      </div>
  )
}
