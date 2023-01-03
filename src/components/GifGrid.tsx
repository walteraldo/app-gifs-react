import { getGifs } from "../helpers/getGifs";

type CategoriesProps = {
  category: any,
}

export const GifGrid = ( { category }: CategoriesProps ) => {

  getGifs( category );

  return (
    <>
      <h3>{ category } </h3>
    </>
  )
}
