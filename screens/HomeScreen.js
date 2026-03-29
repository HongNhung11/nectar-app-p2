import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image, TextInput,
  ScrollView, TouchableOpacity, FlatList, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const EXCLUSIVE_OFFERS = [
  { id: '1', name: 'Organic Bananas', spec: '7pcs, Priceg', price: '$4.99', image: require('../assets/anh/chuoi.png') },
  { id: '2', name: 'Red Apple', spec: '1kg, Priceg', price: '$4.99', image: require('../assets/anh/tao.png') },
];

const BEST_SELLING = [
  { id: '4', name: 'Bell Pepper Red', spec: '1kg, Priceg', price: '$4.99', image: require('../assets/anh/A2.png') },
  { id: '5', name: 'Ginger', spec: '250g, Priceg', price: '$4.99', image: require('../assets/anh/gung.png') },
];

const GROCERY_CATEGORIES = [
  { id: 'c1', name: 'Pulses', color: '#FEF1E4', image: require('../assets/anh/pulses.png') },
  { id: 'c2', name: 'Rice', color: '#E5F3EA', image: require('../assets/anh/rice.png') },
];

const GROCERY_PRODUCTS = [
  { id: '6', name: 'Beef Bone', spec: '1kg, Priceg', price: '$4.99', image: require('../assets/anh/thit.png') },
  { id: '7', name: 'Broiler Chicken', spec: '1kg, Priceg', price: '$4.99', image: require('../assets/anh/ga.png') },
];

const HomeScreen = ({ navigation }) => {
  
  const renderProductCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.productSpec}>{item.spec}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => {
           
            if (item.name.includes('Apple')) {
              navigation.navigate('ProductDetail');
            }
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View style={styles.header}>
          <Image source={require('../assets/anh/carrotmau.png')} style={styles.logo} />
          <View style={styles.locationRow}>
            <Text style={styles.locationText}>📍 Dhaka, Banassre</Text>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Image source={require('../assets/anh/timkiem.png')} style={styles.searchIcon} />
          <TextInput placeholder="Search Store" style={styles.searchInput} />
        </View>

        <View style={styles.bannerContainer}>
          <Image source={require('../assets/anh/banner.png')} style={styles.bannerImage} resizeMode="stretch" />
        </View>

        <Section title="Exclusive Offer" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={EXCLUSIVE_OFFERS}
          renderItem={renderProductCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listPadding}
        />

        <Section title="Best Selling" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BEST_SELLING}
          renderItem={renderProductCard}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listPadding}
        />

        <Section title="Groceries" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={GROCERY_CATEGORIES}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listPadding}
          renderItem={({ item }) => (
            <View style={[styles.catCard, { backgroundColor: item.color }]}>
              <Image source={item.image} style={styles.catImage} resizeMode="contain" />
              <Text style={styles.catText}>{item.name}</Text>
            </View>
          )}
        />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={GROCERY_PRODUCTS}
          renderItem={renderProductCard}
          keyExtractor={item => item.id}
          contentContainerStyle={[styles.listPadding, { marginTop: 15 }]}
        />
      </ScrollView>

      {/* --- BOTTOM NAVIGATION ĐÃ GẮN ĐIỀU HƯỚNG --- */}
      <View style={styles.bottomTab}>
        <TabItem 
          icon={require('../assets/anh/shop.png')} 
          label="Shop" 
          active 
          onPress={() => navigation.navigate('Home')} 
        />
        <TabItem 
          icon={require('../assets/anh/explore.png')} 
          label="Explore" 
          onPress={() => navigation.navigate('Explore')} 
        />
        <TabItem icon={require('../assets/anh/cart.png')} label="Cart" />
        <TabItem icon={require('../assets/anh/favourite.png')} label="Favourite" />
        <TabItem icon={require('../assets/anh/account.png')} label="Account" />
      </View>
    </SafeAreaView>
  );
};

const Section = ({ title }) => (
  <View style={styles.sectionRow}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
  </View>
);

const TabItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress} activeOpacity={0.7}>
    <Image source={icon} style={[styles.tabIcon, { tintColor: active ? '#53B175' : '#181725' }]} />
    <Text style={[styles.tabLabel, { color: active ? '#53B175' : '#181725' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', marginTop: 10 },
  logo: { width: 30, height: 35, marginBottom: 5 },
  locationText: { fontSize: 18, fontWeight: 'bold', color: '#4C4C4C' },
  searchContainer: { flexDirection: 'row', backgroundColor: '#F2F3F2', margin: 20, borderRadius: 15, padding: 15, alignItems: 'center' },
  searchIcon: { width: 18, height: 18, marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  bannerContainer: { marginHorizontal: 20, height: 115 },
  bannerImage: { width: '100%', height: '100%', borderRadius: 15 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 25, marginBottom: 15 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold' },
  seeAll: { color: '#53B175', fontSize: 16, fontWeight: '600' },
  listPadding: { paddingLeft: 20 },
  card: { width: 173, height: 250, borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2', padding: 15, marginRight: 15 },
  productImage: { width: '100%', height: 100, marginBottom: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  productSpec: { color: '#7C7C7C', fontSize: 14, marginVertical: 5 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  productPrice: { fontSize: 18, fontWeight: 'bold' },
  addButton: { backgroundColor: '#53B175', width: 45, height: 45, borderRadius: 17, justifyContent: 'center', alignItems: 'center' },
  addButtonText: { color: '#FFF', fontSize: 24 },
  catCard: { flexDirection: 'row', width: 250, height: 105, borderRadius: 18, padding: 15, alignItems: 'center', marginRight: 15 },
  catImage: { width: 70, height: 70, marginRight: 15 },
  catText: { fontSize: 20, fontWeight: 'bold', color: '#3E423F' },
  bottomTab: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#F2F3F2', paddingVertical: 10, position: 'absolute', bottom: 0, backgroundColor: '#FFF', width: '100%', justifyContent: 'space-around' },
  tabButton: { alignItems: 'center', flex: 1 },
  tabIcon: { width: 24, height: 24 },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '600' }
});

export default HomeScreen;