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
			showAlbumPhotos: (id) => this.showAlbumPhotos(id)
		});
		this.photosView = new PhotosView();
		this.albumsModel = new AlbumsModel();
		this.photosModel = new PhotosModel();

		const $app = $('#app');
		$app.append(this.galleryView.$gallery);

		const $galleryContainer = $('.container');
		$galleryContainer.append(this.albumsView.$list);
		$galleryContainer.append(this.photosView.$photo);

      this.init();
	}

	async init() {
		const albums = await this.albumsModel.getAlbums();
		this.albumsView.renderAlbums(albums);

		const photos = await this.photosModel.getPhotos(albums[0].id);
		this.photosView.renderPhotos(photos);
	}

	async showAlbumPhotos(id) {
		this.photosView.$photo.empty();
		const photos = await this.photosModel.getPhotos(id);
		this.photosView.renderPhotos(photos);
	}
}