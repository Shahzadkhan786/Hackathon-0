
import CloudinaryImage from '../gallery/cloudinary-image';
import cloudinary from "cloudinary"
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '../components/forch-reresh';


export default async function  Favourites () {
    
  const results= (await cloudinary.v2.search
  .expression("resource_type:image AND tags=favorite")
  .sort_by('created_at','desc')
  .with_field("tags")
  .max_results(30)
  .execute()) as {resources:SearchResult[]};
   

  return (
    <div >
      <ForceRefresh />
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between p-2'>
          <h1 className='text-3xl font-bold'> Favourite Images </h1>
        </div>
        
       <div className='grid grid-cols-4 gap-4'>
        {results.resources.map ((result)=>(
          <CloudinaryImage 
          key={result.public_id}
          path="/favourites"
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