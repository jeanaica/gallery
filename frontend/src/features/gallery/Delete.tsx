import Button from 'components/button/Button';
import useToast from 'components/toast/hook';
import { useMemo } from 'react';
import { useGalleryStateContext } from './context/context';
import { GalleryActions } from './context/types';

const Delete = () => {
  const { state, dispatch } = useGalleryStateContext();
  const toast = useToast(2000);

  const randomNum = useMemo(
    () => Math.floor(Math.random() * state.photos.length),
    [state.photos]
  );

  const handleDelete = () => {
    try {
      const currId = state.photos[randomNum]?.id;

      dispatch({
        type: GalleryActions.DELETE_PHOTO,
        id: randomNum,
      });

      toast('success', `You have successfully deleted image #${currId}`);
    } catch (error) {
      toast('error', 'Something went wrong, Please try again.');
    }
  };

  return (
    <Button
      onClick={handleDelete}
      disabled={!state.photos.length}>
      <span className='material-icons-outlined'>delete</span>
      Remove random image
    </Button>
  );
};

export default Delete;
