interface ImageProps  {
  title: string,
  url: string,
};

export const GifItem = ( { title, url }: ImageProps ) => {

  return (
    <div className="card">
      <img src = { url } alt = { title } />
      <p>{ title }</p>
    </div>
  )
}
