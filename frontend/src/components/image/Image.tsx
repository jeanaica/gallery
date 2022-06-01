import { FC } from 'react';

type Props = {
  photo: {
    id?: string;
    url?: string;
    src: string;
    alt: string;
    author?: string;
    downloadUrl?: string;
  };
};

const Image: FC<Props> = ({ photo }) => {
  return (
    <div className='w-full lg:w-[30%] rounded overflow-hidden shadow-lg m-2 relative flex flex-col'>
      <a
        href={photo?.url}
        target='_blank'
        rel='noreferrer'>
        <img
          className='w-full'
          src={photo.src}
          alt={photo.alt}
        />
      </a>
      <div className='px-6 py-4 h-full'>
        {photo?.id && (
          <div className='font-bold text-xl mb-2'>#{photo?.id}</div>
        )}
        {photo?.author && (
          <p className='text-gray-700 text-base'>
            <strong>Author: </strong>
            {photo?.author}
          </p>
        )}
      </div>
      {photo?.downloadUrl && (
        <a
          className='w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
          href={photo?.downloadUrl}
          target='_blank'
          download
          rel='noreferrer'>
          <svg
            className='fill-current w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          <span>Download</span>
        </a>
      )}
    </div>
  );
};

export default Image;
