
import {SearchResult} from "../../app/gallery/page"
import { ReactNode } from "react";

export function ImageGrid ({images,getImage}:{
  images:SearchResult[]
  getImage: (imageData:SearchResult)=> ReactNode;
}){
  
    const MAX_COLUMNS = 4;

  function getColumns(colIndex:number){
    return images.filter(
      (resource,idx)=> idx % MAX_COLUMNS === colIndex
    );
  }  

  return (
    <div className='grid lg:grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-2 xs:grid-cols-1'>

        {[
          getColumns(0),
          getColumns(1),
          getColumns(2),
          getColumns(3)
        ].map((column,idx) => ( 
        <div key={idx} className='flex flex-col gap-4'>
          {column.map (getImage)}
        </div>) )}
       
       </div>
  )
}