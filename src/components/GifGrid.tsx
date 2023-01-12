import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface CategoriesProps  {
  category: any,
};

interface ImageProps  {
  title: string,
  url: string,
  id: number
};

export const GifGrid = ( { category }: CategoriesProps ) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3>{ category } </h3>
      { isLoading && ( <h2>Cargando...</h2>  ) }
     
      <div className = "card-grid" >
        { 
          images.map( ( image: ImageProps ) => (
            <GifItem key = { image.id } {...image } />
          )) 
        }
      </div>
    </>
  )
}
