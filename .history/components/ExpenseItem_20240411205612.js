import React from "react";
import { View, Text } from "react-native";

export default function ExpenseItem({ data, type }) {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>
        {type}
      </Text>
      {data.length > 0 ? (
        data.map((item, index) => (
          <View key={index} style={{ flexDirection: "row", marginBottom: 5 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15, width: 110 }}>
                {item.category}
              </Text>
              <Text style={{ fontSize: 13, width: 110 }}>{item.note}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: type === "Income" ? "#1F8A70" : "#D80032",
                  fontWeight: "bold",
                  fontSize: 17,
                }}
              >
                {type === "Income" ? "+ " : "- "} {parseFloat(item.value || 0)}{" "}
                $
              </Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>{item.date}</Text>
            </View>
          </View>
        ))
      ) : (
        <Text>No {type.toLowerCase()}</Text>
      )}
    </View>
  );
}
