import $ from 'jquery';

export class PhotosView {
	constructor() {
		this.$galleryPhotos = $('.js-gallery-photos');
	}

	generatePhoto(photo) {
		return $(`<img src=${photo.url}>`);
	}

	renderPhotos(photos) {
		this.$galleryPhotos.empty();
		const photoHtml = photos.map(this.generatePhoto);
		this.$galleryPhotos.prepend(photoHtml);
	}
}