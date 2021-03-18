export class PhotosModel {
	
	async getPhotos(id) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    .then((response) =>   response.json())
    .then((photos) => photos);
  }
}