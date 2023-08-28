import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary"
import AlbumGrid from "./album-grid";
import { ForceRefresh } from "@/components/webcomponents/force-reresh";


export default async function  GalleryPage ({
    params:{albumName}
}:{
    params: {
        albumName:string
    };
}){
    
  const results= (await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albumName}`)
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute()) as {resources:SearchResult[]};
  
  return (
    <div >
      <ForceRefresh />  
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-5xl font-bold'> Album {albumName}</h1>
        </div>

      <AlbumGrid images={results.resources}/> 
      </div>
    </div>
  )
}