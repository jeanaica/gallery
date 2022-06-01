import { QueryObserverResult, useQuery, UseQueryOptions } from 'react-query';
import Photo from './models/Photo';
import PhotosAPI from './api';
import { ApiError } from 'api/instance';

const usePhotosQuery = (): QueryObserverResult<Array<Photo>, ApiError> => {
  const queryKey = ['retrievePhotos'];
  return useQuery(queryKey, () => PhotosAPI.getAll());
};

const usePhotoQuery = (
  queryOptions?: Omit<
    UseQueryOptions<Photo, ApiError, Photo, string[]>,
    'queryKey' | 'queryFn'
  >
): QueryObserverResult<Photo, ApiError> => {
  const queryKey = ['retrievePhoto'];
  return useQuery(queryKey, () => PhotosAPI.get(), {
    ...queryOptions,
  });
};

export { usePhotosQuery, usePhotoQuery };
