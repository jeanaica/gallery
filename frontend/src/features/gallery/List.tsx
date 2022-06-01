import Alert from 'components/alert/Alert';
import Image from 'components/image/Image';
import Loading from 'components/loading/Loading';
import { FC, useEffect, useMemo } from 'react';
import { useGalleryStateContext } from './context/context';
import { GalleryActions } from './context/types';
import { usePhotosQuery } from './queries';

const List: FC = () => {
  const { isFetching, data, isError } = usePhotosQuery();

  const { state, dispatch } = useGalleryStateContext();

  useEffect(() => {
    if (data) {
      dispatch({
        type: GalleryActions.GET_PHOTOS,
        photos: data,
      });
    }
  }, [data]);

  const images = useMemo(() => {
    return state?.photos?.map((photo, index) => (
      <Image
        photo={photo}
        key={index}
      />
    ));
  }, [state?.photos]);

  return (
    <>
      {!isFetching && isError && (
        <Alert message='Something went wrong. Please try again.' />
      )}
      {!isFetching && !isError && (
        <div className='flex flex-wrap justify-around'>{images}</div>
      )}
      {isFetching && !isError && (
        <div className='min-w-[320px] min-h-[400px] w-full flex justify-center items-center mt-8'>
          <Loading
            size='lg'
            type='page'
          />
        </div>
      )}
    </>
  );
};

export default List;
