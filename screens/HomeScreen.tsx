import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';
import { useCart } from '../CartContext';

const products = [
  { id: 1, name: 'Blond Shirt', price: 2530, image: require('../assets/shirt.jpg') },
  { id: 2, name: 'Blond Tote Bag', price: 1100, image: require('../assets/tote.jpg') },
  { id: 3, name: 'Frank Ocean Crochet Arigumi', price: 1500, image: require('../assets/crochet.jpg') },
  { id: 4, name: 'Channel Orange Hoodie', price: 4750, image: require('../assets/channel.jpg') },
  { id: 5, name: 'F.Ocean Phone Case', price: 990, image: require('../assets/case.jpg') },
  { id: 6, name: 'Blond Ring', price: 14690, image: require('../assets/ring.jpg') },
  { id: 7, name: 'Blond Vinyl', price: 6787, image: require('../assets/vinyl.jpg') },
  { id: 8, name: 'Blond Book', price: 1313, image: require('../assets/book.jpg') },
  { id: 9, name: 'Channel Orange Poster', price: 1489, image: require('../assets/posterco.jpg') },
  { id: 10, name: 'Frank Blonde Vinyl CD Wall Mirror', price: 11750, image: require('../assets/mirror.jpg') },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useCart();
  const scheme = useColorScheme();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <View style={[styles.container, scheme === 'dark' ? styles.darkMode : styles.lightMode]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() => setSelectedProduct(selectedProduct === item.id ? null : item.id)}
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₱{item.price.toLocaleString()}</Text>
            <Text style={styles.productExcluded}>Excluded from promotions</Text>
            {selectedProduct === item.id && (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        )}
      />

      {/* "Go to Cart" Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.checkoutText}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  lightMode: {
    backgroundColor: '#F8F8F8',
  },
  darkMode: {
    backgroundColor: '#1C1C1E',
  },
  row: {
    justifyContent: 'space-between',
  },
  productCard: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  productExcluded: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
