const getAllProducts = () =>
  fetch("https://kbeauty-api.herokuapp.com/api/v1/skincare")
    .then((response) => response.json())
    .then((data) => data.skincare);

export { getAllProducts };
