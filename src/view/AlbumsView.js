import $ from 'jquery';

export class AlbumsView {
	constructor(config) {
		this.config = config;
		this.$list = this.generateGalleryAlbums();
	}

	generateGalleryAlbums() {
		return $(`
			<div class="js-gallery-albums text-center card-body fst-italic col-sm-6 col-md-8"></div>	
		`).click((event) => {
			this.onClickAlbum(event);
		});
	}

	generateAlbum(album) {	
		return $(`
			<div data-id="${album.id}" class="alert alert-warning"> ${album.title} </div>
		`);
	}

	renderAlbums(albums) {
		const albumsHtml = albums.map(this.generateAlbum);
		this.$list.prepend(albumsHtml);
	}

	onClickAlbum(event) {
		const id = $(event.target).data('id');
		this.config.showAlbumPhotos(id);
	}
}