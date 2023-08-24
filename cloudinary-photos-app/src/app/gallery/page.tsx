import CloudinaryImage from './cloudinary-image';
import UploadButton from './uploadbutton';
import cloudinary from "cloudinary"


export type SearchResult={
    public_id:string
    tag:string[]
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
          <h1 className='text-3xl font-bold'> Gallery </h1>
          <UploadButton />
        </div>
        
       <div className='grid grid-cols-4 gap-4'>
        {results.resources.map ((result)=>(
          <CloudinaryImage 
          key={result.public_id}
          path="/gallery"
          imageData={result}
          width={400}
          height={400}
          alt="image"
          />
        ))}
       </div>
       
      </div>
    </div>
  )
}
