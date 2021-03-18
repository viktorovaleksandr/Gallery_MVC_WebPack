import $ from 'jquery';

export class GalleryView {
	constructor() {
		this.$gallery = this.generateGallery();
	}

	generateGallery() {
		return $(`
			<div class="container row"></div>
		`);
	}
}