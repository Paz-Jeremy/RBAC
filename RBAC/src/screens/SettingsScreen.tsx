import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import CustomButton from "../components/CustomButton";

export function SettingsScreen() {
  const { role, logout } = useAuth();

  if (role !== "admin") {
    <View style={styles.container}>
      <Text style={styles.title}>Acceso denegado</Text>
    </View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>estas en Settings</Text>

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
    marginBottom: 20,
    textAlign: "center",
  },
});
