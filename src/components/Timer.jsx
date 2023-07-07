import { View, Text, StyleSheet } from "react-native";

export default function Timer({ time }) {
  formatedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 15,
  },

  timer: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
});
