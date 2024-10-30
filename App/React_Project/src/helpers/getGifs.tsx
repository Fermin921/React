interface Gif {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6C2VNS4Q00PLFf0jSACMmPUUAtEJPxbp&q=${category}`;
  const response = await fetch(url);
  const {
    data,
  }: {
    data: Array<{
      id: string;
      title: string;
      images: { downsized_medium: { url: string } };
    }>;
  } = await response.json();

  const gifs: Gif[] = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs); // Puedes ver los GIFs en la consola
  return gifs; // Asegúrate de retornar los GIFs
};
