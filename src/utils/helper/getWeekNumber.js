function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  alert(
    `The Week No. of the year ${date.getFullYear()} :- ` +
      Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7),
  );
  return;
}
export {getWeekNumber};
