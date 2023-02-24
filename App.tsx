/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './component/LoginScreen';
import OnBoardScreen from './component/OnBoardScreen';
import SignUp from './component/SignUp';
const Stack = createNativeStackNavigator();
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={OnBoardScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
