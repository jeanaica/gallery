import { Dispatch } from 'react';
import Photo from '../models/Photo';

export type GalleryProp = {
  id: string;
  author: string;
  width: number;
  height: number;
  src: string;
  alt: string;
  downloadUrl: string;
  url: string;
};

export interface GalleryState {
  photos: Array<GalleryProp>;
}

export enum GalleryActions {
  GET_PHOTOS = 'GET_PHOTOS',
  ADD_PHOTO = 'ADD_PHOTO',
  DELETE_PHOTO = 'DELETE_PHOTO',
}

export type GalleryActionTypes =
  | {
      type: GalleryActions.GET_PHOTOS;
      photos: Array<Photo>;
    }
  | {
      type: GalleryActions.ADD_PHOTO;
      photo: Photo;
    }
  | {
      type: GalleryActions.DELETE_PHOTO;
      id: number;
    };

export interface GalleryStore {
  state: GalleryState;
  dispatch: Dispatch<GalleryActionTypes>;
}
