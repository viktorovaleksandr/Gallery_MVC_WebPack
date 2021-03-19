import $ from 'jquery';

import {GalleryView} from '../view/GalleryView.js';
import {AlbumsView} from '../view/AlbumsView.js';
import {PhotosView} from '../view/PhotosView.js';
import {AlbumsModel} from '../model/AlbumsModel.js';
import {PhotosModel} from '../model/PhotosModel.js';

export class GalleryController {
	constructor() {
		this.galleryView = new GalleryView();
		this.albumsView = new AlbumsView({
			showNewAlbumPhotos: (id) => this.showNewAlbumPhotos(id)
		});
		this.photosView = new PhotosView();
		this.albumsModel = new AlbumsModel();
		this.photosModel = new PhotosModel();

      this.init();
	}

	async init() {
		const albums = await this.albumsModel.getAlbums();
		this.albumsView.renderAlbums(albums);

		const photos = await this.photosModel.getPhotos(albums[0].id);
		this.photosView.renderPhotos(photos);

		this.albumsView.onClickAlbumItem();
	}

	async showNewAlbumPhotos(id) {
		const photos = await this.photosModel.getPhotos(id);
		this.photosView.renderPhotos(photos);
	}
}