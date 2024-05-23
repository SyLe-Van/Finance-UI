import React, { useEffect, useState, useContext } from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useNavigation } from "@react-navigation/native";

const ChartYear = ({ navigation }) => {
  const [dataChartYearExpenses, setDataChartYearExpenses] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });
  const [dataChartYearIncome, setDataChartYearIncome] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });
  const { updateData, setUpdateData, id } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/getTotalExpensesMonthByYear/${id}/2024`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        let data = response.data;
        setDataChartYearExpenses(data);
      })
      .catch((error) => {});

    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/getTotalIncomesMonthByYear/${id}/2024`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        let data = response.data;
        setDataChartYearIncome(data);
      })
      .catch((error) => {});
  }, [updateData]);

  const { width: screenWidth } = Dimensions.get("window");
  return (
    <ScrollView>
      <LinearGradient colors={["#BEADFA", "#FDCEDF"]} style={styles.container}>
        <View>
          <View style={styles.chartline1}>
            <Text style={styles.text}>Yearly chart of expenses</Text>
            {dataChartYearExpenses ? (
              <LineChart
                data={dataChartYearExpenses}
                width={screenWidth}
                height={256}
                verticalLabelRotation={0}
                chartConfig={{
                  backgroundColor: "#ffff",
                  backgroundGradientFrom: "#F78CA2",
                  backgroundGradientTo: "#A367B1",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#DA0C81",
                  },
                }}
                bezier
              />
            ) : (
              <Text>Loading or No Data Available</Text>
            )}
          </View>
          <View style={styles.chartline}>
            <Text style={styles.text}>Yearly chart of income</Text>
            {dataChartYearIncome ? (
              <LineChart
                data={dataChartYearIncome}
                width={screenWidth}
                height={256}
                verticalLabelRotation={0}
                chartConfig={{
                  backgroundColor: "#ffff",
                  backgroundGradientFrom: "#F78CA2",
                  backgroundGradientTo: "#A367B1",
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#DA0C81",
                  },
                }}
                bezier
              />
            ) : (
              <Text>Loading or No Data Available</Text>
            )}
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: 450,
    height: 1000,
  },
  chartline: {
    marginTop: 30,
    marginRight: 20,
  },
  chartline1: {
    marginRight: 10,
    marginTop: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    color: "#000000",
    marginTop: 10,
  },
});
export default ChartYear;
