import cloudinary from "cloudinary"
import { AlbumCard } from "./album-card";

export type Folder = { name:string , path:string};

export default async function  AlbumsPage () {
    
  const  { folders } = (await cloudinary.v2.api.root_folders()) as {
     folders: Folder[];
  }

  return (
    <div >
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-5xl font-bold'> Albums </h1>
          </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xl:grid-cols-3 gap-4">
        {folders.map((folder) =>(
        <AlbumCard key={folder.path} folder={folder} />
        ))}  
        </div>                        
      </div>
    </div>
  )
}
