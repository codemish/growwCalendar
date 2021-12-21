const getWeekNumber = async todayDate => {
  var oneJan = new Date(todayDate.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((todayDate - oneJan) / (24 * 60 * 60 * 1000));

  alert(
    `The Week No. of the year ${todayDate.getFullYear()} :- ` +
      Math.ceil((todayDate.getDay() + 1 + numberOfDays) / 7),
  );
  console.log(result);
  return result;
};

export {getWeekNumber};
