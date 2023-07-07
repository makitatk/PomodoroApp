import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({ setTime, currentTime, setCurrentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;

    setCurrentTime(index);
    setTime(newTime * 60);
  }

  console.log(currentTime);

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.optionStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  optionStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "white",
    marginVertical: 20,
    alignItems: "center",
  },
});
