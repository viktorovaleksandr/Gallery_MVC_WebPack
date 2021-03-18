import $ from 'jquery';

export class PhotosView {
	constructor() {
		this.$photo = this.generateGalleryPhotos();
	}

	generateGalleryPhotos() {
		return $(`
			<div class="js-gallery-photo card-body col-sm-6 col-md-4"></div>
		`);
	}

	generatePhoto(photo) {
		return $(`<img src=${photo.url}>`);
	}

	renderPhotos(photos) {
		const photoHtml = photos.map(this.generatePhoto);
		this.$photo.prepend(photoHtml);
	}
}