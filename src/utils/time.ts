export const createdDate = (date, hours) => {
  const splitHours = hours.split(':');
  const splitDate = date.split('/');
  const [hour, min] = splitHours;
  const [day, month, year] = splitDate;
  return new Date(year, month - 1, day, hour, min);
};
