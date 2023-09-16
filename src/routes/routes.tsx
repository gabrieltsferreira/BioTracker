import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons'

import Home from '../screens/Home'
import H2O from '../screens/H2O'
import Food from '../screens/Food'
import Exercises from '../screens/Exercises'
import Dictionary from '../screens/Dictionary';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused }) => {
            if (focused) {
              return <Ionicons 
                        name='home'  
                        color={color} 
                        size={size} 
                      />
            }
            else {
              return <Ionicons 
                        name='home-outline'  
                        color={color} 
                        size={size} 
                      />
            }
          }
        }} 
      />

      <Tab.Screen 
        name='H2O' 
        component={H2O}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Ionicons 
                        name='water'
                        color={color}
                        size={size}
                      />
            }
            else {
              return <Ionicons 
                        name='water-outline'
                        color={color}
                        size={size}
                      />
            }
          }
        }} 
      />

      <Tab.Screen 
        name='Food' 
        component={Food}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Ionicons
                        name='fast-food'
                        color={color}
                        size={size}
                      />
            }
            else {
              return <Ionicons
                        name='fast-food-outline'
                        color={color}
                        size={size}
                      />
            }
          }
        }} 
      />
      
      <Tab.Screen 
        name='Exercises' 
        component={Exercises}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Ionicons
                        name='barbell'
                        color={color}
                        size={size}
                      />
            }
            else {
              return <Ionicons
                        name='barbell-outline'
                        color={color}
                        size={size}
                      />
            }
          }
        }} 
      />

      <Tab.Screen
        name='Dictionary'
        component={Dictionary}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            if (focused) {
              return <Ionicons
                        name='book'
                        color={color}
                        size={size}
                      />
            }
            else {
              return <Ionicons
                        name='book-outline'
                        color={color}
                        size={size}
                      />
            }
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes