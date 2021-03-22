export class PhotosModel {
	
<<<<<<< HEAD
  constructor() {
		this.photos = [];
  }

	async getPhotos(id) {
=======
async getPhotos(id) {
>>>>>>> 9d6006e12f8922e7493adc264e2a3b3365f6b952
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
    	.then((response) =>   response.json())
    	.then((photos) => photos);
  }
}
