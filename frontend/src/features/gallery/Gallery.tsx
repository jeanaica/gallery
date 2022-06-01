import Actions from './Actions';
import { GalleryProvider } from './context/context';
import List from './List';

const Gallery = () => {
  return (
    <GalleryProvider>
      <div className='flex justify-center sm:p-6 flex-col items-center'>
        <div className='w-full sm:max-w-md rounded overflow-hidden sm:shadow-lg shadow-accent-500 lg:flex lg:max-w-5xl lg:p-8'>
          <div className='flex flex-col'>
            <Actions />
            <List />
          </div>
        </div>
      </div>
    </GalleryProvider>
  );
};

export default Gallery;
