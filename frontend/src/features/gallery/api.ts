import instance from 'api/instance';

const getAll = async () => {
  const { data } = await instance.get('/v2/list', {
    params: {
      page: 2,
      limit: 10,
    },
  });

  return data;
};

const get = async () => {
  const { headers } = await instance.get('/200/300');

  const { data } = await instance.get(`/id/${headers['picsum-id']}/info`);

  return data;
};

export default {
  get,
  getAll,
};
