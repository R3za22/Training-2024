import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: { children: ReactNode }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // android
    elevation: 5,
    // ios
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
