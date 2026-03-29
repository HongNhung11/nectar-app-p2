import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableOpacity, FlatList, Dimensions
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2; // Chia 2 cột, trừ đi padding lề

const BEVERAGES_DATA = [
  { id: '1', name: 'Diet Coke', spec: '355ml, Price', price: '$1.99', image: require('../assets/anh/coke.png') },
  { id: '2', name: 'Sprite Can', spec: '325ml, Price', price: '$1.50', image: require('../assets/anh/sprite.png') },
  { id: '3', name: 'Apple & Grape Juice', spec: '2L, Price', price: '$15.99', image: require('../assets/anh/treetop.png') },
  { id: '4', name: 'Orange Juice', spec: '2L, Price', price: '$15.99', image: require('../assets/anh/nuoccam.png') },
  { id: '5', name: 'Coca Cola Can', spec: '325ml, Price', price: '$4.99', image: require('../assets/anh/coca.png') },
  { id: '6', name: 'Pepsi Can', spec: '330ml, Price', price: '$4.99', image: require('../assets/anh/pepsi.png') },
];

const BeveragesScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
        <Text style={styles.productSpec}>{item.spec}</Text>
      </View>

      <View style={styles.cardFooter}>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialCommunityIcons name="tune-variant" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Grid Danh sách sản phẩm */}
      <FlatList
        data={BEVERAGES_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  backBtn: { padding: 5 },
  filterBtn: { padding: 5 },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    backgroundColor: '#FFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 15,
    marginBottom: 15,
  },
  imageContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    height: 65, // Giữ độ cao cố định để các card đều nhau
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    lineHeight: 20,
  },
  productSpec: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  addButton: {
    backgroundColor: '#53B175',
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BeveragesScreen;