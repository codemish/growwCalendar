const generateMatrix = (activeDate, firstDay, maxDays) => {
  var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var calendarGrid = [];
  calendarGrid[0] = weekDays;
  var counter = 1;
  for (var row = 1; row < 7; row++) {
    calendarGrid[row] = [];
    for (var col = 0; col < 7; col++) {
      calendarGrid[row][col] = -1;
      if (row == 1 && col >= firstDay) {
        calendarGrid[row][col] = counter++;
      } else if (row > 1 && counter <= maxDays) {
        calendarGrid[row][col] = counter++;
      }
    }
  }
  return calendarGrid;
};
export default generateMatrix;
