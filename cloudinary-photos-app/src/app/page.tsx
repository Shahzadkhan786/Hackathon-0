import GalleryGrid from '@/app/gallery/gallery-grid';
import { SearchForm } from '@/app/gallery/search-form';
import UploadButton from '@/app/gallery/uploadbutton';
import cloudinary from "cloudinary"


export type SearchResult={
    public_id:string
    tags:string[]
}
export default async function  GalleryPage (
  {
    searchParams: { search}} : {
  searchParams:{
   search:string;
  },  
}
) {
    
  const results= (await cloudinary.v2.search
  .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
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
        
        <SearchForm 
        initialSearch={search}
        />
      <GalleryGrid images={results.resources}/> 
      </div>
    </div>
  )
}
