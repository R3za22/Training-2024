import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const GuessLogItem = ({
  roundNumber,
  guess,
}: {
  roundNumber: number;
  guess: number;
}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  itemText: { fontFamily: "open-sans" },
});

export default GuessLogItem;
