import $ from 'jquery';

export class AlbumsView {
	constructor(config) {
		this.$galleryAlbums = $('.js-gallery-albums');
		this.config = config;
		this.addAlbumClickEventListener();
	}

	generateAlbum(album) {	
		return $(`
			<div data-id="${album.id}" class="alert alert-warning">${album.title}</div>
		`);
	}

	renderAlbums(albums) {
		const albumsHtml = albums.map(this.generateAlbum);
		this.$galleryAlbums.prepend(albumsHtml);
	}

	addAlbumClickEventListener() {
		this.$galleryAlbums.click((event) => {
			const id = $(event.target).data('id');
			this.config.showAlbumPhotos(id);
		});
	}
}