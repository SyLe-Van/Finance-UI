import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Input from "../components/Input";
export default function GroupSpending() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.infoContainer}>
        <View style={styles.name_cost}>
          <Input title="Cost" placeholder="10.90 $" width={150} />
          <Input title="Cost" placeholder="10.90 $" width={150} />
        </View>
        <View></View>
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
    marginTop: 70,
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundColor: "#EDA2DC",
  },
  name_cost: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
  },
});
