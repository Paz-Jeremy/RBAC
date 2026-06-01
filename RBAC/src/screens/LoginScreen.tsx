import { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Alert } from "react-native";
import CustomButton from "../components/CustomButton";
import { Picker } from "@react-native-picker/picker";
import { useAuth, UserRole } from "../context/AuthContext";

export default function LoginScreen() {
  const [role, setRole] = useState<UserRole>("common");

  const { login } = useAuth();

  const handleLogin = () => {
    login(role);
  };

  return (
    // SafeAreaView asegura que el contenido no quede debajo del reloj o el notch
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {/* Textos de bienvenida estilizados */}
          <View style={styles.headerContainer}>
            <Text style={styles.title}>¡Bienvenido!</Text>
            <Text style={styles.subtitle}>
              Por favor, elije tu rol para iniciar sesión.
            </Text>
          </View>

          <Picker
            selectedValue={role}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Picker.Item label="Común" value="common" />
            <Picker.Item label="Administrador" value="admin" />
          </Picker>

          {/* Contenedor del botón */}
          <View style={styles.buttonWrapper}>
            <CustomButton title="Iniciar Sesión" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  headerContainer: {
    marginBottom: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  buttonWrapper: {
    marginTop: 10,
  },
});
