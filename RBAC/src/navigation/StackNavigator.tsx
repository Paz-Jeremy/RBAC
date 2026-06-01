import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import TabNavigator from "./TabsNavigator";
import { useAuth } from "../context/AuthContext";

//1. declarar tipado para pantallas y sus parametros
export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
};

//2. crear el stack navigator el cual va a manejar la navegacion
const Stack = createNativeStackNavigator<RootStackParamList>();

//3. utilizar el stack
export default function StackNavigator() {

  const {role, isLoggedIn} = useAuth();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <Stack.Screen key={role ?? 'guest'} name="Tabs">
            {() => <TabNavigator role={role ?? 'common'} />}
          </Stack.Screen>
        )}
    </Stack.Navigator>
  );
}
