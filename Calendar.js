import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import getMatrix from './src/utils/helper/getMatrix';
const {width, height} = Dimensions.get('window');
const proportionHeight = height / 684.5;
const proportionWidth = width / 411.4;
const Calendar = props => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const proportionHeight = height / 684.5;
  const proportionWidth = width / 411.4;
  const numberOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [activeDate, setactiveDate] = useState(props.date);
  var year = activeDate.getFullYear();
  var month = activeDate.getMonth();
  var firstDay = new Date(year, month, 1).getDay();
  const [yearC, setyearC] = useState(new Date().getFullYear());
  const [dayC, setdayC] = useState(new Date().getDate());
  const [monthIndC, setmonthIndC] = useState(new Date().getMonth());
  var maxDays = numberOfDays[month];
  if (month == 1) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      maxDays += 1;
    }
  }
  var matrix = getMatrix(activeDate, firstDay, maxDays);
  var rows = [];

  rows = matrix.map((row, rowIndex) => {
    var rowItems = row.map((item, colIndex) => {
      return (
        <View
          style={{
            paddingVertical: 5 * proportionHeight,
          }}>
          <Text
            style={{
              flex: 1,
              height: 18 * proportionHeight,
              textAlign: 'center',
              color:
                colIndex == 0
                  ? 'red'
                  : item == dayC &&
                    activeDate.getMonth() == monthIndC &&
                    activeDate.getFullYear() == yearC
                  ? '#66e3c4'
                  : 'black',
              fontWeight:
                (item == dayC &&
                  activeDate.getMonth() == monthIndC &&
                  activeDate.getFullYear() == yearC) ||
                rowIndex == 0
                  ? '900'
                  : 'normal',
              borderRadius:
                item == dayC &&
                activeDate.getMonth() == monthIndC &&
                activeDate.getFullYear() == yearC
                  ? 100 * proportionHeight
                  : 0,

              alignSelf: 'center',
            }}>
            {item != -1 ? item : ''}{' '}
          </Text>
        </View>
      );
    });

    return <View style={styles.rowItemsText}>{rowItems}</View>;
  });
  return (
    <View style={styles.mainView}>
      <Text style={styles.monthText}>
        {months[activeDate.getMonth()]} {activeDate.getFullYear()}
      </Text>
      <View>
        <Text>{rows}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    borderRadius: 15 * proportionHeight,
    marginVertical: 20 * proportionHeight,
    backgroundColor: 'white',
    elevation: 35,
    marginHorizontal: 10 * proportionWidth,
    paddingVertical: 20 * proportionHeight,
    height: 290 * proportionHeight,
  },
  monthText: {
    color: '#5367ff',
    fontWeight: 'bold',
    fontSize: 19 * proportionHeight,
    letterSpacing: 5 * proportionWidth,
    paddingHorizontal: 18 * proportionWidth,
    textTransform: 'uppercase',
  },
  rowItemsText: {
    padding: 15 * proportionWidth,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default Calendar;
