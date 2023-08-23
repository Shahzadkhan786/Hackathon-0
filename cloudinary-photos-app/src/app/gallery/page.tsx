import CloudinaryImage from './cloudinary-image';
import UploadButton from './uploadbutton';
import cloudinary from "cloudinary"


type SearchResult={
    public_id:string
}
export default async function  GalleryPage () {
    
  const results=await cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by('created_at','desc')
  .max_results(30)
  .execute() as {resources:SearchResult[]};

  return (
    <div >
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-2xl font-bold'> Gallery </h1>
          <UploadButton />
        </div>
        
       <div className='grid grid-cols-4 gap-4'>
        {results.resources.map ((result)=>(
          <CloudinaryImage 
          key={result.public_id}
          src={result.public_id}
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
