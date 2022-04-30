const wavesService = {
  endpoint: "https://api.remotebootcamp.dev/api/entities/waves",
};

wavesService.add = (payload) => {
  const addConfig = {
    method: "POST",
    url: wavesService.endpoint,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json-patch+json" },
  };

  return axios(addConfig).then((response) => {
    let wave = payload;
    wave.id = response.data.item;
    return wave;
  });
};

wavesService.get = () => {
  const getConfig = {
    method: "GET",
    url: wavesService.endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(getConfig);
};

wavesService.getId = (id) => {
  const getConfig = {
    method: "GET",
    url: wavesService.endpoint + "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(getConfig);
};

wavesService.put = (id, payload) => {
  const putConfig = {
    method: "PUT",
    url: wavesService.endpoint + "/" + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(putConfig);
};

wavesService.patch = (id, payload) => {
  const patchConfig = {
    method: "PATCH",
    url: wavesService.endpoint + "/" + id,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(patchConfig);
};

wavesService.delete = (id) => {
  const deleteConfig = {
    method: "DELETE",
    url: wavesService.endpoint + "/" + id,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(deleteConfig);
};
