import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { UserRole } from "../context/AuthContext";

//1. declarar tipado para pantallas y sus parametros
type TabsParamList = {
  Home: undefined;
  Settings: undefined;
};

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el tab navigator
export default function TabNavigator({ role }: { role: UserRole }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
      initialRouteName={role === "admin" ? "Settings" : "Home"}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="home" color={color} size={size} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      {role === "admin" && (
        <Tab.Screen
          options={{
            title: "Configuraciones",
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons name="settings" color={color} size={size} />
              );
            },
          }}
          name="Settings"
          component={SettingsScreen}
        />
      )}
    </Tab.Navigator>
  );
}
