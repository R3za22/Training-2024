import { Colors } from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

const Instructiontext = ({
  children,
  style,
}: {
  children: string;
  style?: any;
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
export default Instructiontext;
