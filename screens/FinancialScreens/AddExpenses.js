import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import { Dropdown } from "react-native-element-dropdown";
import { format } from "date-fns";

import { AuthContext } from "../AuthContext";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
const data = [
  { label: "Food", value: "0" },
  { label: "Rent", value: "0" },
  { label: "Shopping", value: "0" },
  { label: "Entertainment", value: "0" },
  { label: "Transport", value: "0" },
];
const AddExpenses = ({ navigation }) => {
  const {
    id,
    updateData,
    setUpdateData,
    updateDataExpenses,
    setUpdateDataExpenses,
  } = useContext(AuthContext);
  const [isAddExpensesSelected, setIsAddExpensesSelected] = useState(true);
  const [isAddIncomeSelected, setIsAddIncomeSelected] = useState(false);
  const [number, setNumber] = React.useState("");
  const [text, setText] = React.useState("");
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(data[0].label);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [day, setDay] = useState(format(new Date(), "yyyy-MM-dd"));
  const inputRef = React.useRef(null);

  const initialCategoryValues = {
    Food: 0,
    Rent: 0,
    Shopping: 0,
    Entertainment: 0,
    Transportation: 0,
  };

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);
  const onDateChange = (date, type) => {
    if (type === "DATE_NOW") {
      return;
    } else {
      const selectedDate = date.toDate();
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const formattedDate = `${year}-${month}-${day}`;
      setSelectedDate(selectedDate);
      setDay(formattedDate);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item === selectedCategory ? styles.selectedCategoryItem : {},
      ]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );
  // const [status, setStatus] = useState(False);
  const handleSubmit = () => {
    if (number.trim() === "") {
      Alert.alert("Please type your expense!");
      return;
    }
    const newExpense = { number, text, day, category: selectedCategory };
    setExpenses([...expenses, newExpense]);
    setNumber("");
    setText("");

    const objectExpenses = {
      categoriesExpenses: selectedCategory,
      date: day,
      value: number,
      userId: id,
      note: text,
    };
    console.log(objectExpenses.value);
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/checkExpensesLowIcome/${id}/${objectExpenses.value}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.check == true) {
          axios
            .post(
              `https://finance-api-kgh1.onrender.com/api/addExpenses`,
              objectExpenses,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              setUpdateData(!updateData);
              // setUpdateDataExpenses(!updateDataExpenses);
              navigation.navigate("Home");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          Alert.alert("Income money smaller than Expense money");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const nav = useNavigation();
  useFocusEffect(() => {
    setIsAddExpensesSelected(true);
    setIsAddIncomeSelected(false);
  });

  const handleDropdownFocus = () => {};

  const handleDropdownBlur = () => {};

  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView behavior="position">
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                isAddExpensesSelected ? styles.selectedButton : {},
              ]}
              onPress={() => {
                setIsAddExpensesSelected(true);
                setIsAddIncomeSelected(false);
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  isAddExpensesSelected ? styles.selectedText : {},
                ]}
              >
                Expense
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                isAddIncomeSelected ? styles.selectedButton : {},
              ]}
              onPress={() => {
                setIsAddExpensesSelected(false);
                setIsAddIncomeSelected(true);
                navigation.navigate("AddIncome");
              }}
            >
              <Text
                style={[
                  styles.buttonText,
                  isAddIncomeSelected ? styles.selectedText : {},
                ]}
              >
                Income
              </Text>
            </TouchableOpacity>
          </View>
          {isAddExpensesSelected ? (
            <View style={styles.addContainer}>
              <View style={styles.calendarView}>
                <CalendarPicker
                  startFromMonday={true}
                  allowRangeSelection={false}
                  minDate={new Date(2018, 1, 1)}
                  maxDate={new Date(2050, 6, 3)}
                  weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
                  months={[
                    "January",
                    "Febraury",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                  previousTitle="Previous"
                  nextTitle="Next"
                  todayBackgroundColor="#e6ffe6"
                  selectedDayColor="#BEADFA"
                  selectedDayTextColor="#000000"
                  scaleFactor={375}
                  textStyle={{
                    color: "#000000",
                  }}
                  selected={selectedDate}
                  onDateChange={onDateChange}
                />
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.inputContainer}>
                <View style={[styles.expense]}>
                  <Text style={[styles.text, { marginLeft: 2 }]}>
                    Expense money
                  </Text>
                  <TextInput
                    placeholder="$"
                    value={number}
                    style={[styles.TextInputContainer, { height: 30 }]}
                    onChangeText={(number) => setNumber(number)}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.expense}>
                  <Text style={[styles.text, { marginLeft: -68 }]}>Date</Text>
                  <View>
                    <Text
                      style={[
                        styles.dateTimeNow,
                        styles.input,
                        { marginTop: 6 },
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                </View>
                <View style={styles.expense}>
                  <Text style={[styles.text, { marginLeft: -15 }]}>
                    Description
                  </Text>
                  <TextInput
                    placeholder="Typing description"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    style={[styles.TextInputContainer, { marginRight: -15 }]}
                    multiline={true}
                    numberOfLines={4}
                    onContentSizeChange={(e) => {
                      const { contentSize } = e.nativeEvent;
                      if (contentSize.height > 220) {
                        setText(text + "\n");
                      }
                    }}
                  />
                </View>
                <View style={[styles.expense, { marginBottom: 10 }]}>
                  <Text style={[styles.text, { marginRight: 57 }]}>
                    Category
                  </Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder={selectedCategory}
                    label={selectedCategory}
                    onFocus={handleDropdownFocus}
                    onBlur={handleDropdownBlur}
                    onChange={(item) => {
                      setSelectedCategory(item.label);
                    }}
                  />
                </View>
              </View>
            </View>
          ) : null}
          <TouchableOpacity onPress={handleSubmit}>
            <LinearGradient
              colors={["#F875AA", "#BEADFA"]}
              style={styles.buttonAdd}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 19, textAlign: "center" }}
              >
                Add your expense
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FDCEDF",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 2,
    marginVertical: 2,
    borderRadius: 15,
    backgroundColor: "#ffffff",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
  },
  button: {
    flex: 1,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  selectedButton: {
    borderRadius: 15,
    backgroundColor: "#ED9ED6",
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  selectedText: {
    color: "white",
    paddingTop: 15,
    paddingBottom: 15,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textContainer: {
    marginLeft: 16,
  },
  lastMessage: {
    fontSize: 16,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  dateTimeNow: {
    borderRadius: 10,
    fontSize: 17,
  },
  addContainer: {
    padding: 10,
    borderRadius: 10,
  },
  expense: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginRight: 10,
    fontSize: 17,
    marginTop: 10,
  },
  TextInputContainer: {
    borderWidth: 1,
    borderColor: "#A5A5A5",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    borderRadius: 10,
    width: 220,
    height: 50,
  },
  buttonAdd: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 15,
    marginBottom: 30,
    paddingBottom: 10,
    paddingTop: 12,
  },
  categoryItem: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  categoryText: {
    fontSize: 17,
  },
  dropdown: {
    width: 220,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
  },

  toggleCategoriesButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  flatList: {
    marginTop: 10,
  },
  toggleCategoriesButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  horizontalLine: {
    marginVertical: 8,
  },
  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    // backgroundColor: "black",
    overflow: "hidden",
    borderRadius: 10,
    height: 210,
    justifyContent: "space-around",
  },
  arrowButton: {
    padding: 10,
  },
  calendarView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 0,
  },
});
export default AddExpenses;
