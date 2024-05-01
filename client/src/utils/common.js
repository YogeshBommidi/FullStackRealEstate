export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 4,
    },
  },
};

export const updateFavourities = (id, favourities) => {
  if (favourities.includes(id)) {
    return favourities.filter((resId) => resId !== id);
  } else {
    return [...favourities, id];
  }
};

export const checkFavourities = (id, favourities) => {
  return favourities?.includes(id) ? "#fa3e5f" : "white";
};

export const validateString = (value) => {
  return value?.length < 3 || value === null
    ? "Must have atleast 3 characters"
    : null;
};
