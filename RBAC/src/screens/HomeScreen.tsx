import { View, StyleSheet, Text } from "react-native";
import { useAuth } from "../context/AuthContext";
import CustomButton from "../components/CustomButton";

export function HomeScreen() {
  const { role, logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Rol actual: {role}</Text>
      <CustomButton
        variant="secondary"
        title={"Cerrar Sesión"}
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
