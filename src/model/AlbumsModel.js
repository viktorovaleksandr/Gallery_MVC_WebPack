export class AlbumsModel {

  async getAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((albums) => albums);
  }
}