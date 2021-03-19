import $ from 'jquery';

export class GalleryView {
	constructor() {
		this.$gallery = this.generateGallery();

		const $app = $('#app');
		$app.append(this.$gallery);
	}

	generateGallery() {
		return $(`
			<div class="js-gallery container row">
				<div class="js-gallery-albums text-center card-body fst-italic col-sm-6 col-md-8"></div>
				<div class="js-gallery-photos card-body col-sm-6 col-md-4"></div>
			</div>
		`);
	}
}