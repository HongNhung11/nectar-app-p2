import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import đầy đủ các màn hình
import HomeScreen from './screens/HomeScreen'; 
import ExploreScreen from './screens/Explore'; 
import BeveragesScreen from './screens/Beverages'; 
import ProductDetailScreen from './screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Explore" 
          component={ExploreScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Beverages" 
          component={BeveragesScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
