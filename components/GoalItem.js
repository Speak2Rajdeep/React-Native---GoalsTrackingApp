import { StyleSheet, View, Text } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    color: "white",
    backgroundColor: "cyan",
  },
  goalText: {
    color: "white",
  },
});
