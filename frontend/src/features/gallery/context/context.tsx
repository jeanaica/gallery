import { createContext, useReducer, useContext, FC, ReactNode } from 'react';
import GalleryReducer from './reducer';
import { GalleryStore } from './types';

const GalleryContext = createContext({} as GalleryStore);

export const GalleryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(GalleryReducer, { photos: [] });

  const store = {
    state,
    dispatch,
  } as GalleryStore;

  return (
    <GalleryContext.Provider value={store}>{children}</GalleryContext.Provider>
  );
};

export const useGalleryStateContext = () => useContext(GalleryContext);
