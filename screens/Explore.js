import React from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, Image, TextInput, 
  FlatList, TouchableOpacity, Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; 

const EXPLORE_DATA = [
  { id: '1', name: 'Fresh Fruits & Vegetables', image: require('../assets/anh/vegetable.png'), bgColor: '#E5F3EA', borderColor: '#53B175' },
  { id: '2', name: 'Cooking Oil & Ghee', image: require('../assets/anh/oil.png'), bgColor: '#FEF6ED', borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', image: require('../assets/anh/meat.png'), bgColor: '#FDEAE8', borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: require('../assets/anh/snacks.png'), bgColor: '#F4EBF7', borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: require('../assets/anh/egg.png'), bgColor: '#FFF8E1', borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', image: require('../assets/anh/nuoc.png'), bgColor: '#EDF7FC', borderColor: '#B7DFF5' },
];

const ExploreScreen = ({ navigation }) => {

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}
      onPress={() => {
        // Chỉ điều hướng khi nhấn đúng vào ô Beverages (id là '6')
        if (item.id === '6') {
          navigation.navigate('Beverages');
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      <View style={styles.searchSection}>
        <Image source={require('../assets/anh/timkiem.png')} style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Search Store"
          placeholderTextColor="#7C7C7C"
        />
      </View>

      <FlatList
        data={EXPLORE_DATA}
        renderItem={renderCategoryCard}
        keyExtractor={item => item.id}
        numColumns={2} 
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', marginTop: 15, marginBottom: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  searchSection: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F2F3F2', 
    marginHorizontal: 20, 
    borderRadius: 15, 
    paddingHorizontal: 15 
  },
  searchIcon: { width: 18, height: 18, marginRight: 10 },
  searchInput: { height: 50, flex: 1, fontSize: 16 },
  listContainer: { paddingHorizontal: 20, paddingTop: 20 },
  card: {
    width: cardWidth,
    height: 190, 
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20 
  },
  cardImage: { width: '100%', height: 90, marginBottom: 20 },
  cardName: { fontSize: 16, fontWeight: '600', color: '#181725', textAlign: 'center' }
});

export default ExploreScreen;