import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const proportionHeight = height / 684.5;
const proportionWidth = width / 411.4;
const modal = props => {
  var monthArray = [
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
  const [month, setmonth] = useState(monthArray[new Date().getMonth()]);
  const [year, setyear] = useState(new Date().getFullYear());
  const [day, setday] = useState(new Date().getDate());
  const [monthInd, setmonthInd] = useState(new Date().getMonth());
  var yearArray = [];
  var dayArray = [];
  for (var i = 2020; i <= 2025; i++) {
    yearArray.push(i);
  }
  for (var i = 1; i <= 31; i++) {
    dayArray.push(i);
  }

  return (
    <View style={styles.cemterView}>
      <Modal
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setmodalVisibl(false);
        }}
        transparent={true}
        animationType="slide">
        <View style={styles.cemterView}>
          <View style={styles.modalStyle}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.selectedYearStyle}>{day}</Text>
              <ScrollView
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                {dayArray.map(item => {
                  return (
                    <Text
                      style={styles.scrollViewTextStyle}
                      onPress={() => {
                        setday(item);
                      }}>
                      {item}
                    </Text>
                  );
                })}
                <View style={{height: 45}} />
              </ScrollView>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.selectedYearStyle}>{month}</Text>
              <ScrollView
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                {monthArray.map((item, ind) => {
                  return (
                    <Text
                      onPress={() => {
                        setmonth(item);
                        setmonthInd(ind);
                      }}
                      style={styles.scrollViewTextStyle}>
                      {item}
                    </Text>
                  );
                })}
                <View style={{height: 45}} />
              </ScrollView>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.selectedYearStyle}>{year}</Text>
              <ScrollView
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingHorizontal: 20,
                }}>
                {yearArray.map(item => {
                  return (
                    <Text
                      onPress={() => {
                        setyear(item);
                      }}
                      style={styles.scrollViewTextStyle}>
                      {item}
                    </Text>
                  );
                })}
                <View style={{height: 45}} />
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity
            style={styles.letsGoButtonStyle}
            onPress={() => {
              props.setselectedYear(year);
              props.setselectedMonth(monthInd);
              props.setmodalVisibl(false);
            }}>
            <Text style={styles.letsGoButtonText}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  cemterView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalStyle: {
    backgroundColor: '#e5faf5',
    height: 300 * proportionHeight,
    width: '90%',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 55,
    justifyContent: 'space-evenly',
  },
  letsGoButtonStyle: {
    width: '90%',
    height: 50 * proportionHeight,
    backgroundColor: '#5367ff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letsGoButtonText: {
    color: 'white',
    fontSize: 20,
  },
  selectedYearStyle: {
    color: 'black',
    nVertical: 4,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30 * proportionHeight,
    marginTop: 10 * proportionHeight,
  },
  scrollViewTextStyle: {
    color: 'black',
    marginVertical: 4 * proportionHeight,
    fontSize: 20,
    paddingVertical: 3 * proportionHeight,
  },
});
export default modal;
