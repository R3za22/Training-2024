import { StyleSheet, Text } from "react-native";

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
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
