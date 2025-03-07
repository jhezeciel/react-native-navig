import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, useColorScheme, Image } from 'react-native';
import { useCart } from '../CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cart, setCart } = useCart();
  const scheme = useColorScheme();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Alert.alert('Checkout Successful', 'Your order has been placed.', [
      {
        text: 'OK',
        onPress: () => {
          setCart([]); 
          navigation.navigate('Home');
        },
      },
    ]);
  };

  return (
    <View style={[styles.container, scheme === 'dark' ? styles.darkMode : styles.lightMode]}>
      <Text style={styles.title}>Order Summary</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>No items in your cart.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>₱{item.price.toLocaleString()} x {item.quantity}</Text>
              </View>
            </View>
          )}
        />
      )}
      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalPrice}>Total: ₱{totalPrice.toLocaleString()}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.checkoutText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  lightMode: {
    backgroundColor: '#F8F8F8',
  },
  darkMode: {
    backgroundColor: '#1C1C1E',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyCartText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
  },
  productPrice: {
    fontSize: 14,
    color: '#777',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  checkoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutScreen;
