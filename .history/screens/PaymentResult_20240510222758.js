import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Display from "../components/Display";
export default function Result() {
  return (
    <LinearGradient
      colors={["#FDCEDF", "#BEADFA"]}
      style={styles.rootContainer}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Payer</Text>
          <Text style={styles.text}>Money</Text>
          <Text style={styles.text}>Receiver</Text>
        </View>
        <View style={styles.info}>
          <Display title="Quang" width={95} />
          <Display title="29.9$" width={95} />
          <Display title="Thuong" width={95} />
        </View>
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
    height: 180,
    width: 350,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#EDA2DC",
    alignSelf: "stretch",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: 350,
    marginTop: 20,
  },
});
