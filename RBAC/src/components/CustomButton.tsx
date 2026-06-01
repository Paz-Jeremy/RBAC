import { Text, TouchableOpacity, StyleSheet } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
}: CustomButtonProps) {
  const styles = getStyles(variant);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}> {title} </Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: "primary" | "secondary" | "tertiary") =>
  StyleSheet.create({
    button: {
      borderRadius: 6,
      //operador ternario
      backgroundColor:
        variant === "primary"
          ? "#2563eb"
          : variant === "secondary"
            ? "#dc2626"
            : "transparent",
      padding: 12,
      width: "auto",
    },
    buttonText: {
      color:
        variant === "primary"
          ? "#fff"
          : variant === "secondary"
            ? "#fff"
            : "#4b5563",
      textAlign: "center",
    },
  });
