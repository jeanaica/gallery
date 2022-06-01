import { ToastProvider } from 'components/toast/context';
import ToastContainer from 'components/toast/ToastContainer';
import Gallery from 'features/gallery/Gallery';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path='/gallery'
              element={<Gallery />}
            />
            <Route
              path='/'
              element={<Navigate to='/gallery' />}
            />
          </Route>
        </Routes>
        <ToastContainer />
      </ToastProvider>
    </QueryClientProvider>
  );
};

export default App;
