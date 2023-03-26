import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Game from './screens/game/game';
import StageSelect from './screens/stageSelect/stageSelect';
import Home from './screens/home/home';
import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StageSelect" component={StageSelect} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
