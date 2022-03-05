const getAllProducts = () =>
  fetch("https://kbeauty-api.herokuapp.com/api/v1/skincare")
    .then((response) => response.json())
    .then((data) => data.skincare);

const getSingleBrand = (brand) =>
  fetch(`https://kbeauty-api.herokuapp.com/api/v1/skincare/brand/${brand}`)
    .then((response) => response.json())
    .then((data) => data.skincare);

export { getAllProducts, getSingleBrand };
