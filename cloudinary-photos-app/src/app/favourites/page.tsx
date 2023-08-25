
import cloudinary from "cloudinary"
import { SearchResult } from '../gallery/page';
import { ForceRefresh } from '../../components/webcomponents/force-reresh';
import FavouritesList from './favourites-list';

export default async function  Favourites () {
    
  const results= (await cloudinary.v2.search
  .expression("resource_type:image AND tags=favourite")
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
        
       <FavouritesList intialResources={results.resources} /> 

      </div>
    </div>
  )
}