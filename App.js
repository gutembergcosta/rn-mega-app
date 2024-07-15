import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import InfoScreen from './src/screens/InfoScreen';
import InfoScreen02 from './src/screens/InfoScreen02';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarStyle: ((route) => {
        const routeName = route.state
          ? route.state.routes[route.state.index].name
          : '';
        if (routeName === 'Info02') {
          return { display: 'none' };
        }
        return;
      })(route),
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Info02" component={InfoScreen02} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

