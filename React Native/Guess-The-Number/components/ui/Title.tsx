import { StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 12,
  },
});

export default Title;
