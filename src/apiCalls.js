const getAllSkincare = () => {
  return fetch("https://kbeauty-api.herokuapp.com/api/v1/skincare")
    .then((response) => response.json())
    .then((data) => {
      return data.skincare;
    });
};

const getSingleBrand = (brand) => {
  return fetch(
    `https://kbeauty-api.herokuapp.com/api/v1/skincare/brand/${brand}`
  )
    .then((response) => response.json())
    .then((data) => data.skincare);
};

export { getAllSkincare, getSingleBrand };
