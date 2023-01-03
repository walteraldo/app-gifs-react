type Props = {
  category: any
  img: {}
}

export const GifGrid = ( { category }: Props ) => {

  const getGifs = async () => {
    const url = `api.giphy.com/v1/gifs/search?api_key=ACTtBAt3Vght2WAEQuhOqIcmc8qBGNfk=${category}`;
    const resp = await fetch( url );
    // const { data = [] } = await resp.json();

    // const gifs = data.map( img => ({
    //   id: img.id,
    //   title: img.title,
    //   url: img.images.downsized_medium.url
    // }));

    console.log(resp)
  }
  
  getGifs();

  return (
    <>
      <h3>{ category } </h3>

    </>
  )
}
