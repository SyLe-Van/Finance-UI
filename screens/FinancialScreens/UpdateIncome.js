import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import { Dropdown } from "react-native-element-dropdown";
import { format } from "date-fns";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { LinearGradient } from "expo-linear-gradient";
const data = [
  { label: "Salary", value: "0" },
  { label: "Allowance", value: "0" },
  { label: "Bonus", value: "0" },
  { label: "Investment", value: "0" },
];
const UpdateIncome = ({ navigation, route }) => {
  const { id, updateData, setUpdateData } = useContext(AuthContext);
  const [isAddExpensesSelected, setIsAddExpensesSelected] = useState(false);
  const [isAddIncomeSelected, setIsAddIncomeSelected] = useState(true);
  const [day, setDay] = useState(format(new Date(), "yyyy-MM-dd"));
  const [numberIncome, setNumberIncome] = React.useState("");
  const [note, setNote] = React.useState("");
  const [incomeCategory, setIncomeCategory] = useState("");
  const [selectedIncomeDate, setSelectedIncomeDate] = useState(new Date());
  const { itemId } = route.params;

  useEffect(() => {
    fetchIncomeDetails(itemId);
  }, [itemId]);

  const fetchIncomeDetails = async (itemId) => {
    try {
      const response = await axios.get(
        `https://finance-api-kgh1.onrender.com/api/getIncome/${id}/${itemId}`
      );
      const incomeDetails = response.data;
      // Update state with fetched expense details
      setNumberIncome(
        incomeDetails.value ? incomeDetails.value.toString() : ""
      );
      setNote(incomeDetails.note);
      setIncomeCategory(incomeDetails.categoriesIncome);
      setDay(incomeDetails.date);
      setSelectedIncomeDate(new Date(incomeDetails.date));
      setUpdateData(!updateData);
    } catch (error) {
      console.error("Error fetching expense details: ", error);
    }
  };
  const handleSubmitIncome = async () => {
    try {
      const updatedIncome = {
        categoriesIncome: incomeCategory,
        date: day,
        value: parseFloat(numberIncome),
        note: note,
      };
      await axios.put(
        `https://finance-api-kgh1.onrender.com/api/updateIncome/${id}/${itemId}`,
        updatedIncome
      );
      setUpdateData((prevData) => !prevData);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error updating income: ", error);
      Alert.alert("Error", "Failed to update income. Please try again later.");
    }
  };

  useFocusEffect(() => {
    setIsAddExpensesSelected(false);
    setIsAddIncomeSelected(true);
  });

  useEffect(() => {
    setSelectedIncomeDate(new Date());
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
      setSelectedIncomeDate(selectedIncomeDate);
      setDay(formattedDate);
    }
  };

  const handleDropdownFocus = () => {};

  const handleDropdownBlur = () => {};
  const handleCategoryPress = (category) => {
    setIncomeCategory(category);
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        item === incomeCategory ? styles.selectedCategoryItem : {},
      ]}
      onPress={() => handleCategoryPress(item)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.rootContainer}>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <View
              style={[
                styles.button,
                isAddExpensesSelected ? styles.selectedButton : {},
              ]}
              onPress={() => {
                setIsAddExpensesSelected(true);
                setIsAddIncomeSelected(false);
                navigation.navigate("AddExpenses");
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
            </View>
            <TouchableOpacity
              style={[
                styles.button,
                isAddIncomeSelected ? styles.selectedButton : {},
              ]}
              onPress={() => {
                setIsAddExpensesSelected(false);
                setIsAddIncomeSelected(true);
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
          {!isAddExpensesSelected ? (
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
                  selectedDayColor="#66ff33"
                  selectedDayTextColor="#000000"
                  scaleFactor={375}
                  textStyle={{
                    color: "#000000",
                  }}
                  selected={selectedIncomeDate}
                  onDateChange={onDateChange}
                />
              </View>
              <View style={styles.horizontalLine} />
              <View style={styles.inputContainer}>
                <View style={[styles.income]}>
                  <Text style={[styles.text]}>Income money</Text>
                  <TextInput
                    placeholder="$"
                    value={numberIncome}
                    style={[styles.TextInputContainer, { height: 30 }]}
                    onChangeText={(numberIncome) =>
                      setNumberIncome(numberIncome)
                    }
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.income}>
                  <Text style={[styles.text, { marginLeft: -63 }]}>Date</Text>
                  <View>
                    <Text
                      style={[
                        styles.dateTimeNow,
                        styles.input,
                        { marginTop: 6, fontSize: 18 },
                      ]}
                    >
                      {day}
                    </Text>
                  </View>
                </View>
                <View style={styles.income}>
                  <Text style={[styles.text, { marginLeft: -15 }]}>
                    Description
                  </Text>
                  <TextInput
                    placeholder="Typing description"
                    value={note}
                    onChangeText={(note) => setNote(note)}
                    style={[styles.TextInputContainer, { marginRight: -15 }]}
                  />
                </View>
                <View style={[styles.income, { marginBottom: 10 }]}>
                  <Text style={[styles.text, { marginRight: 57 }]}>
                    Category
                  </Text>
                  <Dropdown
                    style={styles.dropdown}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder={incomeCategory}
                    label={incomeCategory}
                    onFocus={handleDropdownFocus}
                    onBlur={handleDropdownBlur}
                    onChange={(item) => {
                      setIncomeCategory(item.label);
                    }}
                  />
                </View>
              </View>
            </View>
          ) : null}
          <TouchableOpacity onPress={handleSubmitIncome}>
            <LinearGradient
              colors={["#F875AA", "#BEADFA"]}
              style={styles.buttonAdd}
            >
              <Text
                style={{ color: "#ffffff", fontSize: 19, textAlign: "center" }}
              >
                Update your income
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
    marginTop: 20,
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
  horizontalLine: {
    marginVertical: 8,
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
  addContainer: {
    padding: 10,
    borderRadius: 10,
  },
  dateTimeNow: {
    padding: 7,
    borderRadius: 10,
  },
  addContainer: {
    padding: 10,
    borderRadius: 10,
  },
  income: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    // marginBottom: 5,
    backgroundColor: "#ffffff",
    // paddingLeft: 10,
    // paddingRight: 10,
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
    fontSize: 18,
    marginTop: 10,
    borderRadius: 10,
    width: 220,
    height: 50,
  },
  inputContainer: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    // backgroundColor: "black",
    borderRadius: 10,
    height: 210,
    justifyContent: "space-around",
  },
  buttonAdd: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
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

  categoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 8,
  },

  arrowButton: {
    padding: 10,
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
  calendarView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 0,
  },
  expenseContainer: {
    lexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 200,
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
});

export default UpdateIncome;
