import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import TabOne from '../screens/TabOne'

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="TabOne" component={TabOne} />
    </Tab.Navigator>
  );
}

export default Routes