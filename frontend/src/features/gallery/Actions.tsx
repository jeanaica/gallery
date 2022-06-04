import Add from './Add';
import Delete from './Delete';

const Actions = () => {
  return (
    <div className='flex m-8 mb-0 flex-col sm:flex-row sm:m-4'>
      <Add />
      <Delete />
    </div>
  );
};

export default Actions;
