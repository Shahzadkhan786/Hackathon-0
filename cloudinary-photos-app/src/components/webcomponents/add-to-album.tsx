"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { FolderPlus } from "lucide-react"
import { SearchResult } from "@/app/gallery/page"
import { addImageToAlbum} from "./action"

export function AddToAlbumDialog({image,onClose}:{image:SearchResult; onClose: ()=>void;}) {

    const[albumName,setAlbumName] = useState("") 
    const [open, setOpen] =useState(false);
    
    return (
    <div className="">
    <Dialog open={open} onOpenChange={(newOpenState) => {
      setOpen(newOpenState);
      if (!newOpenState){
        onClose();
      }        
      }}
      >
      <DialogTrigger>
        <div className="flex ">
         <Button variant="ghost">
            <FolderPlus className="mr-1 h-6 w-6" />
            <span>Add To Album</span>  
         </Button>
        </div>         
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add To Album </DialogTitle>
          <DialogDescription>
           Type an album you want to move  this image into.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input 
            onChange={(e) => setAlbumName(e.currentTarget.value)}
            id="album-name" 
            value={albumName} 
            className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button 
          onClick={async ()=>{
            onClose();
           setOpen(false)
           await addImageToAlbum(image,albumName)
          }}
          type="submit">Add To Album </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}
