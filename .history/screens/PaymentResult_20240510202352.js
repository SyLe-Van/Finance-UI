import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
export default function Result() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Payer</Text>
        <Text tyle={styles.text}>Money</Text>
        <Text tyle={styles.text}>Receiver</Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    marginTop: 10,
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#EDA2DC",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
