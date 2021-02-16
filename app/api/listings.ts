import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = (listing: any, onUploadProgress: any) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image: any, index: any) =>
    data.append('images', {
      name: `image${index}`,
      type: 'image/jpeg',
      uri: image,
    } as any));

  if (listing.location)
    data.append('location', JSON.stringify(listing.location));

  // Parent > child

  return client.post(endpoint, data, {
    onUploadProgress: (progress: any) => {
      onUploadProgress(progress.loaded / progress.total);
    }
  });
}

export default {
  addListing,
  getListings,
}