import Button from 'components/button/Button';
import useToast from 'components/toast/hook';
import { useEffect, useState } from 'react';
import { useGalleryStateContext } from './context/context';
import { GalleryActions } from './context/types';
import { usePhotoQuery } from './queries';

const Add = () => {
  const [shouldAddPhoto, setShouldAddPhoto] = useState(false);
  const { dispatch } = useGalleryStateContext();
  const toast = useToast(2000);

  const { data } = usePhotoQuery({
    enabled: shouldAddPhoto,
    onError: () => toast('error', 'Something went wrong, Please try again.'),
    onSettled: () => setShouldAddPhoto(false),
    onSuccess: data =>
      toast('success', `You have successfully added image #${data.id}`),
  });

  const handleAdd = () => {
    setShouldAddPhoto(true);
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: GalleryActions.ADD_PHOTO,
        photo: data,
      });
    }
  }, [data]);

  return (
    <Button
      className='mb-2 sm:mr-2 sm:mb-0'
      onClick={handleAdd}>
      <span className='material-icons-outlined'>add</span>
      Add image
    </Button>
  );
};

export default Add;
