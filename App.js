import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Modal from './src/components/modalGoToDate';
import ModalFindWeek from './src/components/modalFindWeek';
import Calendar from './Calendar';
const {width, height} = Dimensions.get('window');
const proportionHeight = height / 684.5;
const proportionWidth = width / 411.4;

const App = () => {
  var years = [];
  const [modalVisibleGoToDate, setmodalVisibleGoToDate] = useState(false);
  const [modalVisibleFindWeek, setmodalVisibleFindWeek] = useState(false);
  const [selectedYear, setselectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setselectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setselectedDay] = useState(new Date().getDate());

  for (var i = 2020; i <= 2025; i++) {
    years.push(i);
  }
  useEffect(() => {
    console.log(selectedYear, selectedMonth);
  });
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
  const itemList = (year, yearInd) => {
    return (
      <View>
        {months.map((month, ind) => {
          return <Calendar date={new Date(year, ind)} />;
        })}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: '#e5faf5',
        flex: 1,
      }}>
      <Modal
        modalVisible={modalVisibleGoToDate}
        setmodalVisibl={setmodalVisibleGoToDate}
        setselectedYear={setselectedYear}
        setselectedMonth={setselectedMonth}
        setselectedDay={setselectedDay}
      />
      <ModalFindWeek
        modalVisible={modalVisibleFindWeek}
        setmodalVisibl={setmodalVisibleFindWeek}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Groww Calender</Text>
      </View>

      <ScrollView
        contentOffset={{
          x: 0,
          y:
            20 * proportionHeight +
            ((selectedYear - 2020) * 12 + selectedMonth) *
              330 *
              proportionHeight,
        }}>
        {years.map(itemList)}
      </ScrollView>
      <View style={styles.function}>
        <TouchableOpacity style={{borderRadius: 6, elevation: 30}}>
          <Text
            onPress={() => {
              setmodalVisibleGoToDate(true);
            }}
            style={styles.funtionText}>
            Go to Date
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            height: 30 * proportionHeight,
          }}
        />
        <TouchableOpacity style={{borderRadius: 6, elevation: 30}}>
          <Text
            onPress={() => {
              setmodalVisibleFindWeek(true);
            }}
            style={styles.funtionText}>
            Find Week
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  function: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#66e3c4',
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: 'auto',
    height: 40 * proportionHeight,
  },
  funtionText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleView: {
    backgroundColor: '#5367ff',
    height: 50 * proportionHeight,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Pacifico-Regular',
  },
});
export default App;
