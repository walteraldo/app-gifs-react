interface CategoriesProps {
  category: any,
}

export const getGifs = async ( category: CategoriesProps ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ACTtBAt3Vght2WAEQuhOqIcmc8qBGNfk&q=${ category }&limit=14`;
  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( (img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}