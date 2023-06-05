const API_KEY = '37031856-ea910a386504f4760be4ed41e';

export async function fetchGallery(searchQuery, countPage) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${countPage}`;

  try {
    const response = await fetch(url);
    const gallery = await response.json();
    return gallery;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}
