import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Display from "../components/Display";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
export default function Result() {
  const [totalSpending, setTotalSpending] = useState("");
  const [payments, setPayments] = useState([]);
  const [averageSpending, setAverageSpending] = useState("");
  const { groupId } = useContext(AuthContext);
  const formatNumberWithDot = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  useEffect(() => {
    axios
      .get(
        `https://finance-api-kgh1.onrender.com/api/calculateGroup/${groupId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data.recommendations.map((payment) => ({
          ...payment,
          money_pay: formatNumberWithDot(payment.money_pay.toFixed(3)),
        }));
        setPayments(data);
        setTotalSpending(
          formatNumberWithDot(response.data.total_payment.toFixed(0))
        );
        setAverageSpending(
          formatNumberWithDot(response.data.average.toFixed(0))
        );
      });
  }, []);
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.totalSpedingDisplay}>
        <Display
          title="Total Spending: "
          value={`${totalSpending} VND`}
          width={300}
        />
        <Display title="Avarage Spending:" value={`${averageSpending} VND`} />
      </View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Payer</Text>
          <Text style={styles.text}>Money</Text>
          <Text style={styles.text}>Receiver</Text>
        </View>
        {payments.map((payment, index) => (
          <View style={styles.info} key={index}>
            <Display title={payment.pay_people} width={95} />
            <Display title={`${payment.money_pay}`} width={95} />
            <Display title={payment.receive_people} width={95} />
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 40,
    width: 350,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#EDA2DC",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
    marginTop: 20,
  },
  totalSpedingDisplay: {
    marginTop: 30,
  },
});
