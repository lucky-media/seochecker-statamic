const unslugify = (title) => {
  return title
    .replace(/\_/g, ' ')
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );
};

export default unslugify;
