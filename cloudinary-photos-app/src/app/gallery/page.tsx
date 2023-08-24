import GalleryGrid from './gallery-grid';
import UploadButton from './uploadbutton';
import cloudinary from "cloudinary"


export type SearchResult={
    public_id:string
    tags:string[]
}
export default async function  GalleryPage () {
    
  const results= (await cloudinary.v2.search
  .expression("resource_type:image ")
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute()) as {resources:SearchResult[]};
  
  return (
    <div >
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-5xl font-bold'> Gallery </h1>
          <UploadButton />
        </div>

      <GalleryGrid images={results.resources}/> 
      </div>
    </div>
  )
}
