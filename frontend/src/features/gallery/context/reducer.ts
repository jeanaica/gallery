import Photo from '../models/Photo';
import { GalleryActionTypes, GalleryProp, GalleryState } from './types';

const photoMap = (photo: Photo): GalleryProp => {
  const { id, url } = photo;

  return {
    ...photo,
    alt: url,
    src: `https://picsum.photos/id/${id}/300/350.jpg`,
    downloadUrl: `https://picsum.photos/id/${id}/300/600.jpg`,
  };
};

const GalleryReducer = (state: GalleryState, action: GalleryActionTypes) => {
  switch (action.type) {
    case 'GET_PHOTOS': {
      return {
        photos: action.photos.map(photoMap),
      };
    }
    case 'ADD_PHOTO': {
      const newPhoto = photoMap(action.photo);
      return {
        ...state,
        photos: [...state.photos, newPhoto],
      };
    }
    case 'DELETE_PHOTO': {
      const copyPhotos = state.photos.slice();
      copyPhotos.splice(action.id, 1);

      return {
        ...state,
        photos: copyPhotos,
      };
    }
    default: {
      throw new Error('unhandled action');
    }
  }
};

export default GalleryReducer;
