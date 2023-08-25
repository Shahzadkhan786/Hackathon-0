  import { Button } from "../ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
   
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu"
import { Menu } from "../icons/menu"
import { AddToAlbumDialog } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
  
  export function ImageMenu( {image}:{image:SearchResult}) {
    const [open,setOpen] = useState(false)
    return (
    <div className="absolute top-2 right-2 ">
        <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 p-0">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36">
        <div className="">
          <DropdownMenuSeparator />
            <DropdownMenuItem asChild >              
              <AddToAlbumDialog image={image} onClose={()=>setOpen(false)}/>              
            </DropdownMenuItem>
            </div>  
        </DropdownMenuContent>
      </DropdownMenu>
    </div>        
    )
  }
  