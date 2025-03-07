import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import LandingScreen from './screens/LandingScreen';
import { CartProvider } from './CartContext';

const Stack = createStackNavigator();

const BackButton = ({ navigation }) => (
  <TouchableOpacity
    style={{ marginLeft: 10, padding: 10 }}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="chevron-back" size={28} color="#007AFF" />
  </TouchableOpacity>
);

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen 
            name="Landing" 
            component={LandingScreen} 
            options={{ headerShown: false }} 
          />

          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: "All Products",
              headerShown: true,
              headerLeft: () => null, 
            }} 
          />

          <Stack.Screen 
            name="Cart" 
            component={CartScreen} 
            options={({ navigation }) => ({
              title: "Cart",
              headerLeft: () => <BackButton navigation={navigation} />,
            })} 
          />

          <Stack.Screen 
            name="Checkout" 
            component={CheckoutScreen} 
            options={({ navigation }) => ({
              title: "Checkout",
              headerLeft: () => <BackButton navigation={navigation} />,
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
