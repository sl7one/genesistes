export const pagination = (array, page) => {
  const countPages = (array.length / 10).toFixed(1);

  const start = (page - 1) * 10;
  let end = page * 10;

  if (page > Number(countPages)) end = end - 10 + (page * 10 - array.length + 1);

  return {
    start,
    end,
  };
};
